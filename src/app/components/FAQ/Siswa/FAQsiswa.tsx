"use client";

import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const faqs = [
  {
    question: "Layanan apa saja yang tersedia di website ini?",
    answer:
      "Layanan yang tersedia di website SD Negeri 2 Bokat mencakup layanan untuk orang tua dan siswa, serta layanan informasi dan dokumentasi publik. Seluruh fitur dan tautan layanan telah disusun secara terintegrasi di halaman beranda website, sehingga Anda dapat dengan mudah memilih atau mengklik jenis layanan yang dibutuhkan sesuai keperluan.",
  },
  {
    question: "Apakah saya bisa melihat arsip Ijazah?",
    answer:
      "Ya, SD Negeri 2 Bokat memiliki layanan Cek Arsip Ijazah secara online melalui fitur “Cek Arsip Ijazah” di website sekolah. Anda dapat melihat dan mengunduh Ijazah secara elektornik tanpa harus datang langsung ke sekolah.",
  },
  {
    question: "Apakah saya bisa mengakses layanan diwebsite ini lewat HP?",
    answer:
      "Ya, semua layanan di website SD Negeri 2 Bokat bisa diakses lewat HP. Tampilan website sudah responsif, sehingga tetap nyaman digunakan di perangkat seluler maupun komputer.",
  },
  {
    question: "Mohon informasi tanggal pelaksanaan ujian sekolah.",
    answer:
      "Silakan buka menu Kalender Kegiatan Sekolah pada bagian fitur Layanan untuk melihat jadwal ujian dan berbagai kegiatan yang akan dilaksanakan oleh sekolah.",
  },
];

export const FaqSiswa = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex items-center mb-4">
      <h3 className="text-lg sm:text-xl font-semibold text-black flex gap-2 sm:gap-3">
        <Icon icon="fluent-color:person-feedback-24" className="w-8 h-8 sm:w-15 sm:h-15" />
        Pertanyaan Peserta Didik yang Sering Diajukan (FAQ):
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
