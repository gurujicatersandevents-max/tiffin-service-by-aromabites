@extends('layouts.admin')

@section('title', 'Media Library')

@section('content')
<div class="space-y-6">

    <div>
        <h2 class="text-2xl font-extrabold text-[#402000]">Media Assets &amp; File Library</h2>
        <p class="text-xs text-[#806F5C]">Upload and organize meal images, logos, banners and promotional photos</p>
    </div>

    <!-- Upload Box -->
    <div class="bg-white rounded-3xl border border-[#F0E5CF] p-6 shadow-xs max-w-xl">
        <form action="/admin/media/upload" method="POST" enctype="multipart/form-data" class="flex flex-col sm:flex-row items-center gap-4">
            @csrf
            <input type="file" name="file" required class="text-xs text-[#806F5C] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#FFF9EB] file:text-[#E87524] hover:file:bg-[#FBE4AC]">
            <button type="submit" class="bg-[#E87524] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md hover:bg-[#d66518] transition-all">
                Upload File
            </button>
        </form>
    </div>

    <!-- Media Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        @forelse($media as $m)
            <div class="bg-white rounded-2xl border border-[#F0E5CF] overflow-hidden p-2 text-center shadow-xs">
                <div class="aspect-square bg-[#FFF9EB] rounded-xl overflow-hidden mb-2 flex items-center justify-center">
                    <img src="{{ $m->path }}" alt="{{ $m->original_name }}" class="w-full h-full object-cover">
                </div>
                <p class="text-[11px] font-semibold text-[#402000] truncate">{{ $m->original_name }}</p>
            </div>
        @empty
            <div class="col-span-full py-12 text-center text-xs text-[#806F5C]">
                No files uploaded yet. Upload your first meal photo or banner above!
            </div>
        @endforelse
    </div>

</div>
@endsection
