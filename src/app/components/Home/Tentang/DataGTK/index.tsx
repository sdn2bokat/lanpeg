"use client";

import { useState } from "react";
 
const DataGTK = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <section className='scroll-mt-[130px]' id='dgtk'>
      <div className='container'>
        <h1 className="text-midnight_text text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4">
        Daftar Pendidik dan Tenaga Kependidikan
            </h1>
        <p className="text-black/70 text-sm text-justify leading-relaxed py-2">
        <strong>Tanggal sunting:</strong> 2025-10-11 02:02:56<br />
        <strong>Penyunting:</strong> Umar A. Piantae, S.IP (Penata Layanan Operasional)
        </p>
      {/* === Tabel GTK === */}
      <div className="overflow-x-auto shadow">
      <table className="min-w-full text-sm border border-gray-200">
      <thead className="bg-green-100 text-green-800 text-center font-semibold">
        <tr>
          <th className="px-2 py-2 border">No.</th>
          <th className="px-2 py-2 border">Nama GTK</th>
          <th className="px-2 py-2 border">JK</th>
          <th className="px-2 py-2 border">Status Pegawai</th>
          <th className="px-2 py-2 border">Pangkat Gol. Ruang</th>
          <th className="px-2 py-2 border">Jabatan</th>
          <th className="px-2 py-2 border">Pendidikan Terakhir</th>
          <th className="px-2 py-2 border">TMT Kerja</th>
          <th className="px-2 py-2 border">Kontak</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">1.</td>
          <td className="px-2 py-1 border">Rahman A. Majid, S.Pd</td>
          <td className="px-2 py-1 border text-center">Lk</td>
          <td className="px-2 py-1 border">Pegawai Negeri Sipil</td>
          <td className="px-2 py-1 border">Pembina Tingkat 1. IV/b</td>
          <td className="px-2 py-1 border">Kepala Sekolah</td>
          <td className="px-2 py-1 border">S1 - Pendidikan Guru Sekolah Dasar</td>
          <td className="px-2 py-1 border text-center">2000-12-01</td>
          <td className="px-3 py-1 border text-center text-midnight_text font-semibold hover:cursor-pointer hover:underline hover:text-blue-500 focus:outline-none"><a href="/page/maintenance" target="_blank">WhatsApp</a></td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">2.</td>
          <td className="px-2 py-1 border">Umar A. Piantae, S.IP</td>
          <td className="px-2 py-1 border text-center">Lk</td>
          <td className="px-2 py-1 border">Pegawai Pemerintah Perjanjian Kerja</td>
          <td className="px-2 py-1 border">Ahli Pertama IX</td>
          <td className="px-2 py-1 border">Penata Layanan Operasional</td>
          <td className="px-2 py-1 border">S1 - Ilmu Pemerintahan</td>
          <td className="px-2 py-1 border text-center">2007-07-01</td>
          <td className="px-3 py-1 border text-center text-midnight_text font-semibold hover:cursor-pointer hover:underline hover:text-blue-500 focus:outline-none"><a href="/page/maintenance" target="_blank">WhatsApp</a></td>
        </tr>
      </tbody>
      </table>
      </div>
      <p className="text-black/70 text-justify text-xs sm:text-sm py-2">
        <strong>Keterangan:</strong> Daftar disusun berdasarkan abjab nama (A ke Z).
        </p>
      {/* Footer */}
      <footer className="relative w-full mt-8 opacity-70">
      <div className="border-t border-green-500 w-full"></div>
      <div className="flex justify-between items-center text-[8px] sm:text-xs text-green-700 mt-0">
        <p>Profil SD Negeri 2 Bokat / SD Pembina Kab. Buol</p>
        <div className="relative">
          <span className="border-l border-b border-green-500 bg-green-100 rounded-bl-full pl-4 pr-2 py-0.5 inline-block">
            Sheet 2
          </span>
        </div>
      </div>
    </footer>
    </div>
    </section>
  )
}

export default DataGTK
