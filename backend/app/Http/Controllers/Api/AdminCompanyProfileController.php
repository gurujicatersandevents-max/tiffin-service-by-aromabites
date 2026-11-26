<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminCompanyProfileController extends Controller
{
    public function show()
    {
        $profile = DB::table('company_profiles')->first();
        return response()->json(['status' => 'success', 'data' => $profile]);
    }

    public function update(Request $request)
    {
        $data = $request->only([
            'company_name', 'tagline', 'phone', 'whatsapp', 'email', 'leads_email', 'address', 'working_hours', 'logo_url'
        ]);
        $data['updated_at'] = now();

        DB::table('company_profiles')->where('id', 1)->update($data);

        return response()->json(['status' => 'success', 'message' => 'Company profile updated']);
    }
}
