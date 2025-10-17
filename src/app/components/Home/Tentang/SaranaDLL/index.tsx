"use client";

import LoadingPrasarana from "@/app/components/Loading";
import { useState } from "react";
import { Icon } from "@iconify/react";

const SaranaDLL = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <section className='scroll-mt-[130px]' id='saranadll'>
      <div className='container'>
      <div className="flex flex-col items-center justify-center text-center text-gray-500">
      <Icon icon="line-md:cloud-alt-download-filled-loop" className="w-10 h-10 sm:w-15 sm:h-15" />

      {/* Baris 2: Teks utama */}
      <p className="text-sm sm:text-xl text-gray-800 mb-3">
        Server sedang melakukan penarikan data dari Pusdatin
      </p>
      <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">
        Mohon maaf, untuk percepatan penarikan data dan penyusunan struktur database Profil Sekolah SD Negeri 2 Bokat. Maka Tabel Data Sarana Sekolah, Ekstrakurikuler, Akreditas Sekolah, Kepanitiaan Sekolah, dan Tabel Daftar Komite Sekolah untuk sementara kami tidak tampilkan.
      </p>        
    </div>
    </div>
    </section>
  )
}

export default SaranaDLL
