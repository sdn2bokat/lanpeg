"use client";

import { useState } from "react";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import CallModalDynamicWave from "@/app/components/Popup/CallModalDynamicWave";

export default function SosialMedia() {
  const [isOpen, setIsOpen] = useState(false);
   const kontak = [
    { 
      label: "Pusat Panggilan 4020-2114", 
      icon: "mynaui:telephone-call-solid", 
      type: "call" // kita tandai agar tahu ini popup call
    },
    { 
      label: "sekolah@sdn2bokat.sch.id", 
      url: "mailto:sekolah@sdn2bokat.sch.id", 
      icon: "material-icon-theme:email", 
      target: "_blank",
      type: "email"
    },
  ];
  return (
    <section id='sosialmedia'>
      <div className="container">
        <div className="pb-1 border-b-2 border-gray-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-black">
              Alamat dan Kontak
            </h3>
            </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 items-start justify-between mt-4">
  {/* Kolom 1: Logo, Nama Sekolah, dan Alamat */}
  <div className="flex flex-col justify-start">
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo/kemdikbudristek.png"
        alt="Logo Kemdikbudristek"
        width={34}
        height={34}
        className="object-contain"
      />
      <p className="text-base sm:text-xl font-semibold leading-tight">
        SD NEGERI 2 BOKAT / SD PEMBINA KAB. BUOL
      </p>
    </div>

    <div className="mt-4 text-xs sm:text-sm text-gray-600 leading-normal">
      <p>
        Jl. Trans Sulawesi RT/RW: 001/001, Kecamatan Bokat, Kabupaten Buol, Provinsi Sulawesi Tengah, 94566, Indonesia.
      <br />
       Jarak <strong>13.7 km</strong> ke Dinas Pendidikan dan Kebudayaan Kabupaten Buol.
      </p>
    </div>

    <div className="mt-6">
      {kontak.map((item, idx) => {
        if (item.type === "call") {
          // Klik ini membuka popup CallModalDynamicWave
          return (
            <div
              key={idx}
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 mr-3 text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95 cursor-pointer mb-2"
            >
              <Icon icon={item.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm">{item.label}</span>
            </div>
          );
        } else {
          // Item lain tetap jadi link biasa
          return (
            <Link
              key={idx}
              href={item.url!}
              target={item.target}
              rel="noopener noreferrer"
              className="flex items-center gap-2 mr-3 text-gray-700 hover:text-blue-600 mb-6"
            >
              <Icon icon={item.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm">{item.label}</span>
            </Link>
            
          );
        }
      })}
      {/* Modal panggilan */}
      <CallModalDynamicWave isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
    <div className="mt-2">
                {[
                  { 
      label: "SD NEGERI 2 BOKAT/ SD PEMBINA KAB. BUOL", 
      url: "https://whatsapp.com/channel/0029VawCdeKE50UqpzQOPE06", 
      icon: "logos:whatsapp-icon", 
      target: "_blank",
      type: "wa"
    },
    { 
      label: "SD NEGERI 2 BOKAT/ SD PEMBINA KAB. BUOL", 
      url: "https://www.tiktok.com/@sdn2bokat", 
      icon: "logos:tiktok-icon", 
      target: "_blank",
      type: "tiktok"
    },
    { 
      label: "Sdndua Bokat", 
      url: "https://facebook.com/sdnduabokat", 
      icon: "logos:facebook", 
      target: "_blank",
      type: "fb"
    },
    { 
      label: "SD NEGERI 2 BOKAT/ SD PEMBINA KAB. BUOL", 
      url: "https://www.youtube.com/@sdn2bokat", 
      icon: "logos:youtube-icon", 
      target: "_blank",
      type: "yt"
    },
    ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    target={item.target}
              rel="noopener noreferrer"
              className="flex items-center gap-2 mr-3 text-gray-700 hover:text-blue-600"
            >
                    <Icon
                      icon={item.icon}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <span className="text-xs sm:text-sm leading-loose leading-[20px]">{item.label}</span>
                  </Link>
                ))}
              </div>
    </div>

  {/* Kolom 2: Peta */}
  <div className="w-full h-full flex justify-start">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.6736227305017!2d121.50275436948084!3d1.0894334999312696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3270ad8c33d4851f%3A0xc18c0fa25fdfe189!2sSD%20NEGERI%202%20BOKAT!5e1!3m2!1sid!2sid!4v1760255231785!5m2!1sid!2sid"
      width="100%"
      
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
      </div>
    </section>
  );
}
