"use client";

import React from "react";

interface StudentData {
  nama?: string;
  nisn?: string;
  kelas?: string;
  tahap?: string | number;
  status?: string; // contoh: "Terdaftar", "Belum Diverifikasi", dll.
}

interface VerificationSectionProps {
  student: StudentData | null;
  onProceed?: () => void;
  loading?: boolean;
}

export default function VerificationSection({
  student,
  onProceed,
  loading = false,
}: VerificationSectionProps) {
  if (loading) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow text-center">
        <p className="text-sm text-gray-600 animate-pulse">Memeriksa data siswa...</p>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow text-center">
        <p className="text-sm text-gray-600">Belum ada data yang diverifikasi.</p>
      </div>
    );
  }

  const statusColor =
    student.status === "Terdaftar"
      ? "text-green-600 bg-green-50"
      : student.status === "Belum Diverifikasi"
      ? "text-yellow-600 bg-yellow-50"
      : "text-red-600 bg-red-50";

  return (
    <div className="bg-white p-4 rounded-2xl shadow flex flex-col gap-4">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
        Hasil Verifikasi Data Siswa
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-500">Nama Siswa</p>
          <p className="font-medium">{student.nama || "-"}</p>
        </div>
        <div>
          <p className="text-gray-500">NISN</p>
          <p className="font-medium">{student.nisn || "-"}</p>
        </div>
        <div>
          <p className="text-gray-500">Kelas</p>
          <p className="font-medium">{student.kelas || "-"}</p>
        </div>
        <div>
          <p className="text-gray-500">Tahap PIP</p>
          <p className="font-medium">{student.tahap || "-"}</p>
        </div>
      </div>

      <div
        className={`p-3 rounded-xl text-center font-semibold ${statusColor}`}
      >
        Status: {student.status || "Tidak diketahui"}
      </div>

      {student.status === "Terdaftar" && (
        <button
          onClick={onProceed}
          className="bg-blue-600 text-white rounded-xl py-2 font-semibold hover:bg-blue-700 transition"
        >
          Lanjutkan ke Konfirmasi
        </button>
      )}
    </div>
  );
}
