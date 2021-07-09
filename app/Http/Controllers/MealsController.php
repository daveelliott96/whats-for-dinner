<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Exception\DuplicateDatabaseEntryException;
use App\Models\Ingredient;
use App\Models\Meal;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MealsController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $meals = Meal::with('ingredient')->get();

        $formattedMealData = [];

        foreach ($meals as $meal) {
            $ingredients = [];
            foreach ($meal->ingredient as $ingredient) {
                $ingredients[] = [
                    'ingredient_id' => $ingredient->id,
                    'ingredient_name' => $ingredient->name,
                ];
            }

            $formattedMealData[] = [
                'meal_id' => $meal->id,
                'meal_name' => $meal->name,
                'ingredients' => $ingredients,
            ];
        }

        return response()->json([
            'data' => $formattedMealData,
        ])->setStatusCode(Response::HTTP_OK);
    }

    public function store(Request $request): JsonResponse
    {
        $postData = $request->validate([
            'meal_name' => 'required|string|max:255',
            'ingredients' => 'required|array',
        ]);

        DB::beginTransaction();

        try {
            if (Meal::where('name', $postData['meal_name'])->exists()) {
                throw new DuplicateDatabaseEntryException(
                    'Cannot save meal: an entry already exists with the name ' . $postData['meal_name']
                );
            }

            $meal = Meal::create([
                'name' => $postData['meal_name'],
            ]);

            foreach ($postData['ingredients'] as $ingredient) {
                $existingIngredient = Ingredient::find($ingredient['ingredient_id']);

                if ($existingIngredient === null) {
                    $ingredient = Ingredient::create([
                        'name' => $ingredient['ingredient_name'],
                    ]);

                    $meal->ingredient()->attach($ingredient->id);
                } else {
                    $meal->ingredient()->attach($existingIngredient->id);
                }
            }

            $ingredients = [];
            foreach ($meal->ingredient as $ingredient) {
                $ingredients[] = [
                    'ingredient_id' => $ingredient->id,
                    'ingredient_name' => $ingredient->name,
                ];
            }

            $formattedMealData = [
                'meal_id' => $meal->id,
                'meal_name' => $meal->name,
                'ingredients' => $ingredients,
            ];

            DB::commit();

        } catch (DuplicateDatabaseEntryException $exception) {
            Log::error($exception->getMessage());
            DB::rollBack();
            abort(Response::HTTP_INTERNAL_SERVER_ERROR, $exception->getMessage());
        } catch (Exception $exception) {
            Log::error('Cannot save meal: ' . $exception->getMessage());
            DB::rollBack();
            abort(Response::HTTP_INTERNAL_SERVER_ERROR, 'Cannot save meal: ' . $exception->getMessage());
        }

        return response()->json([
            'data' => [$formattedMealData],
        ])->setStatusCode(Response::HTTP_CREATED);
    }

    public function update(Request $request, string $id): Response
    {
        $postData = $request->validate([
            'meal_name' => 'string|max:255',
            'ingredients' => 'array',
        ]);

        $mealId = (int) $id;

        try {
            DB::beginTransaction();

            $mealToUpdate = Meal::findOrFail($mealId);

            if (isset($postData['meal_name']) && $postData['meal_name'] !== $mealToUpdate->name) {
                $mealToUpdate->name = $postData['meal_name'];
                $mealToUpdate->save();
            }

            if (isset($postData['ingredients'])) {
                // Check which ingredients are already attached
                $existingIngredients = [];
                foreach ($mealToUpdate->ingredient as $existingIngredient) {
                    $existingIngredients[] = $existingIngredient->name;
                }

                // Get list of ingredients to add or remove from meal
                $ingredientsToAdd = array_diff($postData['ingredients'], $existingIngredients);
                $ingredientsToRemove = array_diff($existingIngredients, $postData['ingredients']);

                // Add new ingredients to meal
                foreach ($ingredientsToAdd as $ingredientToAdd) {
                    $ingredient = Ingredient::firstOrCreate(['name' => $ingredientToAdd]);
                    $mealToUpdate->ingredient()->attach($ingredient->id);
                }

                foreach ($ingredientsToRemove as $ingredientToRemove) {
                    $ingredient = Ingredient::where('name', $ingredientToRemove)->firstOrFail();
                    $mealToUpdate->ingredient()->detach($ingredient->id);
                }
            }
        } catch (Exception $exception) {
            Log::error('Cannot update meal: ' . $exception->getMessage() . ' in ' . $exception->getFile() . ' on line ' . $exception->getLine());
            DB::rollBack();
            abort(Response::HTTP_INTERNAL_SERVER_ERROR, 'Cannot update meal');
        }

        DB::commit();

        return response()->noContent();
    }

    public function delete(Request $request, string $id): Response
    {
        $mealId = (int) $id;

        $meal = Meal::find($mealId);

        $meal->ingredient()->detach();
        $meal->delete();

        return response()->noContent();
    }
}
