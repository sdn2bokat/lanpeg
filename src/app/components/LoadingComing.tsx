"use client";

export default function LoadingComing() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="relative w-16 h-16">
        {/* Cincin biru */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        {/* Cincin kuning */}
        <div className="absolute inset-0 rounded-full border-4 border-t-yellow-400 border-transparent animate-[spin_1.2s_linear_infinite_reverse]"></div>
      </div>

      <p className="mt-6 text-blue-700 font-semibold text-base tracking-wide animate-pulse">
        Sedang dalam proses...
      </p>
    </div>
  );
}
