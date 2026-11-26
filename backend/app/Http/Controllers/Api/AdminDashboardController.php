<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $totalLeads = DB::table('leads')->count();
        $newLeads = DB::table('leads')->where('status', 'new')->count();
        $convertedLeads = DB::table('leads')->where('status', 'converted')->count();
        $activePlans = DB::table('subscription_plans')->where('is_active', true)->count();
        $totalFaqs = DB::table('faqs')->count();
        $recentLeads = DB::table('leads')->orderBy('created_at', 'desc')->limit(5)->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'stats' => [
                    'total_leads' => $totalLeads,
                    'new_leads' => $newLeads,
                    'converted_leads' => $convertedLeads,
                    'active_plans' => $activePlans,
                    'total_faqs' => $totalFaqs,
                ],
                'recent_leads' => $recentLeads,
            ],
        ]);
    }

    public function analytics()
    {
        $leadsByStatus = DB::table('leads')
            ->select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'leads_by_status' => $leadsByStatus,
            ],
        ]);
    }
}
