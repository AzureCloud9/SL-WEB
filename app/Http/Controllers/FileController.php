<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class FileController extends Controller
{
    public function download($fileName)
    {
        // Fetch the file from the database
        $file = DB::table('completed_orders')->where('file_name', $fileName)->first();

        if (!$file) {
            abort(404, 'File not found.');
        }

        // Determine the file path
        $filePath = storage_path('app/' . $file->file_path);

        if (!file_exists($filePath)) {
            abort(404, 'File not found.');
        }

        return Response::download($filePath, $fileName);
    }
}
