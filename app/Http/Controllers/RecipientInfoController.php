<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipient;

class RecipientController extends Controller
{
    // Method to add or update a recipient
    public function addOrUpdateRecipient(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'recipient_name' => 'required|string|max:255',
            'recipient_address' => 'required|string|max:255',
            'recipient_postcode' => 'required|string|max:20',
            'recipient_city' => 'required|string|max:100',
            'recipient_country' => 'required|string|max:100',
            'delivery_option' => 'required|in:Regulier,Spoed,Aangetekend',
            'user_price' => 'required|numeric',
        ]);

        // Retrieve user_id from session
        $userId = $request->session()->get('user_id');

        // Check if user_id exists in the session
        if (!$userId) {
            return response()->json(['error' => 'User ID not found in session'], 400);
        }

        // Check if a recipient already exists for the given user_id
        $recipient = Recipient::where('user_id', $userId)->first();

        if ($recipient) {
            // Update the existing recipient's information
            $recipient->update($validatedData);
            $message = 'Recipient updated successfully';
        } else {
            // Create a new recipient
            $recipient = new Recipient(array_merge($validatedData, ['user_id' => $userId]));
            $recipient->save();
            $message = 'Recipient added successfully';
        }

        return response()->json(['message' => $message, 'recipient' => $recipient]);
    }
}
