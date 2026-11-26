<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Aroma Bites CMS</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style> body { font-family: 'Poppins', sans-serif; } </style>
</head>
<body class="bg-[#FFF9EB] flex items-center justify-center min-h-screen p-4">

    <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#F0E5CF] p-8 sm:p-10">
        <!-- Logo / Header -->
        <div class="text-center mb-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#E87524] to-[#F4B000] text-white font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                AB
            </div>
            <h1 class="text-2xl font-extrabold text-[#402000]">Aroma Bites CMS</h1>
            <p class="text-xs text-[#806F5C] mt-1">Admin Portal &amp; Content Management</p>
        </div>

        <?php if($errors->any()): ?>
            <div class="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                <?php echo e($errors->first()); ?>

            </div>
        <?php endif; ?>

        <form action="/admin/login" method="POST" class="space-y-5">
            <?php echo csrf_field(); ?>
            <div>
                <label class="block text-xs font-bold text-[#402000] uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" name="email" value="<?php echo e(old('email', 'admin@aromabites.in')); ?>" required class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-4 py-3 text-sm text-[#402000] focus:outline-none focus:border-[#E87524]" placeholder="admin@aromabites.in">
            </div>

            <div>
                <label class="block text-xs font-bold text-[#402000] uppercase tracking-wider mb-2">Password</label>
                <input type="password" name="password" required class="w-full bg-[#FFFDF7] border border-[#F0E5CF] rounded-xl px-4 py-3 text-sm text-[#402000] focus:outline-none focus:border-[#E87524]" placeholder="••••••••">
                <p class="text-[11px] text-[#806F5C] mt-1.5">Default password: <code class="bg-[#FFF9EB] px-1.5 py-0.5 rounded font-mono font-bold text-[#E87524]">Admin@AromaBites2024</code></p>
            </div>

            <button type="submit" class="w-full bg-[#E87524] hover:bg-[#d66518] text-white font-bold text-sm py-3.5 rounded-full shadow-lg shadow-[#E87524]/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer">
                Sign In to CMS →
            </button>
        </form>

        <div class="mt-8 pt-6 border-t border-[#F0E5CF] text-center">
            <a href="http://localhost:3000" class="text-xs font-semibold text-[#806F5C] hover:text-[#E87524] transition-colors">
                ← Back to Aroma Bites Website
            </a>
        </div>
    </div>

</body>
</html>
<?php /**PATH /Users/deveshkumar/Downloads/Developement/tiffin-service-by-aromabites/backend/resources/views/admin/login.blade.php ENDPATH**/ ?>