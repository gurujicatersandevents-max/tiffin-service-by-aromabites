@extends('layouts.admin')

@section('title', 'Meal Subscription Plans CMS')

@section('content')
<div class="space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h2 class="text-2xl font-extrabold text-[#402000]">Meal Subscription Plans Manager</h2>
            <p class="text-xs text-[#806F5C]">Edit complete plan details: Name, Tagline, Badge, Pricing, Highlight notes, and What's Included feature points.</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Add / Edit Plan Full Form -->
        <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs">
            <h3 class="text-base font-extrabold text-[#402000] mb-4">🍱 Add / Edit Plan Details</h3>

            <form action="/admin/plans" method="POST" class="space-y-4">
                @csrf
                <input type="hidden" name="id" id="plan_id" value="">

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Plan Name</label>
                    <input type="text" name="name" id="plan_name" placeholder="Gold Balanced Plan" required class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-bold">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Tagline / Subtitle</label>
                    <input type="text" name="tagline" id="plan_tagline" placeholder="Full Gourmet Meal with Protein Choice" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Badge Text</label>
                        <input type="text" name="badge" id="plan_badge" placeholder="Most Popular / Best Value" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Sort Order</label>
                        <input type="number" name="sort_order" id="plan_sort_order" value="1" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Offer Price / Meal (₹)</label>
                        <input type="number" step="0.01" name="price_per_meal" id="plan_price" placeholder="149" required class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs font-bold text-[#E87524]">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Original Price (₹) (Strike-through)</label>
                        <input type="number" step="0.01" name="original_price_per_meal" id="plan_original_price" placeholder="189" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#806F5C]">
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Highlight Note</label>
                    <input type="text" name="highlight_label" id="plan_highlight" placeholder="Recommended for Healthy Living" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">What's Included Features (1 per line)</label>
                    <textarea name="features_list" id="plan_features" rows="6" placeholder="1 Paneer / Special Seasonal Veg&#10;1 Protein Dal / Kadhi Choice&#10;4 Soft Rotis + Fragrant Jeera Rice&#10;Fresh Green Salad, Raita & Pickle&#10;Prepared in Pure Desi Ghee blend" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-mono leading-relaxed"></textarea>
                    <p class="text-[10px] text-[#806F5C] mt-1">Har feature ko nayi line me enter karein.</p>
                </div>

                <div class="space-y-2 pt-1">
                    <label class="flex items-center gap-2 text-xs font-semibold text-[#402000] cursor-pointer">
                        <input type="checkbox" name="is_popular" id="plan_is_popular" value="1" class="rounded text-[#E87524]">
                        Mark as Featured / Most Popular (Special Highlight Card)
                    </label>
                    <label class="flex items-center gap-2 text-xs font-semibold text-[#402000] cursor-pointer">
                        <input type="checkbox" name="is_active" id="plan_is_active" value="1" checked class="rounded text-[#E87524]">
                        Active (Visible on website)
                    </label>
                </div>

                <div class="flex items-center gap-2 pt-2">
                    <button type="submit" class="flex-1 bg-[#E87524] hover:bg-[#cf6217] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md">
                        Save Plan Details
                    </button>
                    <button type="button" onclick="resetPlanForm()" class="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-3 py-2.5 rounded-xl">
                        Reset
                    </button>
                </div>
            </form>
        </div>

        <!-- Plans Cards Display -->
        <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-[#F0E5CF]/70">
                <h3 class="text-base font-extrabold text-[#402000]">Active Meal Subscription Plans</h3>
                <span class="text-xs font-mono font-bold text-[#E87524]">{{ count($plans) }} Plans</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                @foreach($plans as $plan)
                    <div class="bg-white rounded-3xl border {{ $plan->is_popular ? 'border-2 border-[#E87524]' : 'border-[#F0E5CF]' }} p-6 shadow-xs flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-xs font-bold text-[#E87524] bg-[#FFF9EB] border border-[#F4B000]/40 px-2.5 py-1 rounded-full">
                                    {{ $plan->badge ?: 'Plan' }}
                                </span>
                                @if($plan->is_popular)
                                    <span class="bg-[#FBE4AC] text-[#402000] text-[10px] font-black px-2.5 py-0.5 rounded-full border border-[#F4B000]/60">
                                        FEATURED
                                    </span>
                                @endif
                            </div>

                            <h3 class="font-extrabold text-xl text-[#402000]">{{ $plan->name }}</h3>
                            <p class="text-xs text-[#806F5C] mb-3">{{ $plan->tagline }}</p>

                            <div class="flex items-baseline gap-2 mb-2">
                                <span class="text-3xl font-black text-[#E87524]">₹{{ number_format($plan->price_per_meal, 0) }}</span>
                                <span class="text-xs text-[#806F5C]">/ meal</span>
                                @if($plan->original_price_per_meal)
                                    <span class="text-xs line-through text-gray-400">₹{{ number_format($plan->original_price_per_meal, 0) }}</span>
                                @endif
                            </div>

                            @if($plan->highlight_label)
                                <p class="text-[11px] font-bold text-[#38864B] mb-4">{{ $plan->highlight_label }}</p>
                            @endif

                            <!-- Features List -->
                            <div class="space-y-1.5 mb-6 pt-3 border-t border-[#F0E5CF]/60">
                                <span class="text-[10px] font-bold text-[#806F5C] uppercase tracking-wider block mb-2">Features ({{ count($plan->features) }}):</span>
                                @foreach($plan->features as $f)
                                    <div class="flex items-center gap-2 text-xs text-[#402000]">
                                        <span class="text-[#38864B] font-bold">✓</span>
                                        <span class="truncate">{{ $f->feature_text }}</span>
                                    </div>
                                @endforeach
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="pt-4 border-t border-[#F0E5CF] flex items-center justify-between gap-3">
                            <button type="button" onclick='populatePlanForm(@json($plan))' class="flex-1 bg-[#402000] hover:bg-[#2e1700] text-white text-xs font-bold py-2 rounded-xl transition-all text-center">
                                ✏️ Edit Plan Details
                            </button>

                            <form action="/admin/plans/{{ $plan->id }}" method="POST" onsubmit="return confirm('Delete plan {{ $plan->name }}?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold px-3 py-2 rounded-xl transition-all">
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

<script>
function populatePlanForm(data) {
    document.getElementById('plan_id').value = data.id || '';
    document.getElementById('plan_name').value = data.name || '';
    document.getElementById('plan_tagline').value = data.tagline || '';
    document.getElementById('plan_badge').value = data.badge || '';
    document.getElementById('plan_sort_order').value = data.sort_order || 1;
    document.getElementById('plan_price').value = data.price_per_meal || '';
    document.getElementById('plan_original_price').value = data.original_price_per_meal || '';
    document.getElementById('plan_highlight').value = data.highlight_label || '';
    document.getElementById('plan_is_popular').checked = !!data.is_popular;
    document.getElementById('plan_is_active').checked = !!data.is_active;

    if (data.features && Array.isArray(data.features)) {
        var featureTexts = data.features.map(function(f) { return f.feature_text; }).join('\n');
        document.getElementById('plan_features').value = featureTexts;
    } else {
        document.getElementById('plan_features').value = '';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetPlanForm() {
    document.getElementById('plan_id').value = '';
    document.getElementById('plan_name').value = '';
    document.getElementById('plan_tagline').value = '';
    document.getElementById('plan_badge').value = '';
    document.getElementById('plan_sort_order').value = 1;
    document.getElementById('plan_price').value = '';
    document.getElementById('plan_original_price').value = '';
    document.getElementById('plan_highlight').value = '';
    document.getElementById('plan_features').value = '';
    document.getElementById('plan_is_popular').checked = false;
    document.getElementById('plan_is_active').checked = true;
}
</script>
@endsection
