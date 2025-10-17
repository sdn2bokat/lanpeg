import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Layanan Sedang Perbaikan | SD Negeri 2 Bokat/ SD Pembina Kab. Buol',
}

export default function Maintenance() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6 py-16">
      <div className="container mx-auto">
      {/* Gambar */}
      <div className="mb-[-2]">
        <Image
          src="/images/maintenance.png" // ganti dengan path gambar kamu
          alt="Maintenance"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>

      {/* Judul dan Deskripsi */}
      <p className="text-black/70 text-sm sm:text-base md:text-lg text-center mx-auto mb-8">
        Layanan ini sedang dalam proses perbaikan untuk peningkatan kualitas.<br />
        Silakan gunakan fitur layanan lainnya dengan mengklik tombol di bawah ini.
      </p>

      {/* Tombol Kembali */}
      <Link
        href="/page/portal-layanan-sekolah"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
      >
        Layanan Sekolah
      </Link>

      {/* Pesan Tambahan */}
      <p className="text-black/70 text-sm sm:text-base md:text-lg text-center mx-auto mt-8">
        Terima kasih atas kunjungannya. Kami mohon maaf atas ketidaknyamanan ini.
      </p>

      {/* Tim Pengembang */}
      <div className="mt-10 text-gray-700">
        <h2 className="text-sm sm:text-lg font-semibold mb-2">Tim Pengembang:</h2>
        <ul className="space-y-1 text-xs sm:text-sm">
          <li>
            • <b>Umar A. Piantae, S.IP</b> || Penata Layanan SDN 2 Bokat
          </li>
          <li>
            • <b>Devmartin Sidi</b> || Developer by <a
  href="https://sidi.my.id"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:cursor-pointer hover:text-blue-600"
>
  Sistem Digitalisasi
</a>
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
};
