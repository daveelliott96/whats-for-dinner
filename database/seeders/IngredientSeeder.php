<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ingredient')->insert([
            [
                'id' => 1,
                'name' => 'Chicken Breast',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 2,
                'name' => 'Fajita Kit',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 3,
                'name' => 'Peppers',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 4,
                'name' => 'Onion',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 5,
                'name' => 'Egg Noodles',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 6,
                'name' => 'Diced Beef',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 7,
                'name' => 'Stir Fry Vegetables',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 8,
                'name' => 'Stir Fry Sauce',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 9,
                'name' => 'Pork Chops',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 10,
                'name' => 'Lardons',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 11,
                'name' => 'Chicken OXO Cubes',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 12,
                'name' => 'Carrots',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 13,
                'name' => 'Broccoli',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 14,
                'name' => 'Green Beans',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
        ]);
    }
}
