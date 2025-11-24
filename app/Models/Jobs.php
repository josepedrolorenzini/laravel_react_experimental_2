<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jobs extends Model
{
    /** @use HasFactory<\Database\Factories\JobsFactory> */
    use HasFactory;
  // Explicitly define the table name since it doesn't follow Laravel's
    // plural convention (Jobs -> jobs).
    // The table name is set to 'job_listings'
    protected $table = 'job_listings';

    // Define the fields that are mass assignable
    protected $fillable = [
        'title',
        'salary',
        'location',
    ];

    // Optional: Define which attributes should be cast to native types.
    // protected $casts = [
    //     'salary' => 'integer',
    // ];
}
