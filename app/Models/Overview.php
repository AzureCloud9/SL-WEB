<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Overview extends Model
{
    // This model won't use a specific table
    protected $table = null;

    // Method to get overview data for a specific user_id
    public static function getOverviewData($userId)
    {
        // Fetch data from file_uploads table
        $fileUploads = DB::table('file_uploads')->where('user_id', $userId)->get();
        error_log('File Uploads: ' . json_encode($fileUploads));

        // Fetch data from recipients table
        $recipients = DB::table('recipients')->where('user_id', $userId)->get();
        error_log('Recipients: ' . json_encode($recipients));

        // Fetch data from senders table
        $senders = DB::table('senders')->where('user_id', $userId)->get();
        error_log('Senders: ' . json_encode($senders));

        return [
            'fileUploads' => $fileUploads,
            'recipients' => $recipients,
            'senders' => $senders,
        ];
    }
}
