@extends('layouts.admin')

@section('title', 'Website & Homepage Sections CMS')

@section('content')
<div class="space-y-8">

    <!-- Top header & Section Selector Tabs -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h2 class="text-2xl font-extrabold text-[#402000]">Website Content & Sections CMS</h2>
            <p class="text-xs text-[#806F5C]">Edit any text, tagline, button or notice on the website directly from here.</p>
        </div>

        <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-[#806F5C]">Select Section:</span>
            <form method="GET" action="/admin/website" class="inline-block">
                <select name="section" onchange="this.form.submit()" class="bg-white border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs font-bold text-[#402000] shadow-xs cursor-pointer focus:ring-2 focus:ring-[#E87524]">
                    @foreach($sections as $sec)
                        <option value="{{ $sec->id }}" {{ $selectedSectionId == $sec->id ? 'selected' : '' }}>
                            #{{ $sec->display_order }} - {{ $sec->section_name }} ({{ $sec->section_key }})
                        </option>
                    @endforeach
                </select>
            </form>
        </div>
    </div>

    <!-- Active Section Settings & Content Fields Card -->
    @if($activeSection)
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <!-- Left: Section Settings & Add Field Form -->
            <div class="space-y-6">
                <!-- Section General Settings -->
                <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs">
                    <h3 class="text-base font-extrabold text-[#402000] mb-4 flex items-center justify-between">
                        <span>⚙️ Section Settings</span>
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded-full {{ $activeSection->is_active ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600' }}">
                            {{ $activeSection->is_active ? 'ACTIVE' : 'INACTIVE' }}
                        </span>
                    </h3>

                    <form action="/admin/website/sections/{{ $activeSection->id }}" method="POST" class="space-y-4">
                        @csrf
                        <div>
                            <label class="block text-xs font-bold text-[#806F5C] mb-1">Section Display Name</label>
                            <input type="text" name="section_name" value="{{ $activeSection->section_name }}" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-semibold">
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-[#806F5C] mb-1">Display Order</label>
                            <input type="number" name="display_order" value="{{ $activeSection->display_order }}" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                        </div>

                        <div class="space-y-2 pt-2 border-t border-[#F0E5CF]/60">
                            <label class="flex items-center gap-2 text-xs font-semibold text-[#402000] cursor-pointer">
                                <input type="checkbox" name="is_active" value="1" {{ $activeSection->is_active ? 'checked' : '' }} class="rounded text-[#E87524]">
                                Visible on Live Website
                            </label>
                            <label class="flex items-center gap-2 text-xs font-semibold text-[#402000] cursor-pointer">
                                <input type="checkbox" name="is_published" value="1" {{ $activeSection->is_published ? 'checked' : '' }} class="rounded text-[#E87524]">
                                Published
                            </label>
                        </div>

                        <button type="submit" class="w-full bg-[#402000] hover:bg-[#2A1706] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md">
                            Save Section Settings
                        </button>
                    </form>
                </div>

                <!-- Add New Content Key/Value Field -->
                <div class="bg-[#FFFDF7] p-6 rounded-3xl border border-[#F4B000]/40 shadow-xs">
                    <h3 class="text-sm font-extrabold text-[#402000] mb-2">➕ Add New Content Field</h3>
                    <p class="text-[11px] text-[#806F5C] mb-4">Add a new text field or notice string for this section.</p>

                    <form action="/admin/website/content-field/add" method="POST" class="space-y-3">
                        @csrf
                        <input type="hidden" name="section_id" value="{{ $activeSection->id }}">
                        
                        <div>
                            <label class="block text-[11px] font-bold text-[#806F5C] mb-1">Field Key (e.g. heading, badge, notice_text)</label>
                            <input type="text" name="field_key" placeholder="e.g. cta_button_text" required class="w-full bg-white border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-mono">
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold text-[#806F5C] mb-1">Field Value</label>
                            <textarea name="field_value" rows="2" placeholder="Text content here..." class="w-full bg-white border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]"></textarea>
                        </div>

                        <button type="submit" class="w-full bg-[#E87524] hover:bg-[#cf6217] text-white text-xs font-bold py-2 rounded-xl transition-all shadow-md">
                            Add Content Field
                        </button>
                    </form>
                </div>
            </div>

            <!-- Right: Editable Content Fields for Selected Section -->
            <div class="lg:col-span-2 space-y-6">
                <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs">
                    <div class="flex items-center justify-between mb-4 pb-3 border-b border-[#F0E5CF]/70">
                        <div>
                            <h3 class="text-lg font-extrabold text-[#402000]">{{ $activeSection->section_name }} Content</h3>
                            <p class="text-xs text-[#806F5C]">Edit, update or delete individual content items. Changes reflect instantly on the website via API.</p>
                        </div>
                        <span class="text-xs font-mono font-bold bg-[#FFF9EB] text-[#E87524] px-3 py-1 rounded-full border border-[#F4B000]/30">
                            {{ count($contents) }} Editable Fields
                        </span>
                    </div>

                    @if(count($contents) > 0)
                        <form action="/admin/website/content/{{ $activeSection->id }}" method="POST" class="space-y-5">
                            @csrf
                            
                            @foreach($contents as $item)
                                <div class="p-4 rounded-2xl bg-[#FFFDF7] border border-[#F0E5CF] space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <span class="text-xs font-mono font-bold text-[#E87524] uppercase tracking-wider">{{ $item->field_key }}</span>
                                            <span class="text-[10px] text-[#806F5C]">#ID: {{ $item->id }}</span>
                                        </div>

                                        <!-- Delete Field Button -->
                                        <button type="submit" formaction="/admin/website/content-field/delete" name="field_id" value="{{ $item->id }}" onclick="return confirm('Are you sure you want to delete field {{ $item->field_key }}?')" class="text-red-500 hover:text-red-700 text-xs font-bold px-2 py-0.5 rounded hover:bg-red-50 transition-colors">
                                            ✕ Remove
                                        </button>
                                    </div>

                                    @if(strlen($item->field_value) > 80 || in_array($item->field_key, ['description', 'description_p1', 'description_p2', 'supporting_text', 'notice_text']))
                                        <textarea name="fields[{{ $item->id }}]" rows="3" class="w-full bg-white border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] leading-relaxed focus:ring-2 focus:ring-[#E87524]">{{ $item->field_value }}</textarea>
                                    @else
                                        <input type="text" name="fields[{{ $item->id }}]" value="{{ $item->field_value }}" class="w-full bg-white border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-medium focus:ring-2 focus:ring-[#E87524]">
                                    @endif
                                </div>
                            @endforeach

                            <div class="pt-4 flex justify-end">
                                <button type="submit" class="bg-[#E87524] hover:bg-[#cf6217] text-white text-xs font-extrabold px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2">
                                    <span>💾 Save All {{ $activeSection->section_name }} Content</span>
                                </button>
                            </div>
                        </form>
                    @else
                        <div class="text-center py-12 text-[#806F5C]">
                            <p class="text-sm font-semibold mb-2">No content fields created yet for this section.</p>
                            <p class="text-xs">Use the "Add New Content Field" form on the left to add headings, descriptions, buttons, etc.</p>
                        </div>
                    @endif
                </div>
            </div>

        </div>
    @endif

</div>
@endsection
