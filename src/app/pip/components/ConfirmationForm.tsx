"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface ConfirmationFormProps {
  student: any;
  onSubmit: (status: string) => void;
  onBack: () => void;
}

export default function ConfirmationForm({
  student,
  onSubmit,
  onBack,
}: ConfirmationFormProps) {
  const [statusCair, setStatusCair] = useState("");
  const [tglCair, setTglCair] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Jika status "Ya, pernah"
    if (statusCair === "Ya, pernah") {
      try {
        const { error } = await supabase
          .from("db_pip")
          .update({ tgl_cair: tglCair })
          .eq("nisn", student.nisn);

        if (error) throw error;
        console.log("✅ Kolom tgl_cair berhasil diperbarui di db_pip");
        setShowPopup(true);
      } catch (err) {
        console.error("❌ Gagal menyimpan data:", err);
        alert("Terjadi kesalahan saat menyimpan data. Coba lagi.");
      }
    } else {
      // Jika "Belum pernah"
      onSubmit("Belum pernah");
    }
  };

  return (
    <div className="relative">
      {/* ✅ Popup sukses */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center max-w-xs mx-auto animate-fadeIn">
            <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-3" />
            <p className="text-sm sm:text-base font-semibold mb-2">
              Terima kasih sudah melakukan konfirmasi pencairan Bansos PIP{" "}
              <span className="font-bold">{student.nama}</span>.
            </p>
            <button
              onClick={() => {
                setShowPopup(false);
                window.location.href = "/";
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-700 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ✅ Form Konfirmasi */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow-sm"
      >
        <h3 className="text-sm sm:text-base font-bold mb-2">
          Konfirmasi PIP | {student.nama}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 mb-4">
          Harap lakukan konfirmasi Status Pencairan dibawah ini!
        </p>

        <label className="block text-sm sm:text-base mb-1">
          Di tahun {student.tahun}, apakah Anda pernah melakukan pencairan Dana
          PIP di Bank penyalur?
        </label>
        <select
          value={statusCair}
          onChange={(e) => setStatusCair(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg p-2 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 mb-4 cursor-pointer"
        >
          <option value="">-- Pilih jawaban --</option>
          <option value="Ya, pernah">Ya, pernah</option>
          <option value="Belum pernah">Belum pernah</option>
        </select>

        {statusCair === "Ya, pernah" && (
          <div className="mb-4">
            <label className="block text-sm sm:text-base font-bold mb-1">
              Tanggal pencairan (sesuaikan pada buku tabungan)
            </label>
            <input
              type="date"
              value={tglCair}
              onChange={(e) => setTglCair(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-300 text-gray-800 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-gray-400 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
          >
            Kembali
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-blue-700 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
          >
            Kirim Konfirmasi
          </button>
        </div>
      </form>
    </div>
  );
}
