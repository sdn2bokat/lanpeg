"use client";

export default function LoadingComingMini() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-16 h-16">
        {/* Cincin biru */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        {/* Cincin kuning */}
        <div className="absolute inset-0 rounded-full border-4 border-t-yellow-400 border-transparent animate-[spin_1.2s_linear_infinite_reverse]"></div>
      </div>
      <p className="mt-3 text-blue-700 font-medium text-sm animate-pulse text-center">
        Sedang dalam proses...
      </p>
    </div>
  );
}
