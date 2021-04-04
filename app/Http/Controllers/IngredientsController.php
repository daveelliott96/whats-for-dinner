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

class IngredientsController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $ingredients = Ingredient::all();

        $formattedIngredientData = $ingredients->map(function ($ingredient) {
            return [
                'ingredient_name' => $ingredient->name,
            ];
        });

        return response()->json([
            'data' => $formattedIngredientData,
        ])->setStatusCode(Response::HTTP_OK);
    }
}
