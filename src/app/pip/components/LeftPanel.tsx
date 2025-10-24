"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

interface DbPipRow {
  tahap: number;
  created_at: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LeftPanel() {
  const [jumlahSK, setJumlahSK] = useState<number>(0);
  const [tahapList, setTahapList] = useState<string>("-");
  const [lastUpdate, setLastUpdate] = useState<string>("-");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Ambil data dari tabel db_pip
        const { data, error } = await supabase
          .from("db_pip")
          .select("tahap, created_at");

        if (error) throw error;

        console.log("✅ Data dari Supabase:", data);

        if (data && data.length > 0) {
          // Jumlah SK
          setJumlahSK(data.length);

          // Tahap unik urut kecil ke besar
          const tahapUnik = Array.from(
            new Set(data.map((row) => row.tahap))
          ).sort((a, b) => Number(a) - Number(b));

          setTahapList(tahapUnik.join(", "));

          // Ambil waktu pembaruan terbaru
          const terbaru = data.reduce((acc, row) => {
            return new Date(row.created_at) > new Date(acc.created_at)
              ? row
              : acc;
          });

          const waktu = new Date(terbaru.created_at);
          const formatWaktu = waktu.toLocaleString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          setLastUpdate(formatWaktu);
        } else {
          setJumlahSK(0);
          setTahapList("-");
          setLastUpdate("-");
        }
      } catch (err) {
        console.error("❌ Error fetching db_pip:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <aside className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100 flex-shrink-0 sticky top-0 self-start overflow-y-auto max-h-screen">
      <h1 className="text-base sm:text-xl text-[#297BBF] mb-1">
        Selamat datang di Layanan Online SD Negeri 2 Bokat
      </h1>
      <p className="text-xs sm:text-sm text-black mb-4">
        Ini merupakan layanan bagi Orang Tua untuk mengajukan Permohonan Penerbitan Surat Rekomendasi Pencairan Dana Bansos PIP.
      </p>

      {loading ? (
        <p className="text-sm text-gray-500">Memuat data...</p>
      ) : (
        <div className="flex flex-col gap-3">
          {/* Card 1: Jumlah SK */}
          <div className="bg-blue-50 shadow border border-blue-100 rounded-xl pt-1 pb-4">
            <h2 className="text-center justify-center text-base sm:text-lg text-gray-800">
              Jumlah SK Pemberian
            </h2>
            <p className="text-center justify-center text-[30px] sm:text-[35px] font-bold text-green-700">
              {jumlahSK.toLocaleString("id-ID")} siswa
            </p>
          </div>

          {/* Card 2: Tahap Pemberian */}
          <div className="bg-green-50 shadow border border-green-100 rounded-xl pt-1 pb-4">
            <h2 className="text-center justify-center text-base sm:text-lg text-gray-800">
              Tahap Pemberian
            </h2>
            <p className="text-center justify-center text-[30px] sm:text-[35px] font-bold text-green-700">
              {tahapList}
            </p>
          </div>

          {/* Waktu pembaruan */}
          <p className="text-center text-xs sm:text-sm font-semibold text-gray-800 mt-2">
            Pembaruan database:{" "}
            <span className="text-gray-800">{lastUpdate} WITA</span>
          </p>
        </div>
      )}
    </aside>
  );
}
