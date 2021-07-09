<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Meal;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;

class PutMealRouteTest extends TestCase
{
    use RefreshDatabase;

    const API_URL = 'api/meals/';
    const FAJITAS_MEAL_ID = 1;

    public function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function testItUpdatesAMealName()
    {
        $nameBeforeUpdate  = 'Fajitas';
        $updatedName = 'Updated Fajitas';

        $requestBody = [
            'meal_name' => $updatedName,
        ];

        $mealBeforeUpdate = Meal::find(self::FAJITAS_MEAL_ID);
        $this->assertSame($nameBeforeUpdate, $mealBeforeUpdate->name);

        $response = $this->put(self::API_URL . 1, $requestBody);
        $response->assertStatus(Response::HTTP_NO_CONTENT);

        $mealAfterUpdate = Meal::find(self::FAJITAS_MEAL_ID);
        $this->assertSame($updatedName, $mealAfterUpdate->name);
    }

    public function testItUpdatesAMealsIngredientsWithIngredientsThatDontExistInTheDb()
    {
        $requestBody = [
            'ingredients' => [
                'an ingredient',
                'a second ingredient'
            ],
        ];

        $mealBeforeUpdate = Meal::find(self::FAJITAS_MEAL_ID);

        $response = $this->put(self::API_URL . 1, $requestBody);
        $this->assertSame(Response::HTTP_NO_CONTENT, $response->getStatusCode());

        $mealAfterUpdate = Meal::find(self::FAJITAS_MEAL_ID);
        $ingredientsAfterUpdate = $mealAfterUpdate->ingredient;

        $this->assertSame($mealBeforeUpdate->name, $mealAfterUpdate->name);
        $this->assertSame(['an ingredient', 'a second ingredient'], $ingredientsAfterUpdate->pluck('name')->toArray());
    }

    public function testItUpdatesAMealsIngredientsWithIngredientsThatExistInTheDb()
    {
        $requestBody = [
            'ingredients' => [
                'Chicken Breast',
                'Fajita Kit',
                'Pork Chops',
            ],
        ];

        $mealBeforeUpdate = Meal::find(self::FAJITAS_MEAL_ID);

        $response = $this->put(self::API_URL . 1, $requestBody);
        $this->assertSame(Response::HTTP_NO_CONTENT, $response->getStatusCode());

        $mealAfterUpdate = Meal::find(self::FAJITAS_MEAL_ID);
        $ingredientsAfterUpdate = $mealAfterUpdate->ingredient;

        $expected = [
            'Chicken Breast',
            'Fajita Kit',
            'Pork Chops',
        ];

        $this->assertSame($mealBeforeUpdate->name, $mealAfterUpdate->name);
        $this->assertSame($expected, $ingredientsAfterUpdate->pluck('name')->toArray());
    }
}
