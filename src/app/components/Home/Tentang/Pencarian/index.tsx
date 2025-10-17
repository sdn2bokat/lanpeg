"use client";
import { useState } from "react";

const dataList = [
  { id: "tentang", label: "Tentang Sekolah" },
  { id: "pvmsekolah", label: "Profil dan Visi Misi Sekolah" },
  { id: "dgtk", label: "Data Guru dan Tendik" },
  { id: "rekapsiswa", label: "Data Peserta Didik" },
  { id: "rombel", label: "Rombongan Belajar" },
  { id: "prasarana", label: "Data Prasarana Sekolah" },
  { id: "saranadll", label: "Data Sarana Sekolah" },
  { id: "saranadll", label: "Ekstrakurikuler" },
  { id: "saranadll", label: "Akreditas Sekolah" },
  { id: "saranadll", label: "Data Kepanitiaan Sekolah" },
  { id: "saranadll", label: "Data Komite Sekolah" },
];
  
export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<{ id: string; label: string }[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");

  // Update suggestions saat pengguna mengetik
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      const filtered = dataList.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Klik tombol Cari → scroll ke bagian ID
  const handleSearch = () => {
  const targetId =
    selectedId ||
    dataList.find((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    )?.id;

  if (targetId) {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 130; // tinggi header + search bar, bisa kamu sesuaikan (misal 120–140)
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - offset, behavior: "smooth" });
    }
  }
};

  return (
  <div className="relative w-full mb-1">
    <div className="max-w-xl sm:max-w-[720px] mx-auto p-4">
      {/* Input dan tombol cari */}
      <div className="relative">
      <div className="flex items-center bg-white shadow border border-gray-300 overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Cari data sekolah..."
          className="flex-grow px-4 py-2 text-sm sm:text-base focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="transition duration-250 bg-[#FFD60A] hover:bg-header hover:cursor-pointer hover:text-[#FFD60A] px-2 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold"
        >
          Cari
        </button>
      </div>

      {/* Daftar saran */}
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 mt-1 shadow-md w-full max-h-56 overflow-y-auto">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setQuery(item.label);
                setSelectedId(item.id);
                setSuggestions([]);
              }}
              className="text-black/60 px-4 py-1 text-sm sm:text-base hover:bg-green-100 hover:text-black/80 hover:text-semibold cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
      </div>
      </div>
    
  </div>
  );
}
