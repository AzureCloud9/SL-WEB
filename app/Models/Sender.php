<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sender extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'bestelnummer', // Add this line
        'sender_first_name',
        'sender_last_name',
        'email',
    ];
}
