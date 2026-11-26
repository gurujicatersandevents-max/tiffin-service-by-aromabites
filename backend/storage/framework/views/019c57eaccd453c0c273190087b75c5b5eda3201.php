<?php $__env->startSection('title', 'Customer Reviews & Testimonials'); ?>

<?php $__env->startSection('content'); ?>
<div class="space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h2 class="text-2xl font-extrabold text-[#402000]">Customer Reviews & Video Testimonials</h2>
            <p class="text-xs text-[#806F5C]">Add and edit customer reviews with direct Photo and Video file upload options.</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Form: with enctype for file uploads -->
        <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs">
            <h3 class="text-base font-extrabold text-[#402000] mb-4">⭐ Add / Edit Review & Video</h3>

            <form action="/admin/testimonials/save" method="POST" enctype="multipart/form-data" class="space-y-4">
                <?php echo csrf_field(); ?>
                <input type="hidden" name="id" id="test_id" value="">

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Customer / Creator Name</label>
                    <input type="text" name="customer_name" id="test_name" placeholder="Neha Sharma" required class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-bold">
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Designation / Role</label>
                        <input type="text" name="customer_role" id="test_role" placeholder="Software Engineer" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Locality</label>
                        <input type="text" name="locality" id="test_locality" placeholder="Dilshad Garden" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Rating (1 to 5)</label>
                        <input type="number" name="rating" id="test_rating" min="1" max="5" value="5" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-[#806F5C] mb-1">Sort Order</label>
                        <input type="number" name="sort_order" id="test_sort_order" value="1" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Written Review / Quote</label>
                    <textarea name="review_text" id="test_review" rows="3" placeholder="What the customer says about Aroma Bites..." class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]"></textarea>
                </div>

                <!-- Photo Upload Section -->
                <div class="p-3.5 bg-[#FFFDF7] rounded-2xl border border-[#F0E5CF] space-y-2">
                    <label class="block text-xs font-bold text-[#402000]">📸 Customer Photo / Avatar</label>
                    <input type="file" name="avatar_file" accept="image/*" class="w-full text-xs text-[#806F5C] file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#E87524] file:text-white hover:file:bg-[#d66518] cursor-pointer">
                    <div class="pt-1">
                        <label class="block text-[10px] text-[#806F5C] mb-0.5">Or Paste Photo URL:</label>
                        <input type="text" name="avatar_url" id="test_avatar" placeholder="https://..." class="w-full bg-white border border-[#F0E5CF] rounded-xl px-3 py-1.5 text-xs text-[#402000]">
                    </div>
                </div>

                <!-- Video Upload Section -->
                <div class="p-3.5 bg-[#FFFDF7] rounded-2xl border border-[#F0E5CF] space-y-2">
                    <label class="block text-xs font-bold text-[#402000]">🎥 Video Review Upload</label>
                    <input type="file" name="video_file" accept="video/mp4,video/webm,video/mov" class="w-full text-xs text-[#806F5C] file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#402000] file:text-white hover:file:bg-[#2e1700] cursor-pointer">
                    <div class="pt-1 space-y-1.5">
                        <div>
                            <label class="block text-[10px] text-[#806F5C] mb-0.5">Video Title / Topic:</label>
                            <input type="text" name="video_title" id="test_video_title" placeholder="e.g. Daily Healthy Living" class="w-full bg-white border border-[#F0E5CF] rounded-xl px-3 py-1.5 text-xs text-[#402000]">
                        </div>
                        <div>
                            <label class="block text-[10px] text-[#806F5C] mb-0.5">Or Paste Video URL (MP4 / YouTube / Cloud):</label>
                            <input type="text" name="video_url" id="test_video_url" placeholder="/Website%20Animation_1382p.mp4 or URL" class="w-full bg-white border border-[#F0E5CF] rounded-xl px-3 py-1.5 text-xs text-[#402000]">
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <label class="flex items-center gap-2 text-xs font-semibold text-[#402000] cursor-pointer">
                        <input type="checkbox" name="is_verified" id="test_verified" value="1" checked class="rounded text-[#E87524]">
                        Verified Customer
                    </label>
                    <label class="flex items-center gap-2 text-xs font-semibold text-[#402000] cursor-pointer">
                        <input type="checkbox" name="is_active" id="test_is_active" value="1" checked class="rounded text-[#E87524]">
                        Active (Visible)
                    </label>
                </div>

                <div class="flex items-center gap-2 pt-2">
                    <button type="submit" class="flex-1 bg-[#E87524] hover:bg-[#cf6217] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md">
                        Save Testimonial
                    </button>
                    <button type="button" onclick="resetTestForm()" class="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-3 py-2.5 rounded-xl">
                        Reset
                    </button>
                </div>
            </form>
        </div>

        <!-- Table / List of Testimonials -->
        <div class="lg:col-span-2">
            <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-[#F0E5CF]/70">
                    <h3 class="text-base font-extrabold text-[#402000]">Active Customer Reviews & Video Stories</h3>
                    <span class="text-xs font-mono font-bold text-[#E87524]"><?php echo e(count($testimonials)); ?> Items</span>
                </div>

                <div class="space-y-4">
                    <?php $__currentLoopData = $testimonials; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $t): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="p-4 rounded-2xl bg-[#FFFDF7] border border-[#F0E5CF] flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                                <?php if($t->avatar_url): ?>
                                    <img src="<?php echo e($t->avatar_url); ?>" alt="<?php echo e($t->customer_name); ?>" class="w-12 h-12 rounded-full object-cover border border-[#F0E5CF] flex-shrink-0">
                                <?php else: ?>
                                    <div class="w-12 h-12 rounded-full bg-[#FFF9EB] text-[#E87524] font-bold flex items-center justify-center flex-shrink-0 text-sm border border-[#F0E5CF]">
                                        <?php echo e(strtoupper(substr($t->customer_name, 0, 2))); ?>

                                    </div>
                                <?php endif; ?>

                                <div class="space-y-1 min-w-0 flex-1">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="text-amber-500 font-bold text-xs">★ <?php echo e($t->rating); ?>.0</span>
                                        <h4 class="text-xs font-bold text-[#402000]"><?php echo e($t->customer_name); ?></h4>
                                        <span class="text-[10px] text-[#806F5C]">(<?php echo e($t->customer_role ?: 'Subscriber'); ?>, <?php echo e($t->locality); ?>)</span>
                                        <?php if($t->video_url): ?>
                                            <span class="bg-[#FFF2EE] text-[#E87524] font-bold text-[10px] px-2 py-0.5 rounded-full border border-[#E87524]/30">🎥 Video Available</span>
                                        <?php endif; ?>
                                    </div>
                                    <?php if($t->video_title): ?>
                                        <p class="text-xs font-bold text-[#402000]">Title: <?php echo e($t->video_title); ?></p>
                                    <?php endif; ?>
                                    <?php if($t->review_text): ?>
                                        <p class="text-xs text-[#806F5C] italic line-clamp-2">“<?php echo e($t->review_text); ?>”</p>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <div class="flex items-center gap-2 flex-shrink-0">
                                <button type="button" onclick='populateTestForm(<?php echo json_encode($t, 15, 512) ?>)' class="bg-[#402000] hover:bg-[#2A1706] text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all">
                                    Edit
                                </button>
                                <form action="/admin/testimonials/<?php echo e($t->id); ?>" method="POST" onsubmit="return confirm('Delete this review?')">
                                    <?php echo csrf_field(); ?>
                                    <?php echo method_field('DELETE'); ?>
                                    <button type="submit" class="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-xl transition-all">
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>
        </div>

    </div>

</div>

<script>
function populateTestForm(data) {
    document.getElementById('test_id').value = data.id || '';
    document.getElementById('test_name').value = data.customer_name || '';
    document.getElementById('test_role').value = data.customer_role || '';
    document.getElementById('test_locality').value = data.locality || '';
    document.getElementById('test_rating').value = data.rating || 5;
    document.getElementById('test_sort_order').value = data.sort_order || 1;
    document.getElementById('test_review').value = data.review_text || '';
    document.getElementById('test_avatar').value = data.avatar_url || '';
    document.getElementById('test_video_url').value = data.video_url || '';
    document.getElementById('test_video_title').value = data.video_title || '';
    document.getElementById('test_verified').checked = !!data.is_verified;
    document.getElementById('test_is_active').checked = !!data.is_active;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetTestForm() {
    document.getElementById('test_id').value = '';
    document.getElementById('test_name').value = '';
    document.getElementById('test_role').value = '';
    document.getElementById('test_locality').value = '';
    document.getElementById('test_rating').value = 5;
    document.getElementById('test_sort_order').value = 1;
    document.getElementById('test_review').value = '';
    document.getElementById('test_avatar').value = '';
    document.getElementById('test_video_url').value = '';
    document.getElementById('test_video_title').value = '';
    document.getElementById('test_verified').checked = true;
    document.getElementById('test_is_active').checked = true;
}
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/deveshkumar/Downloads/Developement/tiffin-service-by-aromabites/backend/resources/views/admin/testimonials.blade.php ENDPATH**/ ?>