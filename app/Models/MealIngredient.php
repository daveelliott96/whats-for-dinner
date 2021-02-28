<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class MealIngredient extends Model
{
    use SoftDeletes;

    protected $table = 'meal_ingredient';

    const UPDATED_AT = null;

    protected $fillable = [
        'meal_id',
        'ingredient_id'
    ];

    protected $dates = [
        'created_at',
        'deleted_at',
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
