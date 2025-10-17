"use client";
import { useState, useRef } from "react";
import { Play, Pause, SkipBack, Repeat, Shuffle, SkipForward } from "lucide-react";

export default function GaleriAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * duration;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <div className="text-center">
      {/* Judul Section */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex-1 border-t-2 border-yellow-400"></div>
        <h2 className="mx-4 text-xl sm:text-2xl font-semibold text-black">
          Galeri Audio
        </h2>
        <div className="flex-1 border-t-2 border-yellow-400"></div>
      </div>

      {/* Informasi Audio */}
      <p className="font-semibold text-sm sm:text-lg">
        Lagu: SDN 2 Bokat Tempat Ilmu Tumbuh (Official Music Audio).mp3
      </p>
      <p className="text-xs sm:text-sm text-gray-600 mb-4">Cipt: Umar A. Piantae, S.IP</p>

      {/* Audio Player */}
      <audio
        ref={audioRef}
        src="/audio/sdn2bokat.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>

      {/* Progress Bar */}
      <div className="flex w-full max-w-2xl mx-auto items-center justify-between text-xs sm:text-sm text-gray-700 mt-2">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          className="w-full mx-3 accent-blue-500 cursor-pointer"
        />
        <span>{formatTime(duration)}</span>
      </div>

      {/* Kontrol Tombol */}
      <div className="flex justify-center items-center gap-6 mt-4">
        <Repeat className="w-3 h-3 sm:w-5 sm:h-5 text-gray-700 cursor-pointer" />
        <SkipBack className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 cursor-pointer" />
        {isPlaying ? (
          <Pause
            className="w-6 h-6 sm:w-8 sm:h-8 text-black cursor-pointer"
            onClick={togglePlay}
          />
        ) : (
          <Play
            className="w-6 h-6 sm:w-8 sm:h-8 text-black cursor-pointer"
            onClick={togglePlay}
          />
        )}
        <SkipForward className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 cursor-pointer" />
        <Shuffle className="w-3 h-3 sm:w-5 sm:h-5 text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
}
