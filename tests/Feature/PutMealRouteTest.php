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
        $updatedName = 'Updated Fajitas';

        $updateData = [
            'meal_id' => 1,
            'meal_name' => $updatedName,
        ];

        $mealBeforeUpdate = Meal::find(self::FAJITAS_MEAL_ID);
        $this->assertSame('Fajitas', $mealBeforeUpdate->name);

        $response = $this->put(self::API_URL . 1, $updateData);
        $response->assertStatus(Response::HTTP_NO_CONTENT);

        $mealAfterUpdate = Meal::find(self::FAJITAS_MEAL_ID);
        $this->assertSame($updatedName, $mealAfterUpdate->name);
    }
}
