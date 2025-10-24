"use client";

import React, { useState } from "react";
import ConfirmationForm from "./ConfirmationForm";
import RecommendationForm from "./RecommendationForm";
import PopupSuccess from "./PopupSuccess";

interface StudentDetailProps {
  student: any;
  onBack: () => void;
}

export default function StudentDetail({ student, onBack }: StudentDetailProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [confirmationStatus, setConfirmationStatus] = useState<string | null>(
    null
  );
  const [successPopup, setSuccessPopup] = useState(false);

  const handleConfirmationSubmit = (status: string) => {
    setConfirmationStatus(status);
    setShowConfirmation(false);

    // Jika siswa belum pernah mencairkan, lanjut ke rekomendasi
    if (status === "Belum Cair") {
      setShowRecommendation(true);
    } else {
      setSuccessPopup(true);
    }
  };

  return (
    <div className="bg-white shadow rounded-2xl p-4 sm:p-6 text-sm sm:text-base">
      <button
        onClick={onBack}
        className="text-blue-600 text-xs sm:text-sm font-semibold mb-3 hover:underline"
      >
        ← Kembali ke pencarian
      </button>

      {/* Info dasar siswa */}
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
        Detail Data Peserta Didik
      </h2>
      <div className="grid grid-cols-2 gap-y-1 text-xs sm:text-sm text-gray-700">
        <p>Nama</p>
        <p>:</p> <p>{student.nama}</p>
        <p>NISN</p>
        <p>:</p> <p>{student.nisn}</p>
        <p>NIK</p>
        <p>:</p> <p>{student.nik}</p>
        <p>Tempat lahir</p>
        <p>:</p> <p>{student.tempat_lhr}</p>
        <p>Tanggal lahir</p>
        <p>:</p> <p>{student.tgl_lhr}</p>
        <p>Nama ibu</p>
        <p>:</p> <p>{student.ibu}</p>
        <p>Nama ayah</p>
        <p>:</p> <p>{student.ayah}</p>
        <p>Tahap</p>
        <p>:</p> <p>{student.tahap}</p>
        <p>Tahun</p>
        <p>:</p> <p>{student.tahun}</p>
        <p>No. SK</p>
        <p>:</p> <p>{student.no_sk}</p>
      </div>

      {/* Tombol dan Form */}
      {!showConfirmation && !showRecommendation && !successPopup && (
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {student.status_cair === "Sudah Cair" ? (
            <>
              <div className="bg-red-100 rounded-xl p-4 text-red-700 text-xs sm:text-sm font-semibold italic">
                Status Dana Bansos PIP terdeteksi “Sudah dicairkan”. Untuk
                melanjutkan, silakan klik konfirmasi di bawah ini.
              </div>
              <button
                onClick={() => setShowConfirmation(true)}
                className="bg-green-600 text-white rounded-xl px-4 py-2 font-semibold hover:bg-green-700 transition"
              >
                Konfirmasi
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowRecommendation(true)}
              className="bg-blue-600 text-white rounded-xl px-4 py-2 font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
              disabled={!!student.tgl_cair}
            >
              Buat Permohonan Rekomendasi
            </button>
          )}
        </div>
      )}

      {/* Form Konfirmasi */}
      {showConfirmation && (
        <div className="mt-6">
          <ConfirmationForm
            student={student}
            onSubmit={handleConfirmationSubmit}
            onBack={() => setShowConfirmation(false)}
          />
        </div>
      )}

      {/* Form Rekomendasi */}
      {showRecommendation && (
        <div className="mt-6">
          <RecommendationForm
            student={student}
            onBack={() => setShowRecommendation(false)}
          />
        </div>
      )}

      {successPopup && (
  <PopupSuccess
    show={successPopup} // ✅ tambahkan ini
    message={`Konfirmasi status pencairan dana untuk ${student.nama} berhasil disimpan.`}
    onClose={() => setSuccessPopup(false)}
  />
)}
    </div>
  );
}
