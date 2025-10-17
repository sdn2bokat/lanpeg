"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ModalMap() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      {/* Tombol pemanggil modal */}
      <button
        onClick={openModal}
        className="bg-midnight_text hover:bg-blue-400 hover:cursor-pointer text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
      >
        Lihat Sekolah di Peta Maps
      </button>

      {/* Overlay Modal */}
      {isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-[90%] max-w-4xl rounded-2xl shadow-lg overflow-hidden animate-fadeIn">
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
                                    Peta Geografis Sekolah
                                  </h4>
                                </div>
          <button
            onClick={closeModal}
            className="hover:cursor-pointer hover:bg-blue-700 p-1 rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Iframe Google Maps */}
            <div className="p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.6736227305017!2d121.50275436948084!3d1.0894334999312696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3270ad8c33d4851f%3A0xc18c0fa25fdfe189!2sSD%20NEGERI%202%20BOKAT!5e1!3m2!1sid!2sid!4v1760255231785!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
          </div>
          </div>
       )}
    </>
  );
}
