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
                    'ingredient_name' => 'Chicken Breast',
                ],
                [
                    'ingredient_name' => 'Fajita Kit',
                ],
                [
                    'ingredient_name' => 'Peppers',
                ],
                [
                    'ingredient_name' => 'Onion',
                ],
                [
                    'ingredient_name' => 'Egg Noodles',
                ],
                [
                    'ingredient_name' => 'Diced Beef',
                ],
                [
                    'ingredient_name' => 'Stir Fry Vegetables',
                ],
                [
                    'ingredient_name' => 'Stir Fry Sauce',
                ],
                [
                    'ingredient_name' => 'Pork Chops',
                ],
                [
                    'ingredient_name' => 'Lardons',
                ],
                [
                    'ingredient_name' => 'Chicken OXO Cubes',
                ],
                [
                    'ingredient_name' => 'Carrots',
                ],
                [
                    'ingredient_name' => 'Broccoli',
                ],
                [
                    'ingredient_name' => 'Green Beans',
                ],
            ],
        ];

        $body = json_decode((string) $response->getContent(), true);

        $response->assertStatus(Response::HTTP_OK);
        $this->assertSame($expected, $body);
    }
}
