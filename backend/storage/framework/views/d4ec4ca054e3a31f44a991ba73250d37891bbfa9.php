<?php $__env->startSection('title', 'SEO & Meta Tags Manager'); ?>

<?php $__env->startSection('content'); ?>
<div class="space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h2 class="text-2xl font-extrabold text-[#402000]">SEO & Meta Tags Manager</h2>
            <p class="text-xs text-[#806F5C]">Manage Meta Titles, Descriptions, Keywords and OG Images for Home and all pages.</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Add / Edit SEO Form -->
        <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs">
            <h3 class="text-base font-extrabold text-[#402000] mb-4">⚙️ Add / Update Page SEO</h3>

            <form action="/admin/seo/save" method="POST" class="space-y-4">
                <?php echo csrf_field(); ?>
                <input type="hidden" name="id" id="seo_id" value="">

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Page Route / Slug</label>
                    <input type="text" name="page_route" id="seo_page_route" placeholder="home, contact, about" required class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-mono">
                    <p class="text-[10px] text-[#806F5C] mt-1">Use 'home' for the main landing page.</p>
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Meta Title</label>
                    <input type="text" name="meta_title" id="seo_meta_title" placeholder="Aroma Bites | ..." required class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-medium">
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Meta Description</label>
                    <textarea name="meta_description" id="seo_meta_description" rows="3" placeholder="Brief description for Google search results..." class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]"></textarea>
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">Meta Keywords (comma-separated)</label>
                    <textarea name="meta_keywords" id="seo_meta_keywords" rows="2" placeholder="tiffin service, meal delivery, etc." class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]"></textarea>
                </div>

                <div>
                    <label class="block text-xs font-bold text-[#806F5C] mb-1">OG Share Image URL</label>
                    <input type="text" name="og_image" id="seo_og_image" placeholder="/logo.png or full image URL" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                </div>

                <div class="flex items-center gap-2 pt-2">
                    <button type="submit" class="flex-1 bg-[#E87524] hover:bg-[#cf6217] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md">
                        Save SEO Settings
                    </button>
                    <button type="button" onclick="resetSeoForm()" class="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-3 py-2.5 rounded-xl">
                        Reset
                    </button>
                </div>
            </form>
        </div>

        <!-- SEO Pages Table -->
        <div class="lg:col-span-2">
            <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-[#F0E5CF]/70">
                    <h3 class="text-base font-extrabold text-[#402000]">Active Page SEO Records</h3>
                    <span class="text-xs font-mono font-bold text-[#E87524]"><?php echo e(count($seoList)); ?> Pages</span>
                </div>

                <div class="space-y-4">
                    <?php $__currentLoopData = $seoList; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $s): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="p-4 rounded-2xl bg-[#FFFDF7] border border-[#F0E5CF] flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div class="space-y-1.5 flex-1 min-w-0">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#FFF9EB] text-[#E87524] border border-[#F4B000]/30 uppercase">
                                        /<?php echo e($s->page_route); ?>

                                    </span>
                                    <span class="text-xs font-extrabold text-[#402000] truncate"><?php echo e($s->meta_title); ?></span>
                                </div>
                                <p class="text-xs text-[#806F5C] line-clamp-2"><?php echo e($s->meta_description); ?></p>
                                <?php if($s->meta_keywords): ?>
                                    <p class="text-[10px] text-[#806F5C]/70 truncate"><span class="font-bold">Keywords:</span> <?php echo e($s->meta_keywords); ?></p>
                                <?php endif; ?>
                            </div>

                            <div class="flex items-center gap-2 flex-shrink-0">
                                <button type="button" onclick='populateSeoForm(<?php echo json_encode($s, 15, 512) ?>)' class="bg-[#402000] hover:bg-[#2A1706] text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all">
                                    Edit
                                </button>
                                <form action="/admin/seo/<?php echo e($s->id); ?>" method="POST" onsubmit="return confirm('Delete this SEO record?')">
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
function populateSeoForm(data) {
    document.getElementById('seo_id').value = data.id || '';
    document.getElementById('seo_page_route').value = data.page_route || '';
    document.getElementById('seo_meta_title').value = data.meta_title || '';
    document.getElementById('seo_meta_description').value = data.meta_description || '';
    document.getElementById('seo_meta_keywords').value = data.meta_keywords || '';
    document.getElementById('seo_og_image').value = data.og_image || '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetSeoForm() {
    document.getElementById('seo_id').value = '';
    document.getElementById('seo_page_route').value = '';
    document.getElementById('seo_meta_title').value = '';
    document.getElementById('seo_meta_description').value = '';
    document.getElementById('seo_meta_keywords').value = '';
    document.getElementById('seo_og_image').value = '';
}
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/deveshkumar/Downloads/Developement/tiffin-service-by-aromabites/backend/resources/views/admin/seo.blade.php ENDPATH**/ ?>