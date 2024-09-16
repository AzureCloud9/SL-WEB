<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\RecipientController;
use App\Http\Controllers\SenderController;
use App\Http\Controllers\OverviewController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\WebhookController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FileController;
use Inertia\Inertia;

require __DIR__ . '/auth.php';

// Public routes
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/brief-sturen', function () {
    return Inertia::render('Shipping');
})->name('brief-sturen');

Route::get('/over-ons', function () {
    return Inertia::render('AboutUs');
})->name('overons');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/order', function () {
    return Inertia::render('PaymentSuccess');
})->name('order');

Route::post('/uploads', [FileUploadController::class, 'upload']);
Route::get('/download/{fileName}', [FileUploadController::class, 'download'])->name('file.download');
Route::post('/recipients', [RecipientController::class, 'addRecipient']);
Route::post('/senders', [SenderController::class, 'addSender']);

// Route to get all senders
Route::get('/senders', [SenderController::class, 'getSenders']);
Route::get('/overview', [OverviewController::class, 'getOverview']);
Route::post('/create-payment', [PaymentController::class, 'createPayment'])->name('payment.create');
Route::get('/payment-success/{bestelnummer}', [PaymentController::class, 'showSuccessPage'])->name('payment.success');

// Webhook route
Route::post('/webhook/mollie', [WebhookController::class, 'handle'])->name('webhook.mollie');

// Authentication routes
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});
