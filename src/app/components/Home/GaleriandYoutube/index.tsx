"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import GaleriAudio from "@/app/components/GaleriAudio";

const GaleriandYoutube = () => {
  const slides = [
    {
      image: "/images/galeri/mpls.jpg",
      caption: "Dokumentasi Kegiatan MPLS Tahun 2025 di SD Negeri 2 Bokat/ SD Pembina Kab. Buol",
      source: "Selasa, 15 Juli 2025 | Post by: Ririanti Ahmad",
    },
    {
      image: "/images/galeri/pramuka.jpg",
      caption: "Foto Kepala Sekolah SD Negeri 2 Bokat/ SD Pembina Kab. Buol Usai Mengikuti Upacara HUT Pramuka Tahun 2025",
      source: "Senin, 11 Agustus 2025 | Post by: Ranly Herly Mantiri, S.Pd",
    },
    {
      image: "/images/galeri/gerakjalan.jpg",
      caption: "Tim Putri SDN 2 Bokat berhasil meraih Juara Gerak Jalan Tingkat Kabupaten dalam rangka HUT ke-80 RI.",
      source: "Jum'at, 15 Agustus 2025 | Post by: Ranly Herly Mantiri, S.Pd",
    },
    {
      image: "/images/galeri/hadiah.jpg",
      caption: "Kepala SD Negeri 2 Bokat bersama Wakil Bupati Buol usai penerimaan hadiah Lomba Gerak Jalan Putri.",
      source: "Minggu, 17 Agustus 2025 | Post by: Sumiyati, S.Sos",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, [slides.length]);
 
  return (
    <section className='pt-12 scroll-mt-10' id='galeri'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* === SLIDER GALERI === */}
          <div className="lg:col-span-1 relative w-full overflow-hidden">
            <div className="flex items-center">
            <h2 className="mr-2 text-xl sm:text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Icon icon="mdi:camera" className="text-blue-600 text-3xl" />
              Galeri Foto
            </h2>
            <div className="flex-1 border-t-2 border-blue-600"></div>
            </div>
            <div className="relative mt-2 h-72 sm:h-96 transition-all duration-700 ease-in-out">
              <Image
                src={slides[current].image}
                alt={slides[current].caption}
                fill
                className="object-cover rounded-xl"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-xl flex items-end px-4 py-6">
                <span className="text-white text-sm sm:text-lg font-medium leading-[-1.25]">
                  {slides[current].caption}
                <p className="text-yellow-200 text-[9px] sm:text-[11px]">
                  {slides[current].source}
                </p>
                </span>
              </div>
            </div>

            {/* Tombol Navigasi Manual */}
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1
                  )
                }
                className="bg-white/10 text-black/10 hover:bg-white hover:text-black rounded-full p-2 shadow"
              >
                <Icon icon="mdi:chevron-left" className="text-2xl" />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                className="bg-white/10 text-black/10 hover:bg-white hover:text-black rounded-full p-2 shadow"
              >
                <Icon icon="mdi:chevron-right" className="text-2xl" />
              </button>
            </div>

            {/* Indikator slide */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === current ? "w-4 h-2 rounded-full bg-white" : "bg-white/40"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* === YOUTUBE CHANNEL === */}
          <div className="lg:col-span-1 relative w-full overflow-hidden">
            <div className="flex items-center">
            <h2 className="mr-2 text-xl sm:text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Icon icon="mdi:youtube" className="text-red-600 text-3xl" />
              Video YouTube
            </h2>
            <div className="flex-1 border-t-2 border-red-600"></div>
            </div>
            <div className="w-full mt-2 aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=UUgKG1VWZmZabSnBrjqdyZfQ"
                title="YouTube SDN 2 Bokat"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <Link
              href="https://www.youtube.com/@sdn2bokat"
              target="_blank"
              className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-white bg-red-600 hover:bg-red-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition"
            >
              <Icon icon="mdi:youtube-subscription" />
              Kunjungi Channel Kami
            </Link>
          </div>
        </div>
        <main className="pt-10">
          <GaleriAudio />
    </main>
      </div>
    </section>
  );
};

export default GaleriandYoutube;
