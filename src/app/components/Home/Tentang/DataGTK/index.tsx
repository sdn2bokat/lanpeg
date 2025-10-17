"use client";

import { useState } from "react";
 
const DataGTK = () => {
     const data = [
  {
    no: 1,
    nama: "Andisyam L. Ontoh, S.Pd",
    jk: "Lk",
    statusPegawai: "PNS",
    pangkat: "Penata Muda Tingkat 1 / III.c",
    jabatan: "Guru Kelas",
    pendidikan: "S1 - Guru Kelas SD/MI",
    tmtKerja: "2006-04-01",
    kontak: "/page/maintenance",
  },
  {
    no: 2,
    nama: "Devilarasati J. Ndobe, S.Pd",
    jk: "Pr",
    statusPegawai: "Honor Sekolah",
    pangkat: "-",
    jabatan: "Guru Bahasa Inggris",
    pendidikan: "S1 - Bahasa Inggris",
    tmtKerja: "2024-01-01",
    kontak: "/page/maintenance",
  },
  {
    no: 3,
    nama: "Herilani, S.Pd",
    jk: "Pr",
    statusPegawai: "PPPK",
    pangkat: "Guru Ahli Pertama / IX",
    jabatan: "Guru Kelas",
    pendidikan: "S1 - Bahasa Indonesia",
    tmtKerja: "2025-04-01",
    kontak: "/page/maintenance",
  },
  {
    no: 4,
    nama: "Karyawanti Pou Mangada, S.Pd",
    jk: "Pr",
    statusPegawai: "PNS",
    pangkat: "Penata Tingkat 1 / III.d",
    jabatan: "Guru Kelas",
    pendidikan: "S1 - Guru Kelas SD/MI",
    tmtKerja: "2005-01-01",
    kontak: "/page/maintenance",
  },
  {
    no: 5,
    nama: "Munira, S.Pd",
    jk: "Pr",
    statusPegawai: "PNS",
    pangkat: "Penata Muda Tingkat 1 / III.c",
    jabatan: "Guru Kelas",
    pendidikan: "S1 - Guru Kelas SD/MI",
    tmtKerja: "2010-01-01",
    kontak: "/page/maintenance",
  },
  {
    no: 6,
    nama: "Nasriyanto K. Dj. Tayeb, S.Pd",
    jk: "Lk",
    statusPegawai: "PNS",
    pangkat: "Penata Tingkat 1 / III.d",
    jabatan: "Guru Kelas",
    pendidikan: "S1 - Guru Kelas SD/MI",
    tmtKerja: "2006-03-01",
    kontak: "/page/maintenance",
  },
  {
    no: 7,
    nama: "Nurmila M. Day, S.Pd.I",
    jk: "Pr",
    statusPegawai: "PNS",
    pangkat: "Pembina Tingkat 1 / IV.b",
    jabatan: "Guru Agama Islam",
    pendidikan: "S1 - Pendidikan Agama Islam",
    tmtKerja: "2013-01-01",
    kontak: "/page/maintenance",
  },
  {
    no: 8,
    nama: "Rahman A. Majid, S.Pd",
    jk: "Lk",
    statusPegawai: "PNS",
    pangkat: "Pembina Tingkat 1 / IV.b",
    jabatan: "Kepala Sekolah",
    pendidikan: "S1 - Guru Kelas SD/MI",
    tmtKerja: "2000-12-01",
    kontak: "/page/maintenance",
  },
  {
    no: 9,
    nama: "Ranly Herly Mantiri, S.Pd",
    jk: "Lk",
    statusPegawai: "PNS",
    pangkat: "Penata Muda Tingkat 1 / III.c",
    jabatan: "Guru PJOK",
    pendidikan: "S1 - Pendidikan Jasmani dan Kesehatan",
    tmtKerja: "2018-08-01",
    kontak: "/page/maintenance",
  },
  {
    no: 10,
    nama: "Ririanti Ahmad",
    jk: "Pr",
    statusPegawai: "Honor Sekolah",
    pangkat: "-",
    jabatan: "Pustakawan",
    pendidikan: "SMA - Umum",
    tmtKerja: "2020-09-01",
    kontak: "/page/maintenance",
  },
  {
    no: 11,
    nama: "Saharudin Jufri",
    jk: "Lk",
    statusPegawai: "Honor Sekolah",
    pangkat: "-",
    jabatan: "Keamanan",
    pendidikan: "SMA - Umum",
    tmtKerja: "2024-01-01",
    kontak: "/page/maintenance",
  },
  {
    no: 12,
    nama: "Sauda I.S. Samungggai, S.Pd",
    jk: "Pr",
    statusPegawai: "PNS",
    pangkat: "Pembina Tingkat 1 / IV.b",
    jabatan: "Guru Kelas",
    pendidikan: "S1 - Guru Kelas SD/MI",
    tmtKerja: "1993-12-01",
    kontak: "/page/maintenance",
  },
  {
    no: 13,
    nama: "Sumiyati, S.Sos",
    jk: "Pr",
    statusPegawai: "PNS",
    pangkat: "Pengatur Tingkat 1 / II.d",
    jabatan: "Bendahara BOSP",
    pendidikan: "S1 - Administrasi Negara",
    tmtKerja: "2008-12-01",
    kontak: "/page/maintenance",
  },
  {
    no: 14,
    nama: "Syaikah Nahda Dalillah, S.Pd",
    jk: "Pr",
    statusPegawai: "Honor Sekolah",
    pangkat: "-",
    jabatan: "Guru",
    pendidikan: "S1 - Pendidikan Bahasa dan Sastra Indonesia",
    tmtKerja: "2024-01-01",
    kontak: "/page/maintenance",
  },
  {
    no: 15,
    nama: "Umar A. Pianta, S.IP",
    jk: "Lk",
    statusPegawai: "Honor Daerah TK.II",
    pangkat: "-",
    jabatan: "Penata Layanan",
    pendidikan: "S1 - Ilmu Pemerintahan",
    tmtKerja: "2007-07-01",
    kontak: "/page/maintenance",
  },
  {
    no: 16,
    nama: "Wahyuni Prihartin, S.Pd",
    jk: "Pr",
    statusPegawai: "Honor Sekolah",
    pangkat: "-",
    jabatan: "Guru Seni",
    pendidikan: "S1 - Guru Kelas SD/MI",
    tmtKerja: "2025-01-01",
    kontak: "/page/maintenance",
  },
  {
    no: 17,
    nama: "Wiwin Mahmud, S.Pd",
    jk: "Pr",
    statusPegawai: "PPPK",
    pangkat: "Guru Ahli Pertama / IX",
    jabatan: "Guru Kelas",
    pendidikan: "S1 - Guru Kelas SD/MI",
    tmtKerja: "2023-06-01",
    kontak: "/page/maintenance",
  },
];

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
        {data.map((d) => (
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">{d.no}</td>
          <td className="px-2 py-1 border">{d.nama}</td>
          <td className="px-2 py-1 border text-center">{d.jk}</td>
          <td className="px-2 py-1 border">{d.statusPegawai}</td>
          <td className="px-2 py-1 border">{d.pangkat}</td>
          <td className="px-2 py-1 border">{d.jabatan}</td>
          <td className="px-2 py-1 border">{d.pendidikan}</td>
          <td className="px-2 py-1 border text-center">{d.tmtKerja}</td>
          <td className="px-3 py-1 border text-center text-midnight_text font-semibold hover:cursor-pointer hover:underline hover:text-blue-500 focus:outline-none"><a href={d.kontak} target="_blank">WhatsApp</a></td>
        </tr>
        ))}
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
