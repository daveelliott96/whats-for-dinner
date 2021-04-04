<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Ingredient;
use App\Models\Meal;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tests\TestCase;

class PostMealRouteTest extends TestCase
{
    use RefreshDatabase;

    private const API_URL = '/api/meals';

    public function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function testItSavesAMeal()
    {
        $response = $this->post(self::API_URL, [
            'meal_name' => 'This is a test meal yum',
            'ingredients' => [
                'Chicken Breast',
                'Peppers',
                'Onion',
            ],
        ]);

        $meal = Meal::where('name', 'This is a test meal yum')->first();

        $this->assertNotNull($meal);

        $expectedIngredients = [
            'Chicken Breast',
            'Peppers',
            'Onion',
        ];

        $actualIngredients = [];

        foreach ($meal->ingredient as $ingredient) {
            $actualIngredients[] = $ingredient->name;
        }

        $expectedBody = [
            'data' => [
                [
                    'meal_id' => 4,
                    'meal_name' => 'This is a test meal yum',
                    'ingredients' => [
                        [
                            'ingredient_id' => 1,
                            'ingredient_name' => 'Chicken Breast',
                        ],
                        [
                            'ingredient_id' => 3,
                            'ingredient_name' => 'Peppers',
                        ],
                        [
                            'ingredient_id' => 4,
                            'ingredient_name' => 'Onion',
                        ],
                    ],
                ],
            ],
        ];

        $body = json_decode((string) $response->getContent(), true);

        $this->assertSame($expectedBody, $body);

        $response->assertStatus(Response::HTTP_CREATED);
        $this->assertSame($expectedIngredients, $actualIngredients);
    }

    public function testItSavesAMealWithNewIngredients()
    {
        Ingredient::whereIn('name', ['Ingredient1', 'Ingredient2', 'Ingredient3'])->delete();

        $response = $this->post(self::API_URL, [
            'meal_name' => 'This is a test meal yum',
            'ingredients' => [
                'Ingredient1',
                'Ingredient2',
                'Ingredient3',
            ],
        ]);

        $response->assertStatus(Response::HTTP_CREATED);

        $meal = Meal::where('name', 'This is a test meal yum')->first();

        $this->assertNotNull($meal);

        $expectedIngredients = [
            'Ingredient1',
            'Ingredient2',
            'Ingredient3',
        ];

        $actualIngredients = [];

        foreach ($meal->ingredient as $ingredient) {
            $actualIngredients[] = $ingredient->name;
        }

        $this->assertSame($expectedIngredients, $actualIngredients);
    }

    public function testItFailsWhenSavingAMealThatAlreadyExists()
    {
        $this->withoutExceptionHandling();
        $this->expectException(HttpException::class);
        $this->expectExceptionMessage('Cannot save meal: an entry already exists with the name Fajitas');

        $response = $this->post(self::API_URL, [
            'meal_name' => 'Fajitas',
            'ingredients' => [
                'Chicken Breast',
                'Peppers',
                'Onion',
            ],
        ]);

        $response->assertStatus(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
