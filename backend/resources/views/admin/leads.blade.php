@extends('layouts.admin')

@section('title', 'Leads Management')

@section('content')
<div class="space-y-6">

    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
            <h2 class="text-2xl font-extrabold text-[#402000]">Leads &amp; Subscribers</h2>
            <p class="text-xs text-[#806F5C]">Manage incoming tiffin plan requests, trial schedules &amp; conversions</p>
        </div>

        <!-- Filter Statuses -->
        <div class="flex items-center gap-2">
            <a href="/admin/leads" class="px-3 py-1.5 rounded-full text-xs font-bold {{ !request('status') ? 'bg-[#E87524] text-white' : 'bg-white text-[#402000] border border-[#F0E5CF]' }}">All</a>
            <a href="/admin/leads?status=new" class="px-3 py-1.5 rounded-full text-xs font-bold {{ request('status') == 'new' ? 'bg-[#E87524] text-white' : 'bg-white text-[#402000] border border-[#F0E5CF]' }}">New</a>
            <a href="/admin/leads?status=trial_scheduled" class="px-3 py-1.5 rounded-full text-xs font-bold {{ request('status') == 'trial_scheduled' ? 'bg-[#E87524] text-white' : 'bg-white text-[#402000] border border-[#F0E5CF]' }}">Trial</a>
            <a href="/admin/leads?status=converted" class="px-3 py-1.5 rounded-full text-xs font-bold {{ request('status') == 'converted' ? 'bg-[#E87524] text-white' : 'bg-white text-[#402000] border border-[#F0E5CF]' }}">Converted</a>
        </div>
    </div>

    <!-- Leads Table Card -->
    <div class="bg-white rounded-3xl border border-[#F0E5CF] p-6 shadow-xs">
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
                <thead>
                    <tr class="border-b border-[#F0E5CF] text-[#806F5C] uppercase tracking-wider">
                        <th class="pb-3 font-bold">ID</th>
                        <th class="pb-3 font-bold">Customer Name</th>
                        <th class="pb-3 font-bold">Phone / Email</th>
                        <th class="pb-3 font-bold">Address / City</th>
                        <th class="pb-3 font-bold">Selected Plan</th>
                        <th class="pb-3 font-bold">Diet / Allergy Notes</th>
                        <th class="pb-3 font-bold">Status Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-[#F0E5CF]/60">
                    @forelse($leads as $lead)
                        <tr class="hover:bg-[#FFFDF7]">
                            <td class="py-4 text-[#806F5C] font-mono">#{{ $lead->id }}</td>
                            <td class="py-4 font-bold text-[#402000]">{{ $lead->name }}</td>
                            <td class="py-4 text-[#806F5C]">
                                <a href="tel:{{ $lead->contact_no }}" class="font-bold text-[#402000] hover:text-[#E87524] block">{{ $lead->contact_no }}</a>
                                <span class="text-[11px] text-[#806F5C]">{{ $lead->email ?: 'N/A' }}</span>
                            </td>
                            <td class="py-4 text-[#806F5C] max-w-xs">
                                <p class="truncate">{{ $lead->street_address }}</p>
                                <span class="text-[11px] font-semibold text-[#402000]">{{ $lead->city }}, {{ $lead->state }}</span>
                            </td>
                            <td class="py-4">
                                <span class="bg-[#FFF9EB] text-[#E87524] font-semibold px-2.5 py-1 rounded-full text-[11px] border border-[#F4B000]/30 block w-fit">
                                    {{ $lead->package_selection }}
                                </span>
                                @if($lead->tasting_slot)
                                    <span class="text-[10px] text-[#806F5C] mt-0.5 block">Slot: {{ $lead->tasting_slot }}</span>
                                @endif
                            </td>
                            <td class="py-4 text-[#806F5C] max-w-xs">
                                <p class="text-[11px] italic">{{ $lead->description_allergies ?: 'None specified' }}</p>
                            </td>
                            <td class="py-4">
                                <form action="/admin/leads/status" method="POST" class="flex items-center gap-1.5">
                                    @csrf
                                    <input type="hidden" name="lead_id" value="{{ $lead->id }}">
                                    <select name="status" onchange="this.form.submit()" class="bg-[#FFFDF7] border border-[#F0E5CF] rounded-lg px-2 py-1 text-[11px] font-bold text-[#402000] focus:outline-none focus:border-[#E87524]">
                                        <option value="new" {{ $lead->status == 'new' ? 'selected' : '' }}>New</option>
                                        <option value="contacted" {{ $lead->status == 'contacted' ? 'selected' : '' }}>Contacted</option>
                                        <option value="trial_scheduled" {{ $lead->status == 'trial_scheduled' ? 'selected' : '' }}>Trial Scheduled</option>
                                        <option value="converted" {{ $lead->status == 'converted' ? 'selected' : '' }}>Converted</option>
                                        <option value="cancelled" {{ $lead->status == 'cancelled' ? 'selected' : '' }}>Cancelled</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="7" class="py-8 text-center text-[#806F5C]">No leads found matching your criteria.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

</div>
@endsection
