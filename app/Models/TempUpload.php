<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TempUpload extends Model
{
    use HasFactory;

    protected $table = 'temp_uploads';

    protected $fillable = [
        'session_id',
        'file_path',
    ];

    public $timestamps = true;
}
