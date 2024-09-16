<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function getOrderDetails($bestelnummer)
    {
        // Fetch order details using bestelnummer
        $order = Order::where('order_id', $bestelnummer)->first();

        // Check if order exists
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        // Return order details
        return response()->json([
            'bestelnummer' => $order->order_id,
            'expectedDeliveryDate' => $order->expected_delivery_date,
            // Add more fields as necessary
        ]);
    }
}
