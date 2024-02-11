<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
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

    public function ingredient(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class, 'meal_ingredient');
    }
}