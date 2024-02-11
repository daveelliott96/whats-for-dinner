<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('meal')->insert([
            [
                'id' => 1,
                'name' => 'Fajitas',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 2,
                'name' => 'Beef Stir Fry',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
            [
                'id' => 3,
                'name' => 'Pork Chops',
                'created_at' => '2021-03-01 11:35:37',
                'deleted_at' => null,
            ],
        ]);
    }
}