<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CompletedOrder;
use App\Models\Sender;

class DashboardController extends Controller
{
    public function index()
    {
        // Fetch completed orders and senders from the database
        $completedOrders = CompletedOrder::all();
        $senders = Sender::all();

        // Pass the data to the Inertia view
        return Inertia::render('Dashboard', [
            'completedOrders' => $completedOrders,
            'senders' => $senders,
        ]);
    }
}
