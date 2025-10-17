"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface LolosButuhModalProps {
  onClose: () => void;
}

export default function LolosButuhModalModal ({ onClose }: LolosButuhModalProps) {
  const [formData, setFormData] = useState({
    namaAnak: "",
    kelas: "",
    alasan: "",
    tanggalIzin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Permohonan izin telah dikirim!");
    onClose();
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
                                    Permohonan Surat Lolos Butuh
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
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Anak</label>
            <input
              type="text"
              name="namaAnak"
              value={formData.namaAnak}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Kelas</label>
            <input
              type="text"
              name="kelas"
              value={formData.kelas}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Izin</label>
            <input
              type="date"
              name="tanggalIzin"
              value={formData.tanggalIzin}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Alasan Izin</label>
            <textarea
              name="alasan"
              rows={3}
              value={formData.alasan}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Footer */}
          <div className="flex justify-end pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 mr-2 hover:bg-gray-300"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
