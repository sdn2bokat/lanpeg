"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Saat rute berubah, tampilkan loading
    setIsLoading(true);

    // Tunggu render halaman selesai sebelum menghilangkan loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300); // durasi kecil agar transisi tidak terlalu cepat

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-14 h-14">
        {/* Lingkaran biru */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        {/* Lapisan kuning */}
        <div className="absolute inset-0 rounded-full border-4 border-t-yellow-400 border-transparent animate-[spin_1.2s_linear_infinite_reverse]"></div>
      </div>
      <p className="mt-5 text-blue-700 font-semibold text-sm tracking-wide animate-pulse">
        Memuat halaman...
      </p>
    </div>
  );
}
