<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Overview;

class OverviewController extends Controller
{
    // Method to get an overview of all data related to a specific user_id
    public function getOverview(Request $request)
    {
        // Retrieve user_id from session
        $userId = $request->session()->get('user_id');

        // Check if user_id exists in the session
        if (!$userId) {
            return response()->json(['error' => 'User ID not found in session'], 400);
        }

        // Use the Overview model to fetch all related data
        $overviewData = Overview::getOverviewData($userId);

        // Return the overview data as a JSON response
        return response()->json($overviewData);
    }
}
