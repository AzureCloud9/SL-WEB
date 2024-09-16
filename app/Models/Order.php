<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'bestelnummer',
        'document_path',
        'recipient_first_name',
        'recipient_last_name',
        'recipient_street_address',
        'recipient_postal_code',
        'recipient_city',
        'recipient_country',
        'sender_first_name',
        'sender_last_name',
        'sender_street_address',
        'sender_postal_code',
        'shipping_option',
        'total_cost',
    ];
}
