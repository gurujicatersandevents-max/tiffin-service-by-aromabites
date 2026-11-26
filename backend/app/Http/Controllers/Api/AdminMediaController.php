<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminMediaController extends Controller
{
    public function index()
    {
        $media = DB::table('media')->orderBy('created_at', 'desc')->get();
        return response()->json(['status' => 'success', 'data' => $media]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,gif,svg,webp,mp4|max:10240',
        ]);

        $file = $request->file('file');
        $filename = time() . '_' . $file->getClientOriginalName();
        $path = $file->storeAs('public/uploads', $filename);

        $id = DB::table('media')->insertGetId([
            'filename' => $filename,
            'original_name' => $file->getClientOriginalName(),
            'mime_type' => $file->getMimeType(),
            'path' => '/storage/uploads/' . $filename,
            'size_bytes' => $file->getSize(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json([
            'status' => 'success',
            'media_id' => $id,
            'url' => '/storage/uploads/' . $filename,
        ]);
    }

    public function destroy($id)
    {
        DB::table('media')->where('id', $id)->delete();
        return response()->json(['status' => 'success', 'message' => 'Media deleted']);
    }
}
