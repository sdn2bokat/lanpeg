"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { Icon } from "@iconify/react/dist/iconify.js";

interface KeaktifanSiswaModalProps {
  onClose: () => void;
}

// 💫 Komponen loading mini (3 detik)
function LoadingComingMini() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-16 h-16">
        {/* Cincin biru */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        {/* Cincin kuning */}
        <div className="absolute inset-0 rounded-full border-4 border-t-yellow-400 border-transparent animate-[spin_1.2s_linear_infinite_reverse]"></div>
      </div>
      <p className="mt-3 text-blue-700 font-medium text-sm animate-pulse text-center">
        Proses pengambilan data...
      </p>
    </div>
  );
}

export default function KeaktifanSiswaModal({ onClose }: KeaktifanSiswaModalProps) {
  const [jenisPencarian, setJenisPencarian] = useState<"nisn" | "nik">("nisn");
  const [keyword, setKeyword] = useState("");
  const [namaIbu, setNamaIbu] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasil, setHasil] = useState<any | null>(null);

  // 🚫 Kunci scroll saat modal aktif
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 🔍 Fungsi pencarian
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setHasil(null);

    // Simulasi delay 3 detik untuk efek loading
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const { data, error } = await supabase
      .from("db_siswa")
      .select("*")
      .eq(jenisPencarian, keyword)
      .ilike("nama_ibu", `%${namaIbu}%`)
      .limit(1);

    setLoading(false);

    if (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mencari data.");
      return;
    }

    if (data && data.length > 0) {
      setHasil(data[0]);
    } else {
      setHasil("not_found");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-header text-white">
          <div className="flex items-center">
            <Image
              src="/images/layanan/profil.png"
              alt="Layanan dan Informasi Sekolah"
              width={26}
              height={26}
              className="mr-3"
            />
            <h4 className="text-xl font-semibold text-white">
              Layanan Cek Keaktifan Peserta Didik
            </h4>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-blue-700 p-1 rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        {!loading && !hasil && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Jenis pencarian */}
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Cek berdasarkan Data
              </label>
              <select
                value={jenisPencarian}
                onChange={(e) =>
                  setJenisPencarian(e.target.value as "nisn" | "nik")
                }
                className="w-full text-sm sm:text-base border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 cursor-pointer"
              >
                <option value="nisn">NISN</option>
                <option value="nik">NIK</option>
              </select>
            </div>

            {/* Input NISN/NIK */}
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                {jenisPencarian.toUpperCase()}
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                required
                minLength={10}
                maxLength={20}
                className="w-full text-sm sm:text-base border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                placeholder={`Masukkan ${jenisPencarian.toUpperCase()}...`}
              />
            </div>

            {/* Nama Ibu Kandung */}
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Nama Ibu Kandung
              </label>
              <input
                type="text"
                value={namaIbu}
                onChange={(e) => setNamaIbu(e.target.value)}
                required
                minLength={3}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                placeholder="Masukkan Nama Ibu Kandung..."
              />
            </div>

            {/* Tombol submit Cek Keaktifan di bawah input ibu */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="w-full w-auto px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transform transition duration-200 ease-in-out hover:scale-98 active:scale-95"
              >
                Cek Keaktifan
              </button>
            </div>
          </form>
        )}

        {/* Loading */}
        {loading && <LoadingComingMini />}

        {/* Hasil pencarian */}
        {!loading && hasil && (
          <div className="px-6 pb-6">
            {hasil === "not_found" ? (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <div className="flex text-center justify-center py-2">
                  <hr className="my-2" />
                <Icon icon="emojione:fearful-face" className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                    </div>
                    <div className="text-center justify-center py-2">
                <strong>Maaf, data Peserta Didik tidak ditemukan.</strong>
                <p className="text-xs text-gray-500 pt-1">Mohon pastikan NIK/NISN dan nama ibu kandung sudah benar. Data mungkin tidak tersedia karena peserta didik telah pindah atau lulus.</p></div>
              </div>
            ) : (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-gray-800">
                <p className="text-center text-green-800 font-bold mb-1 text-lg"><strong>INFO PESERTA DIDIK AKTIF</strong></p>
              <hr className="my-2" />
                <div className="flex text-center justify-center py-2">
                <Icon icon="emojione:boy" className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                    </div>
                <p>
                  <div className="overflow-x-auto p-1 rounded-lg shadow bg-white">
                    <tr>
                      <td className="px-2 py-2">Nama</td> <td className="px-2 py-2">:</td> <td className="px-2 py-2"><strong>{hasil.nama}</strong></td>
                      </tr>
                <tr>
                      <td className="px-2 py-2">NIS/ NISN</td> <td className="px-2 py-2">:</td> <td className="px-2 py-2">{hasil.nisn || "-"} / {hasil.nipd || "-"}</td>
                      </tr>
                <tr>
                      <td className="px-2 py-2">Tanggal lahir</td> <td className="px-2 py-2">:</td> <td className="px-2 py-2">{hasil.tempat_lahir}, {hasil.tanggal_lahir}</td>
                      </tr>
                <tr>
                      <td className="px-2 py-2">Rombel</td> <td className="px-2 py-2">:</td> <td className="px-2 py-2">{hasil.rombel}</td>
                      </tr>
                <tr>
                      <td className="px-2 py-2">Aktif di Dapodik</td> <td className="px-2 py-2">:</td> <td className="px-2 py-2">
                  SD NEGERI 2 BOKAT / SD PEMBINA KAB. BUOL</td>
                      </tr></div></p>
                <hr className="my-2" />
                <p className="text-xs text-gray-500">
                  Waktu Penarikan Data : {new Date(hasil.created_at).toLocaleString("id-ID")}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer modal selalu tampil */}
        <div className="flex justify-end px-6 py-4 border-t bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-red-800 hover:text-white cursor-pointer transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
