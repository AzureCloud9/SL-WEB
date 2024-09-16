<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sender;

class SenderController extends Controller
{
    // Method to add a sender
    public function addSender(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'sender_first_name' => 'required|string|max:255',
            'sender_last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        // Retrieve user_id and bestelnummer from session
        $userId = $request->session()->get('user_id');
        $bestelnummer = $request->session()->get('bestelnummer');

        // Check if user_id and bestelnummer exist in the session
        if (!$userId || !$bestelnummer) {
            return response()->json(['error' => 'User ID or Bestelnummer not found in session'], 400);
        }

        // Create a new sender
        $sender = new Sender([
            'user_id' => $userId,
            'bestelnummer' => $bestelnummer, // Use bestelnummer from session
            'sender_first_name' => $validatedData['sender_first_name'],
            'sender_last_name' => $validatedData['sender_last_name'],
            'email' => $validatedData['email'],
        ]);

        // Save the sender to the database
        $sender->save();

        return response()->json(['message' => 'Sender added successfully', 'sender' => $sender]);
    }

    // Method to get all senders
    public function getSenders()
    {
        $senders = Sender::all();
        return response()->json(['senders' => $senders]);
    }
}
