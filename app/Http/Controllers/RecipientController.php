<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipient;

class RecipientController extends Controller
{
    // Method to add a recipient
    public function addRecipient(Request $request)
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

        // Retrieve user_id and bestelnummer from session
        $userId = $request->session()->get('user_id');
        $bestelnummer = $request->session()->get('bestelnummer');

        // Check if user_id and bestelnummer exist in the session
        if (!$userId || !$bestelnummer) {
            return response()->json(['error' => 'User ID or Bestelnummer not found in session'], 400);
        }

        // Create a new recipient
        $recipient = new Recipient([
            'user_id' => $userId,
            'bestelnummer' => $bestelnummer, // Assign bestelnummer to its own value
            'recipient_name' => $validatedData['recipient_name'],
            'recipient_address' => $validatedData['recipient_address'],
            'recipient_postcode' => $validatedData['recipient_postcode'],
            'recipient_city' => $validatedData['recipient_city'],
            'recipient_country' => $validatedData['recipient_country'],
            'delivery_option' => $validatedData['delivery_option'],
            'user_price' => $validatedData['user_price'],
        ]);

        // Save the recipient to the database
        $recipient->save();

        return response()->json(['message' => 'Recipient added successfully', 'recipient' => $recipient]);
    }
}
