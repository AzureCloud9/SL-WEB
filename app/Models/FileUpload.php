<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileUpload extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'bestelnummer', 
        'file_name',
        'file_path',
        'mollie_payment_id',  // Add the Mollie payment ID to the fillable properties
    ];
}
