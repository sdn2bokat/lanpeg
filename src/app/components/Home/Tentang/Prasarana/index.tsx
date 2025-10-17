"use client";

import LoadingPrasarana from "@/app/components/Loading";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Prasarana = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <section className='scroll-mt-[130px]' id='prasarana'>
      <div className='container'>
        <h1 className="text-midnight_text text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4">
        Data Prasarana Sekolah
            </h1>
        <p className="text-black/70 text-sm text-justify leading-relaxed py-2">
          <strong>Tanggal sunting:</strong>{" "}
          <Icon icon="svg-spinners:3-dots-scale" className="inline w-5 h-5 text-gray-500" />
          <br />
          <strong>Penyunting:</strong>{" "}
          <Icon icon="svg-spinners:3-dots-scale" className="inline w-5 h-5 text-gray-500" />
        </p>
      {/* === Tabel Error === */}
      <div className="bg-green-100 py-3 px-5 shadow-md">
      <div className="flex flex-col items-center justify-center text-center text-gray-500">
      <Icon icon="eos-icons:hourglass" className="w-10 h-10 sm:w-15 sm:h-15" />

      {/* Baris 2: Teks utama */}
      <p className="text-sm sm:text-xl text-gray-800 mb-3">
        Tunggu, sedang memproses tabel Prasaran...
      </p>
      </div>
      <div className="bg-white p-3 border rounded-md">
      <main>
      <LoadingPrasarana />
    </main>
    </div>
    </div>
      <p className="text-black/70 text-justify text-xs sm:text-sm pt-3">
        <strong>Sumber:</strong> {"Memuat "}
        <Icon icon="svg-spinners:3-dots-scale" className="inline w-4 h-4 text-gray-500 translate-y-[3px]" />
        </p>
      {/* Footer */}
      <footer className="relative w-full mt-8 opacity-70">
      <div className="border-t border-green-500 w-full"></div>
      <div className="flex justify-between items-center text-[8px] sm:text-xs text-green-700 mt-0">
        <p>Profil SD Negeri 2 Bokat / SD Pembina Kab. Buol</p>
        <div className="relative">
          <span className="border-l border-b border-green-500 bg-green-100 rounded-bl-full pl-4 pr-2 py-0.5 inline-block">
            Sheet 4
          </span>
        </div>
      </div>
    </footer>        
    </div>
    </section>
  )
}

export default Prasarana
