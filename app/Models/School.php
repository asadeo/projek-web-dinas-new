<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class School extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'npsn',
        'address',
        'district',
        'level',
        'status',
        'photo',
        'latitude',
        'longitude',
        'student_2023',
        'student_2024',
        'student_2025',
        'accreditation',
    ];
}
