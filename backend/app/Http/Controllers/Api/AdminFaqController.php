<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminFaqController extends Controller
{
    public function index()
    {
        $faqs = DB::table('faqs')->orderBy('sort_order', 'asc')->get();
        return response()->json(['status' => 'success', 'data' => $faqs]);
    }

    public function store(Request $request)
    {
        $id = DB::table('faqs')->insertGetId([
            'category' => $request->category ?? 'General',
            'question' => $request->question,
            'answer' => $request->answer,
            'sort_order' => $request->sort_order ?? 0,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json(['status' => 'success', 'faq_id' => $id]);
    }

    public function update(Request $request, $id)
    {
        DB::table('faqs')->where('id', $id)->update([
            'category' => $request->category,
            'question' => $request->question,
            'answer' => $request->answer,
            'sort_order' => $request->sort_order,
            'is_active' => $request->boolean('is_active', true),
            'updated_at' => now(),
        ]);

        return response()->json(['status' => 'success', 'message' => 'FAQ updated']);
    }

    public function destroy($id)
    {
        DB::table('faqs')->where('id', $id)->delete();
        return response()->json(['status' => 'success', 'message' => 'FAQ deleted']);
    }
}
