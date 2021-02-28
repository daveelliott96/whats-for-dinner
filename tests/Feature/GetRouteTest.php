<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Ingredient;
use App\Models\Meal;
use App\Models\MealIngredient;
use Tests\TestCase;

class GetRouteTest extends TestCase
{
    private $meals;
    private $ingredients;
    private $mealIngredients;

    private const API_URL = '/api/meals';

    public function setUp(): void
    {
        parent::setUp();
        $this->meals = Meal::all();
        $this->ingredients = Ingredient::all();
        $this->mealIngredients = MealIngredient::all();

        $this->deleteTableData();

    }

    public function tearDown(): void
    {
        parent::tearDown();
        $this->deleteTableData();

        $this->meals->save();
        $this->ingredients->save();
        $this->mealIngredients->save();
    }

    public function testItGetsMealData(): void
    {
        Meal::create(
            ['name' => 'meal1'],
        );

        $expected = [
            'data' => [
                0 => [
                    'meal_id' => 1,
                    'meal_name' => 'meal1',
                    'ingredients' => [
                        0 => [
                            'ingredient_id' => 1,
                            'name' => 'Chicken',
                        ],
                        1 => [
                            'ingredient_id' => 2,
                            'name' => 'Ham',
                        ],
                    ],
                ],
            ],
        ];

        $response = $this->get(self::API_URL);

        $response->assertStatus(200);
        $response->assertExactJson($expected);
    }

    private function deleteTableData(): void
    {
        foreach (MealIngredient::all() as $mealIngredient) {
            $mealIngredient->forceDelete();
        }

        foreach (Meal::all() as $meal) {
            $meal->forceDelete();
        }

        foreach (Ingredient::all() as $ingredient) {
            $ingredient->forceDelete();
        }
    }
}
