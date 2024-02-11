<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('meal_ingredient', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->integer('meal_id');
            $table->integer('ingredient_id');

            $table->foreign('meal_id')->references('id')->on('meal')->onDelete('cascade');;
            $table->foreign('ingredient_id')->references('id')->on('ingredient')->onDelete('cascade');;
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meal_ingredient');
    }
};
