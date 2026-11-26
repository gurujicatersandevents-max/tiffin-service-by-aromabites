<?php $__env->startSection('title', 'Media Library'); ?>

<?php $__env->startSection('content'); ?>
<div class="space-y-6">

    <div>
        <h2 class="text-2xl font-extrabold text-[#402000]">Media Assets &amp; File Library</h2>
        <p class="text-xs text-[#806F5C]">Upload and organize meal images, logos, banners and promotional photos</p>
    </div>

    <!-- Upload Box -->
    <div class="bg-white rounded-3xl border border-[#F0E5CF] p-6 shadow-xs max-w-xl">
        <form action="/admin/media/upload" method="POST" enctype="multipart/form-data" class="flex flex-col sm:flex-row items-center gap-4">
            <?php echo csrf_field(); ?>
            <input type="file" name="file" required class="text-xs text-[#806F5C] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#FFF9EB] file:text-[#E87524] hover:file:bg-[#FBE4AC]">
            <button type="submit" class="bg-[#E87524] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md hover:bg-[#d66518] transition-all">
                Upload File
            </button>
        </form>
    </div>

    <!-- Media Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        <?php $__empty_1 = true; $__currentLoopData = $media; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $m): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            <div class="bg-white rounded-2xl border border-[#F0E5CF] overflow-hidden p-2 text-center shadow-xs">
                <div class="aspect-square bg-[#FFF9EB] rounded-xl overflow-hidden mb-2 flex items-center justify-center">
                    <img src="<?php echo e($m->path); ?>" alt="<?php echo e($m->original_name); ?>" class="w-full h-full object-cover">
                </div>
                <p class="text-[11px] font-semibold text-[#402000] truncate"><?php echo e($m->original_name); ?></p>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
            <div class="col-span-full py-12 text-center text-xs text-[#806F5C]">
                No files uploaded yet. Upload your first meal photo or banner above!
            </div>
        <?php endif; ?>
    </div>

</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/deveshkumar/Downloads/Developement/tiffin-service-by-aromabites/backend/resources/views/admin/media.blade.php ENDPATH**/ ?>