"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import LoadingComingMini from "../LoadingComingPopup";

interface ArsipIjazahModalProps {
  onClose: () => void;
}

export default function ArsipIjazahModal({ onClose }: ArsipIjazahModalProps) {
   const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Autoplay bisa diblok oleh browser, catch error
      });
    }
    return () => {
      document.body.style.overflow = "auto";
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg overflow-hidden animate-fadeIn relative">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-header text-white">
          <div className="flex items-center">
            <Image
              src="/images/layanan/profil.png"
              alt="Layanan dan Informasi Sekolah"
              width={26}
              height={26}
              className="mr-3"
            />
            <h4 className="text-xl font-semibold text-white">
              Layanan Arsip e-Ijazah
            </h4>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-blue-700 p-1 rounded transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex justify-center items-center">
          <LoadingComingMini />
          <audio ref={audioRef} src="/audio/audiotunggu.mp3" loop />
        </div>

        {/* Footer */}
        <div className="flex justify-end px-6 py-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
