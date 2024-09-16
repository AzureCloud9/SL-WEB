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
        // Directly use env helper to log the values
        $apiKey = env('MOLLIE_API_KEY');
        $webhookUrl = env('MOLLIE_WEBHOOK_URL');
        Log::info('Mollie API Key from env: ' . $apiKey);
        Log::info('Mollie Webhook URL from env: ' . $webhookUrl);

        Log::info('Received bestelnummer: ', ['bestelnummer' => $bestelnummer]);

        $recipient = Recipient::where('bestelnummer', $bestelnummer)->first();

        if ($recipient) {
            Log::info('Recipient found: ', $recipient->toArray());
        } else {
            Log::error('Recipient not found for bestelnummer: ', ['bestelnummer' => $bestelnummer]);
        }

        if (!$recipient) {
            return redirect()->route('home')->with('error', 'Recipient not found.');
        }

        $fileUpload = FileUpload::where('bestelnummer', $bestelnummer)->first();

        if ($fileUpload) {
            Log::info('File upload found: ', $fileUpload->toArray());
        } else {
            Log::error('File upload not found for bestelnummer: ', ['bestelnummer' => $bestelnummer]);
        }

        if (!$fileUpload) {
            return redirect()->route('home')->with('error', 'File upload details not found.');
        }

        $existingOrder = CompletedOrder::where('user_id', $recipient->user_id)->first();

        if ($existingOrder) {
            Log::info('Existing order found: ', $existingOrder->toArray());
        } else {
            Log::info('No existing order found for user_id: ', ['user_id' => $recipient->user_id]);
        }

        if (!$existingOrder) {
            CompletedOrder::create([
                'user_id' => $recipient->user_id,
                'bestelnummer' => $fileUpload->bestelnummer,
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
        }

        return inertia('Payment/Success', [
            'bestelnummer' => $bestelnummer,
            'delivery_option' => $recipient->delivery_option,
            'recipient_name' => $recipient->recipient_name,
            'recipient_address' => $recipient->recipient_address,
            'recipient_postcode' => $recipient->recipient_postcode,
            'recipient_city' => $recipient->recipient_city,
            'recipient_country' => $recipient->recipient_country,
            'user_price' => $recipient->user_price,
        ]);
    }

    public function createPayment(Request $request)
    {
        // Directly use env helper to log the values
        $apiKey = env('MOLLIE_API_KEY');
        $webhookUrl = env('MOLLIE_WEBHOOK_URL');
        Log::info('Mollie API Key from env: ' . $apiKey);
        Log::info('Mollie Webhook URL from env: ' . $webhookUrl);

        Log::info('Entering createPayment method');

        $request->validate([
            'description' => 'required|string',
            'order_id' => 'required|string',
        ]);

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
        Log::info('Mollie API Key set in client');

        try {
            $payment = $mollie->payments->create([
                "amount" => [
                    "currency" => "EUR",
                    "value" => $price,
                ],
                "description" => $request->description,
                "redirectUrl" => route('payment.success', ['bestelnummer' => $fileUpload->bestelnummer]),
                "webhookUrl" => $webhookUrl,
                "metadata" => [
                    "order_id" => $request->order_id,
                ],
            ]);

            Log::info('Mollie payment created successfully', ['payment' => $payment]);

            return response()->json($payment, 201);
        } catch (\Exception $e) {
            Log::error('Error creating Mollie payment: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to create payment', 'message' => $e->getMessage()], 500);
        }
    }

    public function handleWebhook(Request $request)
    {
        // Directly use env helper to log the values
        $apiKey = env('MOLLIE_API_KEY');
        $webhookUrl = env('MOLLIE_WEBHOOK_URL');
        Log::info('Mollie API Key from env: ' . $apiKey);
        Log::info('Mollie Webhook URL from env: ' . $webhookUrl);

        Log::info('Entering handleWebhook method');

        $mollie = new MollieApiClient();
        $mollie->setApiKey($apiKey);
        Log::info('Mollie API Key set in client');

        try {
            Log::info('Webhook received: ', $request->all());

            $payment = $mollie->payments->get($request->id);
            Log::info('Payment details retrieved: ', (array)$payment);

            if ($payment->isPaid()) {
                $order_id = $payment->metadata->order_id;
                Log::info('Payment is paid. Order ID: ', ['order_id' => $order_id]);

                $recipient = Recipient::where('user_id', $order_id)->first();
                $sender = Sender::where('user_id', $order_id)->first();
                $fileUpload = FileUpload::where('user_id', $order_id)->first();

                if (!$recipient || !$fileUpload) {
                    Log::error('Order details missing for order_id: ' . $order_id);
                    return response()->json(['error' => 'Order details missing'], 400);
                }

                CompletedOrder::create([
                    'user_id' => $order_id,
                    'bestelnummer' => $fileUpload->bestelnummer,
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
                return response()->json(['message' => 'Order completed successfully'], 200);
            } else {
                Log::info('Payment not completed. Payment status: ', ['status' => $payment->status]);
            }

            return response()->json(['message' => 'Payment not completed'], 400);
        } catch (\Exception $e) {
            Log::error('Error handling Mollie webhook: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to process payment', 'message' => $e->getMessage()], 500);
        }
    }
}
