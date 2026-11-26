<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminPlanController extends Controller
{
    public function index()
    {
        $plans = DB::table('subscription_plans')->orderBy('sort_order', 'asc')->get()->map(function ($plan) {
            $plan->features = DB::table('subscription_plan_features')
                ->where('plan_id', $plan->id)
                ->orderBy('sort_order', 'asc')
                ->get();
            return $plan;
        });

        return response()->json(['status' => 'success', 'data' => $plans]);
    }

    public function store(Request $request)
    {
        $planId = DB::table('subscription_plans')->insertGetId([
            'name' => $request->name,
            'tagline' => $request->tagline,
            'badge' => $request->badge,
            'price_per_meal' => $request->price_per_meal,
            'original_price_per_meal' => $request->original_price_per_meal,
            'highlight_label' => $request->highlight_label,
            'is_popular' => $request->boolean('is_popular', false),
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json(['status' => 'success', 'plan_id' => $planId]);
    }

    public function update(Request $request, $id)
    {
        DB::table('subscription_plans')->where('id', $id)->update([
            'name' => $request->name,
            'tagline' => $request->tagline,
            'badge' => $request->badge,
            'price_per_meal' => $request->price_per_meal,
            'original_price_per_meal' => $request->original_price_per_meal,
            'highlight_label' => $request->highlight_label,
            'is_popular' => $request->boolean('is_popular', false),
            'is_active' => $request->boolean('is_active', true),
            'updated_at' => now(),
        ]);

        return response()->json(['status' => 'success', 'message' => 'Plan updated']);
    }

    public function destroy($id)
    {
        DB::table('subscription_plans')->where('id', $id)->delete();
        return response()->json(['status' => 'success', 'message' => 'Plan deleted']);
    }
}
