<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Dashboard') - Aroma Bites CMS</title>
    <!-- Tailwind CSS CDN for Blade Admin Panel -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Poppins', sans-serif; }
    </style>
</head>
<body class="bg-[#FFFDF7] text-[#402000] min-h-screen flex">

    <!-- Responsive Sidebar -->
    <aside class="w-64 bg-[#402000] text-white flex-shrink-0 flex flex-col justify-between hidden md:flex min-h-screen shadow-xl border-r border-[#2A1706]">
        <div>
            <!-- Brand Logo -->
            <div class="h-20 flex items-center px-6 border-b border-white/10 gap-3 bg-[#321900]">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E87524] to-[#F4B000] flex items-center justify-center font-bold text-lg text-white shadow-md">
                    AB
                </div>
                <div>
                    <h1 class="font-extrabold text-sm tracking-wide text-white">AROMA BITES</h1>
                    <span class="text-[10px] text-[#F4B000] uppercase tracking-wider font-semibold">Admin CMS</span>
                </div>
            </div>

            <!-- Navigation Links -->
            <nav class="p-4 space-y-1.5 text-xs font-semibold overflow-y-auto max-h-[calc(100vh-160px)]">
                <a href="/admin/dashboard" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/dashboard') || request()->is('admin') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    📊 Dashboard
                </a>
                <a href="/admin/leads" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/leads*') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    👥 Leads Management
                </a>
                <a href="/admin/website" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/website*') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    🌐 Website & Sections CMS
                </a>
                <a href="/admin/seo" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/seo*') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    🔍 SEO & Meta Tags
                </a>
                <a href="/admin/plans" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/plans*') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    🍱 Meal Plans
                </a>
                <a href="/admin/delivery-areas" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/delivery-areas*') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    📍 Delivery Hubs (15 Areas)
                </a>
                <a href="/admin/testimonials" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/testimonials*') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    ⭐ Reviews & Testimonials
                </a>
                <a href="/admin/faqs" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/faqs*') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    ❓ FAQs Manager
                </a>
                <a href="/admin/company-profile" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/company-profile*') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    🏢 Company Profile
                </a>
                <a href="/admin/media" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-white/90 hover:text-white transition-all {{ request()->is('admin/media*') ? 'bg-[#E87524] text-white shadow-md' : '' }}">
                    🖼️ Media Library
                </a>
            </nav>
        </div>

        <!-- User Info & Logout -->
        <div class="p-4 border-t border-white/10 bg-[#321900]">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-xs font-bold text-white">{{ session('admin_user', 'AromaBites Admin') }}</p>
                    <p class="text-[10px] text-[#F0E5CF]/70">{{ session('admin_email', 'admin@aromabites.in') }}</p>
                </div>
                <form action="/admin/logout" method="POST">
                    @csrf
                    <button type="submit" class="p-2 bg-white/10 hover:bg-red-600 rounded-lg text-white transition-colors text-xs" title="Logout">
                        🚪
                    </button>
                </form>
            </div>
        </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0">
        <!-- Top Navigation -->
        <header class="h-20 bg-white border-b border-[#F0E5CF] px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
            <div class="flex items-center gap-3">
                <span class="text-xs font-semibold text-[#806F5C]">Aroma Bites Administration Panel</span>
            </div>

            <div class="flex items-center gap-4">
                <a href="http://localhost:3000" target="_blank" class="inline-flex items-center gap-1.5 bg-[#FFF9EB] hover:bg-[#FBE4AC] text-[#E87524] border border-[#F4B000]/40 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all">
                    <span>View Public Website</span> ↗
                </a>
            </div>
        </header>

        <!-- Flash Messages -->
        @if(session('success'))
            <div class="mx-6 mt-4 p-4 rounded-2xl bg-[#F0F7F2] border border-[#38864B]/30 text-[#38864B] text-xs font-semibold flex items-center justify-between">
                <span>✓ {{ session('success') }}</span>
            </div>
        @endif

        @if($errors->any())
            <div class="mx-6 mt-4 p-4 rounded-2xl bg-[#FFF2EE] border border-red-200 text-red-600 text-xs font-semibold">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>• {{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <!-- Page Content -->
        <main class="flex-1 p-6 lg:p-8">
            @yield('content')
        </main>
    </div>

</body>
</html>
