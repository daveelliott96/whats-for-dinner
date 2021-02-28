<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Meal extends Model
{
    use SoftDeletes;

    protected $table = 'meal';

    const UPDATED_AT = null;

    protected $fillable = [
        'name',
    ];

    protected $dates = [
        'created_at',
        'deleted_at',
    ];

    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
    ];

    public function mealIngredient(): HasMany
    {
        return $this->hasMany(MealIngredient::class, 'meal_id', 'id');
    }
}
