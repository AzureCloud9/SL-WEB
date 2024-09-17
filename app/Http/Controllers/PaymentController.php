<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mollie\Api\MollieApiClient;
use App\Models\Recipient;
use App\Models\Sender;
use App\Models\FileUpload;
use App\Models\CompletedOrder;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller
{
    public function showSuccessPage($bestelnummer)
{
    $apiKey = env('MOLLIE_API_KEY');
    $mollie = new MollieApiClient();
    $mollie->setApiKey($apiKey);

    Log::info('Received bestelnummer: ', ['bestelnummer' => $bestelnummer]);

    $recipient = Recipient::where('bestelnummer', $bestelnummer)->first();

    if (!$recipient) {
        Log::error('Recipient not found for bestelnummer: ', ['bestelnummer' => $bestelnummer]);
        return redirect()->route('home')->with('error', 'Recipient not found.');
    }

    $fileUpload = FileUpload::where('bestelnummer', $bestelnummer)->first();

    if (!$fileUpload) {
        Log::error('File upload not found for bestelnummer: ', ['bestelnummer' => $bestelnummer]);
        return redirect()->route('home')->with('error', 'File upload details not found.');
    }

    try {
        // Use the Mollie payment ID from the FileUpload table
        $paymentId = $fileUpload->mollie_payment_id;

        if (!$paymentId) {
            Log::error('No payment ID found in FileUpload for bestelnummer: ', ['bestelnummer' => $bestelnummer]);
            return redirect()->route('home')->with('error', 'No payment information found.');
        }

        // Fetch the payment status from Mollie
        $payment = $mollie->payments->get($paymentId);

        if ($payment->isPaid()) {
            Log::info('Payment successful for bestelnummer: ', ['bestelnummer' => $bestelnummer]);

            // Check if the order already exists in completed_orders
            $existingOrder = CompletedOrder::where('user_id', $recipient->user_id)->first();

            if (!$existingOrder) {
                // If no existing order, insert a new record into completed_orders
                CompletedOrder::create([
                    'user_id' => $recipient->user_id,
                    'bestelnummer' => $fileUpload->bestelnummer,  // Keep original bestelnummer
                    'mollie_payment_id' => $payment->id,  // Store Mollie payment ID
                    'recipient_name' => $recipient->recipient_name,
                    'recipient_address' => $recipient->recipient_address,
                    'recipient_postcode' => $recipient->recipient_postcode,
                    'recipient_city' => $recipient->recipient_city,
                    'recipient_country' => $recipient->recipient_country,
                    'delivery_option' => $recipient->delivery_option,
                    'user_price' => $recipient->user_price,
                    'file_name' => $fileUpload->file_name,
                    'file_path' => $fileUpload->file_path,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                Log::info('Order inserted into completed_orders for user_id: ', ['user_id' => $recipient->user_id]);
            } else {
                // If the order exists, you could choose to update it if necessary (optional)
                Log::info('Order already exists for user_id: ', ['user_id' => $recipient->user_id]);
            }

            // If payment is successful, show success page
            return inertia('Payment/Success', [
                'bestelnummer' => $bestelnummer,
                'delivery_option' => $recipient->delivery_option,
                'recipient_name' => $recipient->recipient_name,
                'recipient_address' => $recipient->recipient_address,
                'recipient_postcode' => $recipient->recipient_postcode,
                'recipient_city' => $recipient->recipient_city,
                'recipient_country' => $recipient->recipient_country,
                'user_price' => $recipient->user_price,
                'payment_status' => 'paid',
            ]);
        } else {
            // If payment is canceled or failed, redirect to homepage
            Log::info('Payment not completed. Redirecting to homepage. Payment status: ', ['status' => $payment->status]);
            return redirect()->route('home')->with('error', 'Your payment was not successful. Please try again.');
        }
    } catch (\Exception $e) {
        Log::error('Error retrieving payment from Mollie: ' . $e->getMessage());
        return redirect()->route('home')->with('error', 'Unable to retrieve payment status.');
    }
}

public function createPayment(Request $request)
{
    $apiKey = env('MOLLIE_API_KEY');
    $webhookUrl = env('MOLLIE_WEBHOOK_URL');

    Log::info('Mollie API Key from env: ' . $apiKey);
    Log::info('Mollie Webhook URL from env: ' . $webhookUrl);

    $request->validate([
        'description' => 'required|string',
        'order_id' => 'required|string',
    ]);

    // Get recipient and file upload using order_id (bestelnummer)
    $recipient = Recipient::where('user_id', $request->order_id)->first();
    $fileUpload = FileUpload::where('user_id', $request->order_id)->first();

    if (!$recipient || !$fileUpload) {
        Log::error('Recipient or file upload not found', ['order_id' => $request->order_id]);
        return response()->json(['error' => 'Recipient or file upload not found'], 404);
    }

    $price = number_format($recipient->user_price, 2, '.', '');
    Log::info('Price: ' . $price);

    $mollie = new MollieApiClient();
    $mollie->setApiKey($apiKey);

    try {
        // Create a payment via Mollie API
        $payment = $mollie->payments->create([
            "amount" => [
                "currency" => "EUR",
                "value" => $price,
            ],
            "description" => $request->description,
            "redirectUrl" => route('payment.success', ['bestelnummer' => $fileUpload->bestelnummer]),  // Continue using bestelnummer
            "webhookUrl" => $webhookUrl,
            "metadata" => [
                "order_id" => $request->order_id,  // Pass order_id as metadata
            ],
        ]);

        Log::info('Mollie payment created successfully', ['payment' => $payment]);

        // Now that the Mollie payment has been created, update the FileUpload record with the Mollie payment ID
        $fileUpload->mollie_payment_id = $payment->id;
        $fileUpload->save();  // Save the updated record

        // Return the payment details without inserting into the completed_orders yet
        return response()->json($payment, 201);  // Return payment details
    } catch (\Exception $e) {
        Log::error('Error creating Mollie payment: ' . $e->getMessage());
        return response()->json(['error' => 'Failed to create payment', 'message' => $e->getMessage()], 500);
    }
}




    public function handleWebhook(Request $request)
    {
        $apiKey = env('MOLLIE_API_KEY');
        $mollie = new MollieApiClient();
        $mollie->setApiKey($apiKey);

        try {
            Log::info('Webhook received: ', $request->all());

            // Retrieve the payment details from Mollie
            $payment = $mollie->payments->get($request->id);
            Log::info('Payment details retrieved: ', (array)$payment);

            // Handle payment success
            if ($payment->isPaid()) {
                $order_id = $payment->metadata->order_id;
                Log::info('Payment is paid. Order ID: ', ['order_id' => $order_id]);

                $recipient = Recipient::where('user_id', $order_id)->first();
                $fileUpload = FileUpload::where('user_id', $order_id)->first();

                if (!$recipient || !$fileUpload) {
                    Log::error('Order details missing for order_id: ' . $order_id);
                    return response()->json(['error' => 'Order details missing'], 400);
                }

                // Insert into the database only if not already inserted
                if (!CompletedOrder::where('mollie_payment_id', $payment->id)->exists()) {
                    CompletedOrder::create([
                        'user_id' => $order_id,
                        'bestelnummer' => $fileUpload->bestelnummer,
                        'mollie_payment_id' => $payment->id,
                        'recipient_name' => $recipient->recipient_name,
                        'recipient_address' => $recipient->recipient_address,
                        'recipient_postcode' => $recipient->recipient_postcode,
                        'recipient_city' => $recipient->recipient_city,
                        'recipient_country' => $recipient->recipient_country,
                        'delivery_option' => $recipient->delivery_option,
                        'user_price' => $recipient->user_price,
                        'file_name' => $fileUpload->file_name,
                        'file_path' => $fileUpload->file_path,
                    ]);

                    Log::info('Order inserted into completed_orders for order_id: ', ['order_id' => $order_id]);
                }

                return response()->json(['message' => 'Order completed successfully'], 200);
            }

            // Handle payment failure or cancellation
            if ($payment->isCanceled() || $payment->isFailed()) {
                Log::info('Payment was canceled or failed. Payment ID: ', ['payment_id' => $payment->id]);
                return response()->json(['message' => 'Payment was canceled or failed'], 400);
            }

            // Payment pending or other status
            Log::info('Payment not completed. Payment status: ', ['status' => $payment->status]);
            return response()->json(['message' => 'Payment not completed'], 400);
        } catch (\Exception $e) {
            Log::error('Error handling Mollie webhook: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to process payment', 'message' => $e->getMessage()], 500);
        }
    }
}
