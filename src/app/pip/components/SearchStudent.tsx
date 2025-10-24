"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";
import ConfirmationForm from "./ConfirmationForm";
import RecommendationForm from "./RecommendationForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SearchStudent() {
  const supabase = createClientComponentClient();
  const [options, setOptions] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [tahapList, setTahapList] = useState<string>("");
  const [tahun, setTahun] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showCairWarning, setShowCairWarning] = useState(false);
  const [activeView, setActiveView] = useState<"search" | "confirm" | "recommendation">("search");

  // 🔹 Ambil daftar tahap & tahun dari tabel db_pip
  useEffect(() => {
    const fetchTahapTahun = async () => {
      const { data, error } = await supabase.from("db_pip").select("tahap, tahun");
      if (error) {
        console.error(error);
        return;
      }

      const tahapUnik = Array.from(new Set(data.map((d) => d.tahap))).sort(
        (a, b) => Number(a) - Number(b)
      );
      const tahunUnik = Array.from(new Set(data.map((d) => d.tahun))).join(", ");

      setTahapList(tahapUnik.join(", "));
      setTahun(tahunUnik);
    };

    fetchTahapTahun();
  }, [supabase]);

  // 🔹 Ambil daftar nama untuk dropdown
  useEffect(() => {
    const fetchOptions = async () => {
      const { data, error } = await supabase
        .from("db_pip")
        .select("nama, nisn")
        .order("nama", { ascending: true });

      if (error) console.error(error);
      else {
        const mapped = data.map((s) => ({
          value: s.nama,
          label: s.nama,
          nisn: s.nisn,
        }));
        setOptions(mapped);
      }
    };
    fetchOptions();
  }, [supabase]);

  // 🔹 Ambil detail siswa berdasarkan pilihan dropdown
  const handleSelect = async (option: any) => {
    if (!option) return;
    setLoading(true);
    setShowCairWarning(false); // reset peringatan setiap ganti siswa
    const { data, error } = await supabase
      .from("db_pip")
      .select("*")
      .eq("nama", option.value)
      .single();

    if (error) console.error(error);
    setSelectedStudent(data);
    setLoading(false);
  };

  // 🔹 Ketika tombol "Buat Permohonan Rekomendasi" diklik
  const handleBuatPermohonan = () => {
    if (selectedStudent?.status_cair === "Sudah Cair") {
      setShowCairWarning(true);
    } else {
      // logika normal (misalnya navigasi ke halaman rekomendasi)
      console.log("Membuat permohonan rekomendasi...");
    }
  };

  return (
    <>
    {activeView === "search" && (
    <div className="flex flex-col gap-4 bg-white rounded-2xl shadow p-4">
      {/* 🔹 Petunjuk atas */}
      <div className="bg-[#FEFFF0] text-[#12691C] p-3 rounded-lg shadow text-xs sm:text-sm">
        <strong>Petunjuk dan Alur Pengusulan:</strong>
        <table className="min-w-full w-full">
          <tbody>
            <tr>
              <td className="px-1 py-1 align-top">1.</td>
              <td className="pr-1 py-1 align-top">
                Pilih nama peserta didik penerima Dana PIP dari daftar di bawah
                ini. Anda juga dapat mengetik beberapa huruf untuk mempercepat
                pencarian nama.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />

      {/* 🔹 Dropdown nama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base font-medium text-gray-700">
            Pilih Nama Peserta Didik
          </label>
          <Select
            options={options}
            onChange={handleSelect}
            placeholder="Ketik atau pilih nama penerima..."
            isSearchable
            className="text-xs sm:text-sm"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "0.75rem",
                borderColor: "#D1D5DB",
                boxShadow: "none",
                cursor: "pointer",
                "&:hover": { borderColor: "#3B82F6" },
              }),
                dropdownIndicator: (base) => ({
               ...base,
               cursor: "pointer",
               }),
              option: (base) => ({
              ...base,
              cursor: "pointer",
              }),
              }}
            />
        </div>
        <div className="flex items-center justify-end pb-0 sm:pt-8">
          <span className="text-[10px] sm:text-[12px] italic text-gray-500">
            Daftar disamping hanya menampilkan nama penerima di tahap {tahapList} tahun anggaran {tahun}.
          </span>
        </div>
      </div>

      {/* 🔹 Detail siswa */}
      {loading && <p className="text-sm text-gray-500">Memuat data...</p>}

      {selectedStudent && (
        <div className="mt-4 text-xs sm:text-sm text-gray-700">
          <p className="mb-3">
            Selamat! <b>{selectedStudent.nama}</b> telah ditetapkan sebagai penerima Dana Bansos Program Indonesia Pintar (PIP) Tahap{" "}
            <b>{selectedStudent.tahap}</b> Tahun Anggaran {selectedStudent.tahun}{" "},
            berdasarkan SK Pemberian No. {selectedStudent.no_sk}, yang diusulkan oleh{" "}
            <b>{selectedStudent.nama_pengusul}</b> dengan rincian data sebagai berikut:
          </p>

          <table className="min-w-full w-full">
          <tbody>
            <tr>
            <td className="px-2 py-1 align-top">Nama</td>
            <td className="px-2 py-1 align-top">:</td>
            <td className="px-2 py-1 align-top">{selectedStudent.nama}</td>
            </tr>
            <tr>
            <td className="px-2 py-1 align-top">NISN</td>
            <td className="px-2 py-1 align-top">:</td>
            <td className="px-2 py-1 align-top">{selectedStudent.nisn}</td>
            </tr>
            <tr>
            <td className="px-2 py-1 align-top">NIK</td>
            <td className="px-2 py-1 align-top">:</td>
            <td className="px-2 py-1 align-top">{selectedStudent.nik}</td>
            </tr>
            <tr>
            <td className="px-2 py-1 align-top">Tempat Lahir</td>
            <td className="px-2 py-1 align-top">:</td>
            <td className="px-2 py-1 align-top">{selectedStudent.tempat_lhr}</td>
            </tr>
            <tr>
            <td className="px-2 py-1 align-top">Tanggal Lahir</td>
            <td className="px-2 py-1 align-top">:</td>
            <td className="px-2 py-1 align-top">{selectedStudent.tgl_lhr}</td>
            </tr>
            <tr>
            <td className="px-2 py-1 align-top">Nama Ibu</td>
            <td className="px-2 py-1 align-top">:</td>
            <td className="px-2 py-1 align-top">{selectedStudent.ibu}</td>
            </tr>
            <tr>
            <td className="px-2 py-1 align-top">Nama Ayah</td>
            <td className="px-2 py-1 align-top">:</td>
            <td className="px-2 py-1 align-top">{selectedStudent.ayah}</td>
            </tr>
            <tr>
            <td className="px-2 py-1 align-top">Keterangan Pencairan</td>
            <td className="px-2 py-1 align-top">:</td>
            <td className="px-2 py-1 align-top">{selectedStudent.keterangan_pencairan || "-"}</td>
            </tr>
            <tr>
            <td className="px-2 py-1 align-top">Status Cair</td>
            <td className="px-2 py-1 align-top">:</td>
            <td className="px-2 py-1 align-top">{selectedStudent.status_cair}
              {selectedStudent.tgl_cair
                ? ` (${selectedStudent.tgl_cair})`
                : ""}
            </td>
            </tr>
            </tbody>
            </table>

          {/* 🔹 Tombol aksi */}
          <div className="mt-4 text-center">
            <button
              onClick={handleBuatPermohonan}
              hidden={showCairWarning}
              disabled={!!selectedStudent.tgl_cair}
              className={`text-sm rounded-full px-6 py-3 font-semibold transform transition duration-200 ease-in-out hover:scale-105 active:scale-95 cursor-pointer ${
                selectedStudent.tgl_cair
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Buat Permohonan Rekomendasi
            </button>
            </div>
            {/* 🔹 Pesan & tombol konfirmasi (muncul setelah diklik dan status cair) */}
            {showCairWarning && selectedStudent.status_cair === "Sudah Cair" && (
              <div className="mt-4 bg-red-100 shadow rounded-xl p-4 text-red-700 text-xs sm:text-sm">
                <b>⚠️ Maaf!</b> Dana Bansos PIP atas nama <b>{selectedStudent.nama}</b> untuk tahap <b>{selectedStudent.tahap}</b> Tahun Anggaran{" "}
                {selectedStudent.tahun}, terdeteksi <b>Sudah dicairkan</b>. Mohon lakukan <b>Konfirmasi</b> melalui tombol di bawah ini sebelum melanjutkan.
                <div className="mt-3 text-center">
                  <button
                    onClick={() => setActiveView("confirm")}
                    className="bg-green-600 text-white rounded-xl px-4 py-2 font-semibold hover:bg-green-700 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Konfirmasi sekarang!
                  </button>
                </div>
              </div>
            )}
            </div>
          )}
        </div>
      )}

      {activeView === "confirm" && selectedStudent && (
        <ConfirmationForm
          student={selectedStudent}
          onSubmit={(status) => {
            if (status === "Belum pernah") {
            setActiveView("recommendation");
            }
          }}
          onBack={() => setActiveView("search")}
        />
      )}
      {activeView === "recommendation" && selectedStudent && (
      <RecommendationForm
        student={selectedStudent}
        onBack={() => setActiveView("search")}
      />
    )}
    </>
);
}
