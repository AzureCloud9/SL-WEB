<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompletedOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'bestelnummer',
        'mollie_payment_id',  // Add this line
        'recipient_name',
        'recipient_address',
        'recipient_postcode',
        'recipient_city',
        'recipient_country',
        'delivery_option',
        'user_price',
        'file_name',
        'file_path',
    ];
}
