@extends('layouts.admin')

@section('title', 'Company Profile CMS')

@section('content')
<div class="space-y-6">

    <div>
        <h2 class="text-2xl font-extrabold text-[#402000]">Company Profile &amp; Contact Details</h2>
        <p class="text-xs text-[#806F5C]">Edit contact phone numbers, support emails and official business address</p>
    </div>

    <div class="bg-white rounded-3xl border border-[#F0E5CF] p-8 shadow-xs max-w-3xl">
        <form action="/admin/company-profile" method="POST" class="space-y-5">
            @csrf

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-bold text-[#402000] mb-2">Company Name</label>
                    <input type="text" name="company_name" value="{{ $profile->company_name ?? 'Aroma Bites' }}" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-4 py-2.5 text-xs text-[#402000] font-semibold">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#402000] mb-2">Support Phone / Mobile</label>
                    <input type="text" name="phone" value="{{ $profile->phone ?? '+91 9958585172' }}" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-4 py-2.5 text-xs text-[#402000] font-semibold">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#402000] mb-2">WhatsApp Number</label>
                    <input type="text" name="whatsapp" value="{{ $profile->whatsapp ?? '+91 9958585172' }}" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-4 py-2.5 text-xs text-[#402000] font-semibold">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#402000] mb-2">Support Email</label>
                    <input type="email" name="email" value="{{ $profile->email ?? 'Support@aromabites.in' }}" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-4 py-2.5 text-xs text-[#402000] font-semibold">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#402000] mb-2">Leads Notification Email</label>
                    <input type="email" name="leads_email" value="{{ $profile->leads_email ?? 'leads@aromabites.in' }}" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-4 py-2.5 text-xs text-[#402000] font-semibold">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#402000] mb-2">Customer Support Working Hours</label>
                    <input type="text" name="working_hours" value="{{ $profile->working_hours ?? 'Monday to Saturday: 6:00 AM – 6:00 PM' }}" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-4 py-2.5 text-xs text-[#402000] font-semibold">
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-[#402000] mb-2">Business Address</label>
                <textarea name="address" rows="3" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl p-4 text-xs text-[#402000] leading-relaxed">{{ $profile->address ?? 'Dilshad Garden, Delhi – 110095, India.' }}</textarea>
            </div>

            <div class="pt-4 flex justify-end">
                <button type="submit" class="bg-[#E87524] hover:bg-[#d66518] text-white font-bold text-xs px-8 py-3 rounded-full shadow-md transition-all">
                    Save Profile Changes
                </button>
            </div>
        </form>
    </div>

</div>
@endsection
