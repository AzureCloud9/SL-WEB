<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mollie\Api\MollieApiClient;
use Illuminate\Support\Facades\Log;
class WebhookController extends Controller
{
    public function handle(Request $request)
    {
        $mollie = new MollieApiClient();
        $mollie->setApiKey(env('MOLLIE_API_KEY')); // Use API key from environment

        try {
            $paymentId = $request->input('id');
            $payment = $mollie->payments->get($paymentId);

            // Handle the payment status
            if ($payment->isPaid()) {
                // Payment is paid
                Log::info("Payment {$paymentId} is paid.");
            } elseif ($payment->isOpen()) {
                // Payment is open
                Log::info("Payment {$paymentId} is open.");
            } elseif ($payment->isCanceled()) {
                // Payment is canceled
                Log::info("Payment {$paymentId} is canceled.");
            } elseif ($payment->isExpired()) {
                // Payment is expired
                Log::info("Payment {$paymentId} is expired.");
            } elseif ($payment->hasFailed()) {
                // Payment has failed
                Log::info("Payment {$paymentId} has failed.");
            } else {
                // Payment status is unknown or not handled
                Log::warning("Unhandled payment status for payment {$paymentId}");
            }
        } catch (\Exception $e) {
            Log::error('Error handling Mollie webhook: ' . $e->getMessage());
            return response()->json(['status' => 'error', 'message' => 'Failed to handle webhook'], 500);
        }

        return response()->json(['status' => 'ok']);
    }
}
