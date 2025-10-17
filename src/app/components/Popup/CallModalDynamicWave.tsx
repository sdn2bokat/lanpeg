"use client";

import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallModalDynamicWave({ isOpen, onClose }: ModalProps) {
  const [seconds, setSeconds] = useState(0);
  const [blink, setBlink] = useState(false);
  const [status, setStatus] = useState("Memanggil...");
  const [waveHeights, setWaveHeights] = useState([5, 8, 3, 6, 7]);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Ubah status ke "Terhubung" setelah 2 detik
  useEffect(() => {
    if (!isOpen) return;
    setStatus("Memanggil...");
    const timer = setTimeout(() => {
      setStatus("Terhubung");
    }, 1800);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Timer panggilan 00:00 → 01:00
  useEffect(() => {
    if (!isOpen) return;
    setSeconds(0);
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 60) {
          clearInterval(interval);
          onClose();
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, onClose]);

  // Animasi blink
  useEffect(() => {
    if (!isOpen) return;
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, [isOpen]);

  // Gelombang animasi audio (dummy)
  useEffect(() => {
    if (!isOpen) return;
    const waveInterval = setInterval(() => {
      setWaveHeights((prev) => prev.map(() => 2 + Math.floor(Math.random() * 12)));
    }, 300);
    return () => clearInterval(waveInterval);
  }, [isOpen]);

  // Putar audio otomatis
  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      const handleEnded = () => onClose();
      audioRef.current.addEventListener("ended", handleEnded);
      return () => {
        audioRef.current?.removeEventListener("ended", handleEnded);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="bg-white rounded-3xl w-80 sm:w-96 px-6 py-10 flex flex-col items-center relative shadow-xl">
        {/* Status dan Timer */}
        <p className="text-sm text-black/70 italic">{status}</p>
        <p className="text-lg font-mono mb-3">{formatTime(seconds)}</p>

        {/* Nama & Nomor */}
        <p className="text-lg font-semibold">Pusat Panggilan</p>
        <p className="text-sm text-gray-500 mb-8">+62 4020-2114</p>

        {/* Icon Person */}
        <div
          className={`relative w-24 h-24 mb-20 ${
            blink ? "scale-105" : "scale-100"
          } transition-transform duration-300`}
        >
          <Icon icon="bi:person-circle" className="w-24 h-24 text-gray-700" />
        </div>

        {/* Ikon Kontrol (Mic, Speaker, Record) */}
        <div className="flex items-center justify-center gap-12 mb-6">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-black text-white hover:bg-gray-200 hover:text-black rounded-full shadow flex items-center justify-center cursor-pointer transition-colors">
            <Icon icon="stash:mic-solid" className="w-6 h-6" />
            </div>
            <span className="text-xs mt-1 text-center">Bisukan</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-10 h-10 bg-gray-200 text-black hover:bg-black hover:text-white rounded-full shadow flex items-center justify-center cursor-pointer transition-colors">
            <Icon icon="fluent:speaker-2-20-filled" className="w-6 h-6" />
          </div>
          <span className="text-xs mt-1 text-blue-400 text-center">Speaker</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-10 h-10 bg-black text-white hover:bg-gray-200 hover:text-black rounded-full shadow flex items-center justify-center cursor-pointer transition-colors">
            <Icon icon="mdi:record-rec" className="w-6 h-6" />
          </div>
          <span className="text-xs mt-1 text-center">Rekam</span>
          </div>
        </div>

        {/* Tombol Tutup Panggilan */}
        <button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 cursor-pointer transition-colors w-16 h-16 rounded-full flex items-center justify-center"
        >
          <Icon icon="mynaui:telephone-solid" className="w-7 h-7 text-white" />
        </button>

        {/* Audio */}
        <audio ref={audioRef} src="/audio/40202114.mp3" />
      </div>
    </div>
  );
}
