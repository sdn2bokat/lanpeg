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
  const [waveHeights, setWaveHeights] = useState([5, 8, 3, 6, 7]);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Timer 00:00 → 01:00
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

  // Blink icon
  useEffect(() => {
    if (!isOpen) return;
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, [isOpen]);

  // Gelombang audio animasi
  useEffect(() => {
    if (!isOpen) return;
    const waveInterval = setInterval(() => {
      setWaveHeights(waveHeights.map(() => 2 + Math.floor(Math.random() * 12)));
    }, 300);
    return () => clearInterval(waveInterval);
  }, [isOpen]);

  // Play audio otomatis
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
      <div className="bg-white rounded-3xl w-80 sm:w-96 px-6 py-12 flex flex-col items-center relative">
        {/* Icon Person */}
        <div className={`relative w-24 h-24 mb-4 ${blink ? "scale-105" : "scale-100"} transition-transform duration-300`}>
          <Icon icon="bi:person-circle" className="w-24 h-24 text-gray-700" />
        </div>

        {/* Nama & Nomor */}
        <p className="text-sm text-black/40 italic">Terhubung</p>
        <p className="text-lg font-semibold">Pusat Panggilan</p>
        <p className="text-sm text-gray-500 mb-4">4020-2114</p>

        {/* Timer */}
        <p className="text-lg font-mono mb-20">{formatTime(seconds)}</p>

        {/* Tombol Tutup Telepon */}
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
