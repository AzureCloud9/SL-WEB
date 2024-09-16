<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderOverview extends Model
{
    use HasFactory;

    protected $fillable = [
        'bestelnummer',
        'shipping_option',
        'price',
        // add other fillable attributes here
    ];
}
