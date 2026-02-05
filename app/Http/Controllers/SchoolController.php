<?php

namespace App\Http\Controllers;

use App\Models\School;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    public function index()
    {
        $schools = School::all();

        if ($schools->isEmpty()) {
            return response()->json([
                'status' => 'error',
                'message' => 'No schools found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'schools' => $schools
        ]);


    }
}
