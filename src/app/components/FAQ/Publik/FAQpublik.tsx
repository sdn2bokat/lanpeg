"use client";

import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
 
const faqs = [
  {
    question: "Apa fungsi dari website sekolah?",
    answer:
      "Website sekolah ini berfungsi sebagai media informasi resmi dan pusat layanan digital bagi seluruh warga sekolah serta masyarakat umum. Melalui website ini, sekolah berupaya menghadirkan layanan yang transparan, cepat, dan mudah diakses kapan pun dan di mana pun.",
  },
  {
    question: "Layanan apa saja yang tersedia di website ini?",
    answer:
      "Layanan yang tersedia di website SD Negeri 2 Bokat mencakup layanan untuk orang tua dan siswa, serta layanan informasi dan dokumentasi publik. Seluruh fitur dan tautan layanan telah disusun secara terintegrasi di halaman beranda website, sehingga Anda dapat dengan mudah memilih atau mengklik jenis layanan yang dibutuhkan sesuai keperluan.",
  },
  {
    question: "Bagaimana cara meminta Surat Rekomendasi Pencairan PIP lewat online?",
    answer:
      "Surat Rekomendasi Pencairan PIP dapat diajukan secara online melalui menu Layanan Orang Tua dan Peserta Didik. Pilih layanan Permohonan Rekomendasi PIP, isi data dan email aktif, lalu ajukan permohonan. Surat akan diproses digital dan dikirim ke email Anda paling lambat 1 jam pada jam kerja.",
  },
  {
    question: "Apa fungsi fitur TRANSPARANSI di menu layanan?",
    answer:
      "Fitur Transparansi berfungsi menampilkan dokumen RKT, RKAS, serta grafik penerimaan dan pengeluaran anggaran sekolah setiap tahun sebagai bentuk keterbukaan dan akuntabilitas publik.",
  },
  {
    question: "Apakah sekolah ini melayani penerimaan siswa baru secara online?",
    answer:
      "Ya, SD Negeri 2 Bokat melayani pendaftaran siswa baru secara online melalui fitur “Sistem PMB Online” di website sekolah. Calon siswa dapat mendaftar, mengunggah dokumen, dan memantau hasil seleksi tanpa harus datang langsung ke sekolah.",
  },
  {
    question: "Apakah saya bisa mengakses layanan diwebsite ini lewat HP?",
    answer:
      "Ya, semua layanan di website SD Negeri 2 Bokat bisa diakses lewat HP. Tampilan website sudah responsif, sehingga tetap nyaman digunakan di perangkat seluler maupun komputer.",
  },
  {
    question: "Apakah diwebsite ini bisa mengecek NISN anak saya?",
    answer:
      "Ya, melalui fitur Cek Keaktifan Peserta Didik, Anda dapat melihat data anak Anda termasuk NISN. Cukup masukkan nama siswa dan nama ibu kandung pada kolom pencarian yang tersedia.",
  },
  {
    question: "Mohon informasi tanggal pelaksanaan ujian sekolah.",
    answer:
      "Silakan buka menu Kalender Kegiatan Sekolah pada bagian fitur Layanan untuk melihat jadwal ujian dan berbagai kegiatan yang akan dilaksanakan oleh sekolah.",
  },
  {
    question: "Bagaimana menentukan jarak tempat tinggal ke SD Negeri 2 Bokat?",
    answer:
      "Anda dapat mengetahui jarak ke SD Negeri 2 Bokat melalui menu Peta Sekolah. Klik Rute, lalu tandai lokasi rumah Anda — sistem akan menampilkan jarak dan waktu tempuh secara otomatis.",
  },
];

export const FaqPublik = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="flex items-center mb-4">
      <h3 className="text-lg sm:text-xl font-semibold text-black flex gap-2 sm:gap-3">
        <Icon icon="fluent-color:notebook-question-mark-24" className="w-8 h-8 sm:w-15 sm:h-15" />
        Pertanyaan Publik yang Sering Diajukan (FAQ):
      </h3>
      </div>
      <div className="p-6 rounded-md border mt-4 border-dark_border border-opacity-60">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-3">
            <button
              className="w-full flex justify-between items-center text-left cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-sm sm:text-base font-semibold text-black">{faq.question}</span>
              {openIndex === index ? (
                <Icon icon="bx:chevron-up" className="w-8 h-8 text-gray-500" />
              ) : (
                <Icon icon="bx:chevron-down" className="w-8 h-8 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
