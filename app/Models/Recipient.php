<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipient extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'bestelnummer', // Add this line
        'recipient_name',
        'recipient_address',
        'recipient_postcode',
        'recipient_city',
        'recipient_country',
        'delivery_option',
        'user_price',
    ];
}
