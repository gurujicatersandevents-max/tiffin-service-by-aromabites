<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminWebsiteController extends Controller
{
    public function getSections()
    {
        $sections = DB::table('homepage_sections')->orderBy('display_order', 'asc')->get();
        return response()->json(['status' => 'success', 'data' => $sections]);
    }

    public function getHomeContent()
    {
        $sections = DB::table('homepage_sections')->orderBy('display_order', 'asc')->get();
        $content = DB::table('homepage_content')->get()->groupBy('section_id');
        $cards = DB::table('homepage_cards')->orderBy('sort_order', 'asc')->get()->groupBy('section_id');

        return response()->json([
            'status' => 'success',
            'data' => [
                'sections' => $sections,
                'content' => $content,
                'cards' => $cards,
            ],
        ]);
    }

    public function updateHomeContent(Request $request)
    {
        $sectionId = $request->input('section_id');
        $fields = $request->input('fields', []); // key-value pairs

        foreach ($fields as $key => $val) {
            DB::table('homepage_content')->updateOrInsert(
                ['section_id' => $sectionId, 'field_key' => $key],
                ['field_value' => $val, 'state' => 'published', 'updated_at' => now()]
            );
        }

        return response()->json(['status' => 'success', 'message' => 'Homepage content updated']);
    }

    public function updateSection(Request $request, $id)
    {
        DB::table('homepage_sections')->where('id', $id)->update([
            'section_name' => $request->input('section_name'),
            'display_order' => $request->input('display_order', 0),
            'is_active' => $request->boolean('is_active', true),
            'updated_at' => now(),
        ]);

        return response()->json(['status' => 'success', 'message' => 'Section settings updated']);
    }

    public function publishSection(Request $request, $id)
    {
        DB::table('homepage_sections')->where('id', $id)->update([
            'is_published' => true,
            'updated_at' => now(),
        ]);

        DB::table('homepage_content')->where('section_id', $id)->update([
            'state' => 'published',
            'updated_at' => now(),
        ]);

        return response()->json(['status' => 'success', 'message' => 'Section published to live website']);
    }
}
