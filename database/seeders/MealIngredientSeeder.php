<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealIngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('meal_ingredient')->insert([
            [
                'id' => 1,
                'meal_id' => 1,
                'ingredient_id' => 1,
            ],
            [
                'id' => 2,
                'meal_id' => 1,
                'ingredient_id' => 2,
            ],
            [
                'id' => 3,
                'meal_id' => 1,
                'ingredient_id' => 3,
            ],
            [
                'id' => 4,
                'meal_id' => 1,
                'ingredient_id' => 4,
            ],
            [
                'id' => 5,
                'meal_id' => 2,
                'ingredient_id' => 5,
            ],
            [
                'id' => 6,
                'meal_id' => 2,
                'ingredient_id' => 6,
            ],
            [
                'id' => 7,
                'meal_id' => 2,
                'ingredient_id' => 7,
            ],
            [
                'id' => 8,
                'meal_id' => 2,
                'ingredient_id' => 8,
            ],
            [
                'id' => 9,
                'meal_id' => 3,
                'ingredient_id' => 9,
            ],
            [
                'id' => 10,
                'meal_id' => 3,
                'ingredient_id' => 10,
            ],
            [
                'id' => 11,
                'meal_id' => 3,
                'ingredient_id' => 11,
            ],
            [
                'id' => 12,
                'meal_id' => 3,
                'ingredient_id' => 12,
            ],
            [
                'id' => 13,
                'meal_id' => 3,
                'ingredient_id' => 13,
            ],
            [
                'id' => 14,
                'meal_id' => 3,
                'ingredient_id' => 14,
            ],
            [
                'id' => 15,
                'meal_id' => 3,
                'ingredient_id' => 4,
            ],
        ]);
    }
}