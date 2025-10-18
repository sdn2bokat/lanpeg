"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";
 
// Import semua modal
import IzinAnakModal from "@/app/components/Popup/IzinAnakModal";
import LolosButuhModal from "@/app/components/Popup/LolosButuhModal";
import RekomPipModal from "@/app/components/Popup/RekomPipModal";
import KeaktifanSiswaModal from "@/app/components/Popup/KeaktifanSiswaModal";
import PengumumanKelulusanModal from "@/app/components/Popup/PengumumanKelulusanModal";
import ArsipIjazahModal from "@/app/components/Popup/ArsipIjazahModal";

const Layanan = () => {
  const [role, setRole] = useState("");
  const [service, setService] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const parentServices = [
    { label: "Permohonan Izin Anak", value: "izinAnak" },
    { label: "Permohonan Lolos Butuh", value: "lolosButuh" },
    { label: "Permohonan Rekomendasi PIP", value: "rekomPip" },
  ];

  const studentServices = [
    { label: "Cek Keaktifan Siswa", value: "keaktifanSiswa" },
    { label: "Cek Pengumuman Kelulusan", value: "pengumumanKelulusan" },
    { label: "Cek Arsip Ijazah", value: "arsipIjazah" },
  ];

  const handleOpen = () => {
    if (service) setOpenModal(true);
  };

  const closeModal = () => setOpenModal(false);

  const renderModal = () => {
    switch (service) {
      case "izinAnak":
        return <IzinAnakModal onClose={closeModal} />;
      case "lolosButuh":
        return <LolosButuhModal onClose={closeModal} />;
      case "rekomPip":
        return <RekomPipModal onClose={closeModal} />;
      case "keaktifanSiswa":
        return <KeaktifanSiswaModal onClose={closeModal} />;
      case "pengumumanKelulusan":
        return <PengumumanKelulusanModal onClose={closeModal} />;
      case "arsipIjazah":
        return <ArsipIjazahModal onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <section className='pt-12 scroll-mt-10' id='layanan'>
      <div className='container'>
        <h2 className='mb-2 sm:mb-4 text-center text-[#297BBF] mx-auto'>
          Portal Layanan Digital SD Negeri 2 Bokat
        </h2>
        <p className="text-black/70 text-sm sm:text-base md:text-lg text-center mx-auto mb-3">
          Di sini, seluruh warga sekolah dapat menikmati berbagai layanan pendidikan secara online — mulai dari informasi akademik, kegiatan sekolah, hingga layanan administrasi — semua dirancang agar lebih mudah diakses kapan saja dan di mana saja.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Kolom Kiri */}
            <div className="border rounded-2xl shadow-sm p-6 bg-white">
              <div className="flex items-center mb-4">
              <Image
                src="/images/layanan/ortu-siswa.png"
                alt="Layanan Orang Tua dan Siswa"
                width={50}
                height={50}
                className="mr-3"
              />
              <h4 className="text-lg sm:text-xl font-semibold text-[#0d3b66] sm:mr-10">
                Layanan Khusus Orang Tua dan Peserta Didik
              </h4>
              </div>

              <div className="bg-orange-100 text-orange-800 p-3 rounded-md mb-5 text-xs sm:text-sm font-medium">
                <strong>🔔 PERHATIAN!</strong> Beberapa permintaan layanan akan kami kirim melalui email.
Pastikan alamat email yang Anda masukkan benar. 
              </div>

              {/* Dropdown Peran */}
<div className="mb-4 px-8 flex items-start">
  {/* Icon di kiri */}
  <div className="pt-2 mr-3">
    <Image
      src="/images/layanan/peran.png"
      alt="role"
      width={55}
      height={55}
    />
  </div>

  {/* Label dan Dropdown di kanan */}
  <div className="flex-1">
    <label className="block font-semibold text-gray-800 text-sm sm:text-base mb-1">
      Pilih Jenis Peran
    </label>
    <select
      className="w-full text-sm sm:text-base border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-800 cursor-pointer"
      value={role}
      onChange={(e) => {
        setRole(e.target.value);
        setService("");
      }}
    >
      <option value="">-- Pilih Peran --</option>
      <option value="orangTua">Orang Tua</option>
      <option value="siswa">Peserta Didik</option>
    </select>
  </div>
</div>

{/* Dropdown Layanan */}
<div className="mb-6 px-8 flex items-start">
  {/* Icon di kiri */}
  <div className="pt-2 mr-3">
    <Image
      src="/images/layanan/layanan.png"
      alt="layanan"
      width={55}
      height={55}
    />
  </div>

  {/* Label dan Dropdown di kanan */}
  <div className="flex-1">
    <label className="block font-semibold text-gray-800 text-sm sm:text-base mb-1">
      Pilih Jenis Layanan
    </label>
    <select
      className="w-full text-sm sm:text-base border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 cursor-pointer"
      value={service}
      onChange={(e) => setService(e.target.value)}
      disabled={!role}
    >
      <option value="">-- Pilih Layanan --</option>
      {(role === "orangTua"
        ? parentServices
        : role === "siswa"
        ? studentServices
        : []
      ).map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  </div>
</div>
<div className="flex py-0 justify-center transform transition duration-200 ease-in-out hover:scale-105 active:scale-95">
              <button
                onClick={handleOpen}
                disabled={!service}
                className={`px-12 py-2 text-white rounded-full font-semibold ${
                  service ? "bg-blue-600 hover:cursor-pointer hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Akses
              </button>
              </div>
          </div>

          {/* Kolom Kanan */}
          
            <div className="border rounded-2xl shadow-sm p-6 bg-white">
              <div className="flex items-center mb-4">
              <Image
                src="/images/layanan/layanan-info.png"
                alt="Layanan dan Informasi Sekolah"
                width={50}
                height={50}
                className="mr-3"
              />
              <h4 className="text-lg sm:text-xl font-semibold text-[#0d3b66] sm:mr-10">
                Layanan Informasi dan Dokumentasi Publik
              </h4>
              </div>
<div className="bg-green-100 text-green-800 p-3 rounded-md mb-5 text-xs sm:text-sm font-medium">
                Ikuti saluran SD Negeri 2 Bokat di <strong>WhatsApp</strong> untuk mendapatkan informasi terbaru dengan cepat. <a
  href="https://whatsapp.com/channel/0029VawCdeKE50UqpzQOPE06"
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold hover:cursor-pointer hover:text-blue-600"
>
  Klik disini
</a> untuk membuka saluran.
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 text-center mt-8">
                {[
                  { label: "Profil Sekolah", url: "/tentang#pvmsekolah", icon: "fluent-color:building-government-search-32", text: "w-12 h-12 mb-2" },
                  { label: "Transparansi", url: "/page/maintenance", icon: "fluent-color:chart-multiple-32", text: "w-12 h-12 mb-2" },
                  { label: "Rapor Pendidikan", url: "/page/rapor_pendidikan", icon: "fluent-color:certificate-32", text: "w-12 h-12 mb-2" },
                  { label: "Kalender Kegiatan Sekolah", url: "/page/maintenance", icon: "fluent-color:calendar-edit-32", text: "w-12 h-12 mb-2" },
                  { label: "Kotak Saran dan Pengaduan", url: "/page/maintenance", icon: "fluent-color:drafts-16", text: "w-12 h-12 mb-2" },
                  { label: "Permohonan Informasi Publik", url: "/page/maintenance", icon: "fluent-color:library-32", text: "w-12 h-12 mb-2" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <Icon
                      icon={item.icon}
                      className={item.text}
                    />
                    <span className="text-sm sm:text-base font-semibold">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
        </div>

        {/* Render Modal */}
        {openModal && renderModal()}
      </div>
    </section>
  );
};

export default Layanan;
