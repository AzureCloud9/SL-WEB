<?php

// app/Console/Commands/CleanupAbandonedOrders.php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CleanupAbandonedOrders extends Command
{
    protected $signature = 'cleanup:abandoned-orders';
    protected $description = 'Cleanup abandoned orders and related data.';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $this->info('Starting cleanup of abandoned orders...');

        // Define the cutoff time. Orders older than this time will be considered abandoned.
        $cutoffTime = now()->subMinutes(60); // Adjust the time as needed

        // Get all active session user IDs
        $activeUserIds = DB::table('sessions')
            ->where('last_activity', '>=', now()->subMinutes(60)->timestamp)
            ->pluck('user_id')
            ->toArray();

        // Delete related data from other tables first to maintain referential integrity.
        DB::table('recipients')
            ->whereNotIn('bestelnummer', function ($query) use ($cutoffTime) {
                $query->select('bestelnummer')
                    ->from('completed_orders')
                    ->where('created_at', '>=', $cutoffTime);
            })
            ->whereNotIn('user_id', $activeUserIds)
            ->delete();

        DB::table('senders')
            ->whereNotIn('bestelnummer', function ($query) use ($cutoffTime) {
                $query->select('bestelnummer')
                    ->from('completed_orders')
                    ->where('created_at', '>=', $cutoffTime);
            })
            ->whereNotIn('user_id', $activeUserIds)
            ->delete();

        DB::table('file_uploads')
            ->whereNotIn('bestelnummer', function ($query) use ($cutoffTime) {
                $query->select('bestelnummer')
                    ->from('completed_orders')
                    ->where('created_at', '>=', $cutoffTime);
            })
            ->whereNotIn('user_id', $activeUserIds)
            ->delete();

        // Finally, delete the abandoned orders themselves.
        DB::table('completed_orders')
            ->where('created_at', '<', $cutoffTime)
            ->whereNotIn('user_id', $activeUserIds)
            ->delete();

        $this->info('Cleanup of abandoned orders completed.');
    }
}
