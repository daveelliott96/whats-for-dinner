<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetRouteTest extends TestCase
{
    use RefreshDatabase;

    private const API_URL = '/api/meals';

    public function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function testItGetsMealData(): void
    {
        $expected = [
            'data' => [
                0 => [
                    'meal_id' => 1,
                    'meal_name' => 'Fajitas',
                    'ingredients' => [
                        0 => [
                            'ingredient_id' => 1,
                            'ingredient_name' => 'Chicken Breast',
                        ],
                        1 => [
                            'ingredient_id' => 2,
                            'ingredient_name' => 'Fajita Kit',
                        ],
                        2 => [
                            'ingredient_id' => 3,
                            'ingredient_name' => 'Peppers',
                        ],
                        3 => [
                            'ingredient_id' => 4,
                            'ingredient_name' => 'Onion',
                        ],
                    ],
                ],
                1 => [
                    'meal_id' => 2,
                    'meal_name' => 'Beef Stir Fry',
                    'ingredients' => [
                        0 => [
                            'ingredient_id' => 5,
                            'ingredient_name' => 'Egg Noodles',
                        ],
                        1 => [
                            'ingredient_id' => 6,
                            'ingredient_name' => 'Diced Beef',
                        ],
                        2 => [
                            'ingredient_id' => 7,
                            'ingredient_name' => 'Stir Fry Vegetables',
                        ],
                        3 => [
                            'ingredient_id' => 8,
                            'ingredient_name' => 'Stir Fry Sauce',
                        ],
                    ],
                ],
                2 => [
                    'meal_id' => 3,
                    'meal_name' => 'Pork Chops',
                    'ingredients' => [
                        0 => [
                            'ingredient_id' => 4,
                            'ingredient_name' => 'Onion',
                        ],
                        1 => [
                            'ingredient_id' => 9,
                            'ingredient_name' => 'Pork Chops',
                        ],
                        2 => [
                            'ingredient_id' => 10,
                            'ingredient_name' => 'Lardons',
                        ],
                        3 => [
                            'ingredient_id' => 11,
                            'ingredient_name' => 'Chicken OXO Cubes',
                        ],
                        4 => [
                            'ingredient_id' => 12,
                            'ingredient_name' => 'Carrots',
                        ],
                        5 => [
                            'ingredient_id' => 13,
                            'ingredient_name' => 'Broccoli',
                        ],
                        6 => [
                            'ingredient_id' => 14,
                            'ingredient_name' => 'Green Beans',
                        ],
                    ],
                ],
            ],
        ];

        $response = $this->get(self::API_URL);

        $response->assertStatus(200);
        $response->assertExactJson($expected);
    }
}
