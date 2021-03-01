<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Meal;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WhatsForDinnerController extends Controller
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
        ])->setStatusCode(200);
    }
}
