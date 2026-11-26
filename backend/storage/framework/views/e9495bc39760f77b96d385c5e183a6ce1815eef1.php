<?php $__env->startSection('title', 'Leads Management'); ?>

<?php $__env->startSection('content'); ?>
<div class="space-y-6">

    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
            <h2 class="text-2xl font-extrabold text-[#402000]">Leads &amp; Subscribers</h2>
            <p class="text-xs text-[#806F5C]">Manage incoming tiffin plan requests, trial schedules &amp; conversions</p>
        </div>

        <!-- Filter Statuses -->
        <div class="flex items-center gap-2">
            <a href="/admin/leads" class="px-3 py-1.5 rounded-full text-xs font-bold <?php echo e(!request('status') ? 'bg-[#E87524] text-white' : 'bg-white text-[#402000] border border-[#F0E5CF]'); ?>">All</a>
            <a href="/admin/leads?status=new" class="px-3 py-1.5 rounded-full text-xs font-bold <?php echo e(request('status') == 'new' ? 'bg-[#E87524] text-white' : 'bg-white text-[#402000] border border-[#F0E5CF]'); ?>">New</a>
            <a href="/admin/leads?status=trial_scheduled" class="px-3 py-1.5 rounded-full text-xs font-bold <?php echo e(request('status') == 'trial_scheduled' ? 'bg-[#E87524] text-white' : 'bg-white text-[#402000] border border-[#F0E5CF]'); ?>">Trial</a>
            <a href="/admin/leads?status=converted" class="px-3 py-1.5 rounded-full text-xs font-bold <?php echo e(request('status') == 'converted' ? 'bg-[#E87524] text-white' : 'bg-white text-[#402000] border border-[#F0E5CF]'); ?>">Converted</a>
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
                    <?php $__empty_1 = true; $__currentLoopData = $leads; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $lead): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr class="hover:bg-[#FFFDF7]">
                            <td class="py-4 text-[#806F5C] font-mono">#<?php echo e($lead->id); ?></td>
                            <td class="py-4 font-bold text-[#402000]"><?php echo e($lead->name); ?></td>
                            <td class="py-4 text-[#806F5C]">
                                <a href="tel:<?php echo e($lead->contact_no); ?>" class="font-bold text-[#402000] hover:text-[#E87524] block"><?php echo e($lead->contact_no); ?></a>
                                <span class="text-[11px] text-[#806F5C]"><?php echo e($lead->email ?: 'N/A'); ?></span>
                            </td>
                            <td class="py-4 text-[#806F5C] max-w-xs">
                                <p class="truncate"><?php echo e($lead->street_address); ?></p>
                                <span class="text-[11px] font-semibold text-[#402000]"><?php echo e($lead->city); ?>, <?php echo e($lead->state); ?></span>
                            </td>
                            <td class="py-4">
                                <span class="bg-[#FFF9EB] text-[#E87524] font-semibold px-2.5 py-1 rounded-full text-[11px] border border-[#F4B000]/30 block w-fit">
                                    <?php echo e($lead->package_selection); ?>

                                </span>
                                <?php if($lead->tasting_slot): ?>
                                    <span class="text-[10px] text-[#806F5C] mt-0.5 block">Slot: <?php echo e($lead->tasting_slot); ?></span>
                                <?php endif; ?>
                            </td>
                            <td class="py-4 text-[#806F5C] max-w-xs">
                                <p class="text-[11px] italic"><?php echo e($lead->description_allergies ?: 'None specified'); ?></p>
                            </td>
                            <td class="py-4">
                                <form action="/admin/leads/status" method="POST" class="flex items-center gap-1.5">
                                    <?php echo csrf_field(); ?>
                                    <input type="hidden" name="lead_id" value="<?php echo e($lead->id); ?>">
                                    <select name="status" onchange="this.form.submit()" class="bg-[#FFFDF7] border border-[#F0E5CF] rounded-lg px-2 py-1 text-[11px] font-bold text-[#402000] focus:outline-none focus:border-[#E87524]">
                                        <option value="new" <?php echo e($lead->status == 'new' ? 'selected' : ''); ?>>New</option>
                                        <option value="contacted" <?php echo e($lead->status == 'contacted' ? 'selected' : ''); ?>>Contacted</option>
                                        <option value="trial_scheduled" <?php echo e($lead->status == 'trial_scheduled' ? 'selected' : ''); ?>>Trial Scheduled</option>
                                        <option value="converted" <?php echo e($lead->status == 'converted' ? 'selected' : ''); ?>>Converted</option>
                                        <option value="cancelled" <?php echo e($lead->status == 'cancelled' ? 'selected' : ''); ?>>Cancelled</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="7" class="py-8 text-center text-[#806F5C]">No leads found matching your criteria.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/deveshkumar/Downloads/Developement/tiffin-service-by-aromabites/backend/resources/views/admin/leads.blade.php ENDPATH**/ ?>