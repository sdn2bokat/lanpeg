"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function LoadingPrasarana() {
  const [status, setStatus] = useState(0);
  const [percent, setPercent] = useState(0);

  // urutan status dan persen simulasi
  const sequence = [
    {
      text: "Sedang membuat tabel...",
      percents: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      hold: 22,
      delay: 2000,
    },
    {
      text: "Menghubungkan tabel ke server...",
      percents: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      hold: 33,
      delay: 3000,
    },
    {
      text: "Terhubung ke server sdn2bokat.sch.id...",
      percents: [34, 35, 36, 37, 38, 39],
      hold: 40,
      delay: 5000,
    },
    {
      text: "Menunggu respon dari server sdn2bokat.sch.id...",
      percents: [41, 42],
      hold: 43,
      delay: 1500,
    },
    {
      text: "Server sdn2bokat.sch.id sedang sibuk...",
      percents: [44, 0],
      hold: 0,
      delay: 1000,
    },
    {
      text: "Menghubungkan kembali ke server...",
      percents: [0, 1, 0],
      hold: 0,
      delay: 1000,
    },
    {
      text: "Terhubung...",
      percents: [0, 1],
      hold: 1,
      delay: 800,
    },
    {
      text: "Mebuat tabel...",
      percents: [1, 2, 3, 4, 5, 6, 7, 8],
      hold: 8,
      delay: 1000,
    },
    {
      text: "Sinkron tabel ke server...",
      percents: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      hold: 22,
      delay: 1500,
    },
    {
      text: "Mencari database di server sdn2bokat.sch.id...",
      percents: [23, 24, 25, 26, 27, 28, 29, 30, 31],
      hold: 31,
      delay: 3000,
    },
    {
      text: "Menghitung kolom tabel...",
      percents: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
      hold: 44,
      delay: 5000,
    },
    {
      text: "Selesai menghitung kolom tabel...",
      percents: [45, 46],
      hold: 46,
      delay: 1000,
    },
    {
      text: "Menghitung baris tabel...",
      percents: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
      hold: 59,
      delay: 8000,
    },
    {
      text: "Selesai menghitung baris tabel...",
      percents: [59, 60],
      hold: 60,
      delay: 1000,
    },
    {
      text: "Berhasil membuat tabel...",
      percents: [60, 61],
      hold: 61,
      delay: 1000,
    },
    {
      text: "Mengambil isian tabel dari database...",
      percents: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
      hold: 74,
      delay: 3000,
    },
    {
      text: "Menampilkan tabel, proses ini lama karena trafik server padat...",
      percents: [75, 76, 77, 78],
      hold: 78,
      delay: 3000,
    },
    {
      text: "Menampilkan tabel, proses ini lama karena trafik server padat...",
      percents: [79, 80, 81, 82, 84, 83, 84, 85, 86, 87, 88],
      hold: 88,
      delay: 500,
    },
    {
      text: "Menampilkan tabel, proses ini lama karena trafik server padat...",
      percents: [88, 89, 90, 91, 92],
      hold: 93,
      delay: 1500,
    },
    {
      text: "Terputus proses menampilkan tabel...",
      percents: [93, 0],
      hold: 0,
      delay: 800,
    },
    {
      text: "Menghubungkan kembali untuk menampilkan tabel...",
      percents: [0, 93],
      hold: 93,
      delay: 1000,
    },
    {
      text: "Terhubung, lanjut proses menampilkan tabel...",
      percents: [93, 94, 95],
      hold: 95,
      delay: 1800,
    },
    {
      text: "Terhubung, lanjut proses menampilkan tabel...",
      percents: [95, 0],
      hold: 0,
      delay: 400,
    },
    {
      text: "Gagal! Server sedang sibuk...",
      percents: [0, 0],
      hold: 0,
      delay: 1000,
    },
    {
      text: "Memuat...",
      percents: [0, 0],
      hold: 0,
      delay: 800,
    },
    {
      text: "Tunggu! Server sedang menarik data dari pusdatin...",
      percents: [0, 0],
      hold: 0,
      delay: 5000,
    },
    {
      text: "Memuat...",
      percents: [0, 1, 0, 1, 0, 1, 0],
      hold: 0,
      delay: 3000,
    },
    {
      text: "Menghubungkan...",
      percents: [1, 2, 3, 0, 1, 0],
      hold: 0,
      delay: 4000,
    },
    {
      text: "Server masih penarikan data dari pusdatin...",
      percents: [0, 0],
      hold: 0,
      delay: 2000,
    },
    {
      text: "Memuat...",
      percents: [0, 1, 0],
      hold: 0,
      delay: 1000,
    },
    {
      text: "Menghubungkan...",
      percents: [0, 1],
      hold: 1,
      delay: 1500,
    },
    {
      text: "Mulai Proses...",
      percents: [1, 2],
      hold: 2,
      delay: 2000,
    },
    {
      text: "Tunggu, proses berjalan...",
      percents: [2, 3],
      hold: 3,
      delay: 1000,
    },
    {
      text: "Terhubung...",
      percents: [3, 3],
      hold: 3,
      delay: 500,
    },
    {
      text: "Sedang membuat tabel...",
      percents: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      hold: 22,
      delay: 2000,
    },
    {
      text: "Menghubungkan tabel ke server...",
      percents: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      hold: 33,
      delay: 3000,
    },
    {
      text: "Terhubung ke server sdn2bokat.sch.id...",
      percents: [34, 35, 36, 37, 38, 39],
      hold: 40,
      delay: 5000,
    },
    {
      text: "Menunggu respon dari server sdn2bokat.sch.id...",
      percents: [41, 42],
      hold: 43,
      delay: 1500,
    },
    {
      text: "Server sdn2bokat.sch.id sedang sibuk...",
      percents: [44, 0],
      hold: 0,
      delay: 1000,
    },
    {
      text: "Server sibuk! Mencoba menghubungkan...",
      percents: [0, 1],
      hold: 0,
      delay: 60000,
    },
    {
      text: "Menghubungkan kembali ke server...",
      percents: [0, 1, 0],
      hold: 0,
      delay: 1000,
    },
    {
      text: "Terhubung...",
      percents: [0, 1],
      hold: 1,
      delay: 3000,
    },
    {
      text: "Memulai kembali...",
      percents: [1, 2, 3],
      hold: 3,
      delay: 1500,
    },
  ];

  useEffect(() => {
    let current = 0;
    let percentIndex = 0;

    const interval = setInterval(() => {
      const seq = sequence[status];
      const nextPercent = seq.percents[percentIndex];

      if (nextPercent !== undefined) {
        setPercent(nextPercent);
        percentIndex++;
      } else {
        setPercent(seq.hold);
        percentIndex = 0;
        setStatus((prev) => (prev + 1) % sequence.length);
      }
    }, sequence[status].delay / (sequence[status].percents.length + 1));

    return () => clearInterval(interval);
  }, [status]);

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3">
      {/* Baris 3: Status berganti otomatis */}
      <p className="text-xs sm:text-sm font-medium text-green-600 transition-all duration-500">
        {sequence[status].text} ({percent}%)
      </p>
    </div>
  );
}
