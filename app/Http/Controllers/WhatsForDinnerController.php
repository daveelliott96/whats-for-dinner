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
        $meals = Meal::with('mealIngredient')->get();

        return response()->json([
            'data' => $meals,
        ])->setStatusCode(200);
    }
}
