"use client";

import { useState, useEffect } from "react";
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto"
      role="dialog"
      aria-modal="true"
    >

        {/* Body */}
        <div
        className="relative bg-[#FFFFFF] w-full h-screen sm:p-4"
        style={{ borderRadius: 0 }}
        
      >
        {/* main content: two columns on large, stacked on small */}
        <div className="sm:h-full flex flex-col">
          <div className="h-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            {/* RIGHT */}
            
            <div className="bg-header sm:rounded-[18px] shadow-xl border-l 
            sm:border-l-0 pl-5 py-4 sm:pt-7 sm:pl-8 overflow-hidden relative select-none" onContextMenu={(e) => e.preventDefault()}>
          <div className="prose max-w-none">
      {/* Logo kiri atas */}
      <div className="flex">
        <img
          src="/images/logo/logo-white.svg"
          alt="Layanan SD Negeri 2 Bokat"
          className="h-6 sm:h-12"
          
        />
        <div className='block sm:hidden'>
          {/* Banner */}
          <img
            src="/images/layanan/img_login_mobi.png"
            alt="Banner Layanan"
            className="
              w-42
              absolute
              right-0 bottom-0
            "
          />
        </div> 
      </div>

      {/* Konten utama */}
      <div className="flex sm:pl-8">
        {/* Teks + Banner wrapper */}
        <div className="relative flex pt-4 sm:pt-10">
          {/* Teks H1 */}
          <h1 className="text-[22px] sm:text-[50px] text-shadow font-semibold text-white/90 leading-tight z-10">
            Selamat datang <br/>
            di <b className="text-[#FFD60A]">Layanan<br/>Peserta <br className="hidden sm:block"/>Didik</b>
          </h1>
        </div>
        <div className='hidden sm:block'>
          {/* Banner */}
          <img
            src="/images/layanan/img_login.png"
            alt="Banner Layanan"
            className="
              w-full
              sm:self-start
              absolute
              right-0 bottom-0 
            "
          />
        </div> 
        </div>
        </div>
      </div>
      {/* LEFT: form and logic */}
<div className="flex flex-col gap-3 p-4 sm:pb-8 sm:px-8">
  <div className="flex items-center mb-2 ml-[-18px]">
  <a
            onClick={onClose}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-transparent hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
        >
        <Icon
        icon="ion:chevron-back-outline"
        className="w-5 h-5 font-semibold text-blue-400"
         />
        <span className="text-sm font-semibold text-blue-400">
        Kembali
        </span>
          </a>
          </div>
  <div className="flex items-center mb-6">
    <img
       src="/images/layanan/ortu-siswa.png"
       alt="Layanan Orang Tua dan Siswa"
       className="h-10 sm:h-12 mr-3 sm:mr-4"
     />
    <span className="text-[17px] sm:text-[20px] font-semibold text-black leading-tight italic">
      Cek Keaktifan Peserta Didik
      <p className="bg-header border-blue-500 rounded-tl-xl rounded-br-xl px-3 py-[1.5px] text-center text-gray-100 
      text-[10px] md:text-[14px] font-semibold italic text-shadow">Sistem Layanan Online Khusus Peserta Didik</p>
    </span>
  </div>
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
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
