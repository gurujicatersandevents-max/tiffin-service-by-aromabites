@extends('layouts.admin')

@section('title', 'Admin Dashboard')

@section('content')
<div class="space-y-8">

    <!-- Top Headline -->
    <div>
        <h2 class="text-2xl font-extrabold text-[#402000]">Dashboard Overview</h2>
        <p class="text-xs text-[#806F5C]">Welcome back to the Aroma Bites Management System</p>
    </div>

    <!-- 4 Key Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs flex items-center justify-between">
            <div>
                <p class="text-xs font-bold text-[#806F5C] uppercase tracking-wider">Total Leads</p>
                <h3 class="text-3xl font-extrabold text-[#402000] mt-1">{{ $totalLeads }}</h3>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-[#FFF9EB] text-[#E87524] flex items-center justify-center text-xl font-bold">
                👥
            </div>
        </div>

        <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs flex items-center justify-between">
            <div>
                <p class="text-xs font-bold text-[#806F5C] uppercase tracking-wider">New Enquiries</p>
                <h3 class="text-3xl font-extrabold text-[#E87524] mt-1">{{ $newLeads }}</h3>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-[#FFF2EE] text-[#E87524] flex items-center justify-center text-xl font-bold">
                🔔
            </div>
        </div>

        <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs flex items-center justify-between">
            <div>
                <p class="text-xs font-bold text-[#806F5C] uppercase tracking-wider">Active Meal Plans</p>
                <h3 class="text-3xl font-extrabold text-[#38864B] mt-1">{{ $activePlans }}</h3>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-[#F0F7F2] text-[#38864B] flex items-center justify-center text-xl font-bold">
                🍱
            </div>
        </div>

        <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs flex items-center justify-between">
            <div>
                <p class="text-xs font-bold text-[#806F5C] uppercase tracking-wider">Live FAQs</p>
                <h3 class="text-3xl font-extrabold text-[#402000] mt-1">{{ $totalFaqs }}</h3>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-[#FFF9EB] text-[#F4B000] flex items-center justify-center text-xl font-bold">
                ❓
            </div>
        </div>
    </div>

    <!-- Recent Leads Table -->
    <div class="bg-white rounded-3xl border border-[#F0E5CF] p-6 shadow-xs">
        <div class="flex items-center justify-between mb-6">
            <div>
                <h3 class="text-base font-bold text-[#402000]">Recent Customer Enquiries &amp; Plan Requests</h3>
                <p class="text-xs text-[#806F5C]">Latest leads from the public homepage modal &amp; contact form</p>
            </div>
            <a href="/admin/leads" class="text-xs font-bold text-[#E87524] hover:underline">
                View All Leads →
            </a>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
                <thead>
                    <tr class="border-b border-[#F0E5CF] text-[#806F5C] uppercase tracking-wider">
                        <th class="pb-3 font-bold">Customer</th>
                        <th class="pb-3 font-bold">Contact</th>
                        <th class="pb-3 font-bold">Plan / Slot</th>
                        <th class="pb-3 font-bold">Status</th>
                        <th class="pb-3 font-bold">Date</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-[#F0E5CF]/60">
                    @forelse($recentLeads as $lead)
                        <tr class="hover:bg-[#FFFDF7]">
                            <td class="py-3.5 font-bold text-[#402000]">{{ $lead->name }}</td>
                            <td class="py-3.5 text-[#806F5C]">{{ $lead->contact_no }}</td>
                            <td class="py-3.5">
                                <span class="bg-[#FFF9EB] text-[#E87524] font-semibold px-2.5 py-1 rounded-full text-[11px] border border-[#F4B000]/30">
                                    {{ $lead->package_selection }}
                                </span>
                            </td>
                            <td class="py-3.5">
                                @if($lead->status === 'new')
                                    <span class="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-full text-[10px]">NEW</span>
                                @elseif($lead->status === 'converted')
                                    <span class="bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px]">CONVERTED</span>
                                @else
                                    <span class="bg-yellow-50 text-yellow-800 font-bold px-2 py-0.5 rounded-full text-[10px]">{{ strtoupper($lead->status) }}</span>
                                @endif
                            </td>
                            <td class="py-3.5 text-[#806F5C] text-[11px]">{{ date('d M Y, h:i A', strtotime($lead->created_at)) }}</td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="py-6 text-center text-[#806F5C]">No leads recorded yet.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

</div>
@endsection
