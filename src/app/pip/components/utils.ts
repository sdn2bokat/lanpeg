// app/pip/components/utils.ts
// utility functions untuk RecommendationForm dan komponen lain

// format tanggal pendek: "DD/MM/YYYY"
export function formatTanggal(dateInput?: string | Date | null): string {
  if (!dateInput) return "-";
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return "-";
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

// format tanggal surat: "DD MMMM YYYY" (Indonesia)
export function formatTanggalSurat(dateInput?: string | Date | null): string {
  if (!dateInput) return "-";
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// format tanggal surat keluar: "DD-MM-YYYY"
export function formatTanggalSuratKeluar(dateInput?: string | Date | null): string {
  if (!dateInput) return "-";
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return "-";
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

// konversi angka bulan ke romawi (1-12)
export function bulanRomawi(bulan: number): string {
  const romawi = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];
  return romawi[bulan - 1] || "";
}

// terbilang (tanpa kata "Rupiah"), mis: 450000 -> "empat ratus lima puluh ribu"
function _terbilang(angka: number): string {
  const satuan = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
  ];

  angka = Math.floor(angka);
  if (angka < 12) return satuan[angka];
  if (angka < 20) return _terbilang(angka - 10) + " belas";
  if (angka < 100)
    return (_terbilang(Math.floor(angka / 10)) + " puluh " + _terbilang(angka % 10)).trim();
  if (angka < 200) return "seratus " + _terbilang(angka - 100);
  if (angka < 1000)
    return (_terbilang(Math.floor(angka / 100)) + " ratus " + _terbilang(angka % 100)).trim();
  if (angka < 2000) return "seribu " + _terbilang(angka - 1000);
  if (angka < 1000000)
    return (_terbilang(Math.floor(angka / 1000)) + " ribu " + _terbilang(angka % 1000)).trim();
  if (angka < 1000000000)
    return (_terbilang(Math.floor(angka / 1000000)) + " juta " + _terbilang(angka % 1000000)).trim();
  return "terlalu besar";
}

// angkaKeTerbilang: mengekspor terbilang tanpa kata "Rupiah"
export function angkaKeTerbilang(angka: number | string | null | undefined): string {
  if (angka == null || angka === "") return "-";
  const num = typeof angka === "string" ? parseInt(angka.replace(/[^0-9]/g, ""), 10) : Math.floor(Number(angka));
  if (isNaN(num)) return "-";
  const teks = _terbilang(num);
  // kapitalisasi awal kalimat
  return teks.charAt(0).toUpperCase() + teks.slice(1);
}

// toRupiahWords (jika butuh bentuk "XXX Rupiah", kompatibel dengan versi sebelumnya)
export function toRupiahWords(amount: number | string | null | undefined): string {
  const t = angkaKeTerbilang(amount);
  if (t === "-" ) return "-";
  return `${t} rupiah`.replace(/\s+/g, " ").trim();
}
