<?php $__env->startSection('title', 'Website & Homepage Sections CMS'); ?>

<?php $__env->startSection('content'); ?>
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
                    <?php $__currentLoopData = $sections; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $sec): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($sec->id); ?>" <?php echo e($selectedSectionId == $sec->id ? 'selected' : ''); ?>>
                            #<?php echo e($sec->display_order); ?> - <?php echo e($sec->section_name); ?> (<?php echo e($sec->section_key); ?>)
                        </option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
            </form>
        </div>
    </div>

    <!-- Active Section Settings & Content Fields Card -->
    <?php if($activeSection): ?>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <!-- Left: Section Settings & Add Field Form -->
            <div class="space-y-6">
                <!-- Section General Settings -->
                <div class="bg-white p-6 rounded-3xl border border-[#F0E5CF] shadow-xs">
                    <h3 class="text-base font-extrabold text-[#402000] mb-4 flex items-center justify-between">
                        <span>⚙️ Section Settings</span>
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded-full <?php echo e($activeSection->is_active ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'); ?>">
                            <?php echo e($activeSection->is_active ? 'ACTIVE' : 'INACTIVE'); ?>

                        </span>
                    </h3>

                    <form action="/admin/website/sections/<?php echo e($activeSection->id); ?>" method="POST" class="space-y-4">
                        <?php echo csrf_field(); ?>
                        <div>
                            <label class="block text-xs font-bold text-[#806F5C] mb-1">Section Display Name</label>
                            <input type="text" name="section_name" value="<?php echo e($activeSection->section_name); ?>" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-semibold">
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-[#806F5C] mb-1">Display Order</label>
                            <input type="number" name="display_order" value="<?php echo e($activeSection->display_order); ?>" class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000]">
                        </div>

                        <div class="space-y-2 pt-2 border-t border-[#F0E5CF]/60">
                            <label class="flex items-center gap-2 text-xs font-semibold text-[#402000] cursor-pointer">
                                <input type="checkbox" name="is_active" value="1" <?php echo e($activeSection->is_active ? 'checked' : ''); ?> class="rounded text-[#E87524]">
                                Visible on Live Website
                            </label>
                            <label class="flex items-center gap-2 text-xs font-semibold text-[#402000] cursor-pointer">
                                <input type="checkbox" name="is_published" value="1" <?php echo e($activeSection->is_published ? 'checked' : ''); ?> class="rounded text-[#E87524]">
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
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="section_id" value="<?php echo e($activeSection->id); ?>">
                        
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
                            <h3 class="text-lg font-extrabold text-[#402000]"><?php echo e($activeSection->section_name); ?> Content</h3>
                            <p class="text-xs text-[#806F5C]">Edit, update or delete individual content items. Changes reflect instantly on the website via API.</p>
                        </div>
                        <span class="text-xs font-mono font-bold bg-[#FFF9EB] text-[#E87524] px-3 py-1 rounded-full border border-[#F4B000]/30">
                            <?php echo e(count($contents)); ?> Editable Fields
                        </span>
                    </div>

                    <?php if(count($contents) > 0): ?>
                        <form action="/admin/website/content/<?php echo e($activeSection->id); ?>" method="POST" class="space-y-5">
                            <?php echo csrf_field(); ?>
                            
                            <?php $__currentLoopData = $contents; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <div class="p-4 rounded-2xl bg-[#FFFDF7] border border-[#F0E5CF] space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <span class="text-xs font-mono font-bold text-[#E87524] uppercase tracking-wider"><?php echo e($item->field_key); ?></span>
                                            <span class="text-[10px] text-[#806F5C]">#ID: <?php echo e($item->id); ?></span>
                                        </div>

                                        <!-- Delete Field Button -->
                                        <button type="submit" formaction="/admin/website/content-field/delete" name="field_id" value="<?php echo e($item->id); ?>" onclick="return confirm('Are you sure you want to delete field <?php echo e($item->field_key); ?>?')" class="text-red-500 hover:text-red-700 text-xs font-bold px-2 py-0.5 rounded hover:bg-red-50 transition-colors">
                                            ✕ Remove
                                        </button>
                                    </div>

                                    <?php if(strlen($item->field_value) > 80 || in_array($item->field_key, ['description', 'description_p1', 'description_p2', 'supporting_text', 'notice_text'])): ?>
                                        <textarea name="fields[<?php echo e($item->id); ?>]" rows="3" class="w-full bg-white border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] leading-relaxed focus:ring-2 focus:ring-[#E87524]"><?php echo e($item->field_value); ?></textarea>
                                    <?php else: ?>
                                        <input type="text" name="fields[<?php echo e($item->id); ?>]" value="<?php echo e($item->field_value); ?>" class="w-full bg-white border border-[#F0E5CF] rounded-xl px-3 py-2 text-xs text-[#402000] font-medium focus:ring-2 focus:ring-[#E87524]">
                                    <?php endif; ?>
                                </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                            <div class="pt-4 flex justify-end">
                                <button type="submit" class="bg-[#E87524] hover:bg-[#cf6217] text-white text-xs font-extrabold px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2">
                                    <span>💾 Save All <?php echo e($activeSection->section_name); ?> Content</span>
                                </button>
                            </div>
                        </form>
                    <?php else: ?>
                        <div class="text-center py-12 text-[#806F5C]">
                            <p class="text-sm font-semibold mb-2">No content fields created yet for this section.</p>
                            <p class="text-xs">Use the "Add New Content Field" form on the left to add headings, descriptions, buttons, etc.</p>
                        </div>
                    <?php endif; ?>
                </div>
            </div>

        </div>
    <?php endif; ?>

</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/deveshkumar/Downloads/Developement/tiffin-service-by-aromabites/backend/resources/views/admin/website.blade.php ENDPATH**/ ?>