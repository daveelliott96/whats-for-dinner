<?php

declare(strict_types=1);

namespace Tests\Feature\Ingredients;


use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;

class IngredientsGetRouteTest extends TestCase
{
    use RefreshDatabase;

    private const API_URL = '/api/ingredients';

    public function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function testItGetsIngredients()
    {
        $response = $this->get(self::API_URL);

        $expected = [
            'data' => [
                [
                    'ingredient_id' => 1,
                    'ingredient_name' => 'Chicken Breast',
                ],
                [
                    'ingredient_id' => 2,
                    'ingredient_name' => 'Fajita Kit',
                ],
                [
                    'ingredient_id' => 3,
                    'ingredient_name' => 'Peppers',
                ],
                [
                    'ingredient_id' => 4,
                    'ingredient_name' => 'Onion',
                ],
                [
                    'ingredient_id' => 5,
                    'ingredient_name' => 'Egg Noodles',
                ],
                [
                    'ingredient_id' => 6,
                    'ingredient_name' => 'Diced Beef',
                ],
                [
                    'ingredient_id' => 7,
                    'ingredient_name' => 'Stir Fry Vegetables',
                ],
                [
                    'ingredient_id' => 8,
                    'ingredient_name' => 'Stir Fry Sauce',
                ],
                [
                    'ingredient_id' => 9,
                    'ingredient_name' => 'Pork Chops',
                ],
                [
                    'ingredient_id' => 10,
                    'ingredient_name' => 'Lardons',
                ],
                [
                    'ingredient_id' => 11,
                    'ingredient_name' => 'Chicken OXO Cubes',
                ],
                [
                    'ingredient_id' => 12,
                    'ingredient_name' => 'Carrots',
                ],
                [
                    'ingredient_id' => 13,
                    'ingredient_name' => 'Broccoli',
                ],
                [
                    'ingredient_id' => 14,
                    'ingredient_name' => 'Green Beans',
                ],
            ],
        ];

        $body = json_decode((string) $response->getContent(), true);

        $response->assertStatus(Response::HTTP_OK);
        $this->assertSame($expected, $body);
    }
}
