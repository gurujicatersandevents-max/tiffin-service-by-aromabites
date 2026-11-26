<?php $__env->startSection('title', 'FAQs CMS'); ?>

<?php $__env->startSection('content'); ?>
<div class="space-y-6">

    <div class="flex items-center justify-between">
        <div>
            <h2 class="text-2xl font-extrabold text-[#402000]">FAQs Management</h2>
            <p class="text-xs text-[#806F5C]">Add, edit, or remove frequently asked questions displayed on the website</p>
        </div>
    </div>

    <!-- FAQs Accordion List -->
    <div class="space-y-4">
        <?php $__currentLoopData = $faqs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $faq): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="bg-white rounded-2xl border border-[#F0E5CF] p-5 shadow-xs">
                <form action="/admin/faqs" method="POST" class="space-y-3">
                    <?php echo csrf_field(); ?>
                    <input type="hidden" name="id" value="<?php echo e($faq->id); ?>">

                    <div class="flex items-center justify-between gap-4">
                        <span class="text-xs font-bold text-[#E87524] bg-[#FFF2EE] px-2.5 py-0.5 rounded-full"><?php echo e($faq->category); ?></span>
                        <div class="flex items-center gap-2">
                            <button type="submit" class="bg-[#402000] text-white text-[11px] font-bold px-3 py-1 rounded-full">Save</button>
                        </div>
                    </div>

                    <div>
                        <input type="text" name="question" value="<?php echo e($faq->question); ?>" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs font-bold text-[#402000]">
                    </div>

                    <div>
                        <textarea name="answer" rows="2" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl p-3 text-xs text-[#806F5C] leading-relaxed"><?php echo e($faq->answer); ?></textarea>
                    </div>
                </form>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>

</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/deveshkumar/Downloads/Developement/tiffin-service-by-aromabites/backend/resources/views/admin/faqs.blade.php ENDPATH**/ ?>