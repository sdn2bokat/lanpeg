"use client";

import { useState } from "react";
 
const TentangSekolah = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <section className='scroll-mt-[130px]' id='tentang'>
      <div className='container'>
        <h3 className='text-midnight_text text-2xl md:text-3xl font-semibold mb-6 text-justify mx-auto'>
          Tentang Kami:
          <div className="border-t-2 w-[100px] border-yellow-400 mt-1"></div>
        </h3>
            <div className='col-span-1 border-l-2 rounded-b-xl shadow-sm px-6 pb-4 mb-6'>
            <div className={`text-black/70 text-justify mx-auto leading-relaxed transition-all duration-500 ease-in-out ${
              expanded ? "" : "line-clamp-8 sm:line-clamp-4"
            }`}
          >
            <p className="mb-2">
            <strong>SD Negeri 2 Bokat/ SD Pembina Kab. Buol</strong>, merupakan salah satu satuan pendidikan dasar yang berkomitmen tinggi dalam mencetak generasi berkarakter, cerdas, dan berdaya saing. Di bawah kepemimpinan <strong>Rahman A. Majid, S.Pd</strong>, sekolah ini telah berkembang menjadi <strong>Sekolah Penggerak</strong> yang menjadi teladan dalam inovasi pembelajaran dan penguatan profil pelajar Pancasila. Seluruh guru di SD Negeri 2 Bokat telah memiliki <strong>sertifikat guru profesional</strong>, serta didukung oleh sumber daya manusia berkualifikasi <strong>sarjana</strong> termasuk tenaga kependidikan. Dengan mutu pendidikan yang terjaga dan sistem pembelajaran yang terarah, sekolah ini secara konsisten berhasil mempertahankan <strong>kelulusan 100% setiap tahunnya</strong>.
          </p>
          <p>
            Kini <strong>SD Negeri 2 Bokat/ SD Pembina Kab. Buol</strong> telah memiliki website resmi yang bernama <strong>SD Negeri 2 Bokat</strong> dengan alamat <strong>https://sdn2bokat.sch.id</strong> yang berdiri sejak <strong>1 Oktober 2025</strong> sebagai wujud transformasi digital dalam pelayanan informasi dan administrasi pendidikan. Situs ini menjadi <strong>portal layanan digital sekolah</strong>, yang terintegrasi dengan tiga subdomain utama, yaitu: <strong>https://info.sdn2bokat.sch.id</strong> sebagai pusat berita, informasi, dan edukasi; <strong>https://ujian.sdn2bokat.sch.id</strong> untuk aplikasi pelaksanaan <strong>ujian berbasis komputer (CBT Online)</strong> yang mencakup fitur Ujian Asesmen Sumatif, Penilaian Akhir Tahun, Penilaian Akhir Semester, dan Penilaian Harian; serta <strong>https://media.sdn2bokat.sch.id</strong> sebagai platform aplikasi web pendukung program sekolah. Seluruh sistem ini dirancang untuk mendukung transparansi, efisiensi, dan kemajuan pendidikan di lingkungan SD Negeri 2 Bokat di era digitalisasi.
            </p>
            </div>
            <div className="mt-[-1] sm:mt-1">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-midnight_text font-semibold hover:cursor-pointer hover:underline hover:text-blue-500 focus:outline-none"
            >
              {expanded ? "Sembunyikan sebagian" : "Baca selengkapnya..."}
            </button>
          </div>
            </div>
      </div>
    </section>
  )
}

export default TentangSekolah
