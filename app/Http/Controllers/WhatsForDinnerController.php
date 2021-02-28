<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class WhatsForDinnerController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => '',
        ])->setStatusCode(200);
    }
}
