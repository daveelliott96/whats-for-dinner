<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class MealIngredient extends Pivot
{
    protected $table = 'meal_ingredient';
    public $incrementing = true;

    const UPDATED_AT = null;
    const CREATED_AT = null;

    protected $fillable = [
        'meal_id',
        'ingredient_id'
    ];

    protected $casts = [
        'id' => 'integer',
        'meal_id' => 'integer',
        'ingredient_id' => 'integer',
    ];

    public function meal(): BelongsTo
    {
        return $this->belongsTo(Meal::class, 'meal_id', 'id');
    }

    public function ingredient(): BelongsTo
    {
        return $this->belongsTo(Ingredient::class, 'ingredient_id', 'id');
    }
}