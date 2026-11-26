<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminLeadController extends Controller
{
    public function index(Request $request)
    {
        $query = DB::table('leads')->orderBy('created_at', 'desc');

        if ($request->has('status') && $request->status) {
            $query->where('status', $request->status);
        }

        if ($request->has('search') && $request->search) {
            $search = '%' . $request->search . '%';
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', $search)
                  ->orWhere('contact_no', 'like', $search)
                  ->orWhere('email', 'like', $search);
            });
        }

        $leads = $query->paginate(15);
        return response()->json(['status' => 'success', 'data' => $leads]);
    }

    public function show($id)
    {
        $lead = DB::table('leads')->where('id', $id)->first();
        if (!$lead) {
            return response()->json(['status' => 'error', 'message' => 'Lead not found'], 404);
        }

        $notes = DB::table('lead_notes')->where('lead_id', $id)->orderBy('created_at', 'desc')->get();
        $activities = DB::table('lead_activities')->where('lead_id', $id)->orderBy('created_at', 'desc')->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'lead' => $lead,
                'notes' => $notes,
                'activities' => $activities,
            ],
        ]);
    }

    public function update(Request $request, $id)
    {
        $updateData = $request->only([
            'name', 'contact_no', 'email', 'street_address', 'city', 'district', 'state', 'package_selection', 'tasting_slot', 'description_allergies', 'status'
        ]);
        $updateData['updated_at'] = now();

        DB::table('leads')->where('id', $id)->update($updateData);

        return response()->json(['status' => 'success', 'message' => 'Lead updated successfully']);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate(['status' => 'required|in:new,contacted,trial_scheduled,converted,cancelled']);

        DB::table('leads')->where('id', $id)->update([
            'status' => $request->status,
            'updated_at' => now(),
        ]);

        DB::table('lead_activities')->insert([
            'lead_id' => $id,
            'activity_type' => 'status_change',
            'details' => 'Status changed to ' . $request->status,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json(['status' => 'success', 'message' => 'Lead status updated']);
    }

    public function destroy($id)
    {
        DB::table('leads')->where('id', $id)->delete();
        return response()->json(['status' => 'success', 'message' => 'Lead deleted']);
    }
}
