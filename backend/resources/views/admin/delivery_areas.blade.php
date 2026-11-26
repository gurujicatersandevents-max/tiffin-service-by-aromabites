@extends('layouts.admin')

@section('title', 'Delivery Hubs & Areas Manager')

@section('content')
<div class="space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h2 class="text-2xl font-extrabold text-[#402000]">Delivery Hubs & Areas Manager</h2>
            <p class="text-xs text-[#806F5C]">Add, edit or remove delivery locations displayed in the 5-box grid on the website.</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Form -->
        <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs">
            <h3 class="text-base font-extrabold text-[#402000] mb-4">📍 Add / Edit Delivery Hub</h3>

            <form action="/admin/delivery-areas/save" method="POST" class="space-y-4">
                @csrf
                <input type="hidden" name="id" id="area_id" value="">

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Area / Hub Name</label>
                    <input type="text" name="name" id="area_name" placeholder="Dilshad Garden" required class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-bold">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Zone / Region</label>
                    <input type="text" name="zone" id="area_zone" placeholder="East Delhi, Ghaziabad, Noida" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Detail / Subtitle</label>
                    <input type="text" name="detail" id="area_detail" placeholder="Metro Hub, Sec 1 & 2, etc." class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Emoji / Icon</label>
                        <input type="text" name="icon" id="area_icon" value="🏡" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Sort Order</label>
                        <input type="number" name="sort_order" id="area_sort_order" value="1" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                    </div>
                </div>

                <div>
                    <label class="flex items-center gap-2 text-xs font-semibold text-[#402000] cursor-pointer">
                        <input type="checkbox" name="is_active" id="area_is_active" value="1" checked class="rounded text-[#E87524]">
                        Active (Visible on website)
                    </label>
                </div>

                <div class="flex items-center gap-2 pt-2">
                    <button type="submit" class="flex-1 bg-[#E87524] hover:bg-[#cf6217] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md">
                        Save Delivery Hub
                    </button>
                    <button type="button" onclick="resetAreaForm()" class="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-3 py-2.5 rounded-xl">
                        Reset
                    </button>
                </div>
            </form>
        </div>

        <!-- Table / Grid of Areas -->
        <div class="lg:col-span-2">
            <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-[#F0E5CF]/70">
                    <h3 class="text-base font-extrabold text-[#402000]">Active Delivery Hubs (Desktop 5-Box Grid)</h3>
                    <span class="text-xs font-mono font-bold text-[#E87524]">{{ count($areas) }} Hubs</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    @foreach($areas as $area)
                        <div class="p-3.5 rounded-2xl bg-[#FFFDF7] border border-[#F0E5CF] flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <span class="text-xl">{{ $area->icon }}</span>
                                <div class="min-w-0">
                                    <h4 class="text-xs font-bold text-[#402000] truncate">{{ $area->name }}</h4>
                                    <p class="text-[10px] text-[#806F5C] truncate">{{ $area->detail ?: $area->zone }}</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-1.5 flex-shrink-0">
                                <button type="button" onclick='populateAreaForm(@json($area))' class="text-[11px] font-bold text-[#402000] hover:text-[#E87524] p-1">
                                    ✏️
                                </button>
                                <form action="/admin/delivery-areas/{{ $area->id }}" method="POST" onsubmit="return confirm('Delete {{ $area->name }}?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="text-[11px] font-bold text-red-500 hover:text-red-700 p-1">
                                        ✕
                                    </button>
                                </form>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>

    </div>

</div>

<script>
function populateAreaForm(data) {
    document.getElementById('area_id').value = data.id || '';
    document.getElementById('area_name').value = data.name || '';
    document.getElementById('area_zone').value = data.zone || '';
    document.getElementById('area_detail').value = data.detail || '';
    document.getElementById('area_icon').value = data.icon || '🏡';
    document.getElementById('area_sort_order').value = data.sort_order || 1;
    document.getElementById('area_is_active').checked = !!data.is_active;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetAreaForm() {
    document.getElementById('area_id').value = '';
    document.getElementById('area_name').value = '';
    document.getElementById('area_zone').value = '';
    document.getElementById('area_detail').value = '';
    document.getElementById('area_icon').value = '🏡';
    document.getElementById('area_sort_order').value = 1;
    document.getElementById('area_is_active').checked = true;
}
</script>
@endsection
