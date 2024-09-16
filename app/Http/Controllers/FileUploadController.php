<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FileUpload;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:pdf,doc,docx|max:20480',
        ]);

        $file = $request->file('file');
        $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
        $filePath = $file->storeAs('uploads', $fileName, 'public');

        $userId = $this->generateCustomUserId();
        $bestelnummer = $this->generateCustomBestelnummer($userId);

        $request->session()->put('user_id', $userId);
        $request->session()->put('bestelnummer', $bestelnummer);

        $fileUpload = new FileUpload();
        $fileUpload->user_id = $userId;
        $fileUpload->bestelnummer = $bestelnummer;
        $fileUpload->file_name = $fileName;
        $fileUpload->file_path = 'uploads/' . $fileName;
        $fileUpload->save();

        return response()->json([
            'success' => true,
            'fileUpload' => $fileUpload,
        ]);
    }

    public function download($fileName)
    {
        $filePath = 'uploads/' . $fileName;

        if (Storage::disk('public')->exists($filePath)) {
            return Storage::disk('public')->download($filePath);
        } else {
            return response()->json(['error' => 'File not found.'], 404);
        }
    }

    private function generateCustomUserId()
    {
        // Get the last user_id from the database
        $lastUserId = DB::table('file_uploads')->orderBy('id', 'desc')->value('user_id');

        // Extract the numeric part and increment it by 1
        if ($lastUserId) {
            $lastNumericPart = (int) substr($lastUserId, 2);
            $newNumericPart = $lastNumericPart + 1;
        } else {
            $newNumericPart = 1000; // Start from 1000 if no previous user_id
        }

        // Format the new user_id
        $newUserId = 'SL' . $newNumericPart;

        return $newUserId;
    }

    private function generateCustomBestelnummer($userId)
    {
        // Generate a unique bestelnummer based on user_id
        $numericPart = (int) substr($userId, 2);
        $bestelnummer = 'B' . $numericPart . str_pad(mt_rand(1, 999999), 6, '0', STR_PAD_LEFT);

        return $bestelnummer;
    }
}
