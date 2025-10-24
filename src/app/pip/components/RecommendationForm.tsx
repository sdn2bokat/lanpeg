"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { CheckCircle, Loader2 } from "lucide-react";
import { angkaKeTerbilang, formatTanggal, formatTanggalSurat, formatTanggalSuratKeluar, bulanRomawi } from "./utils";

interface RecommendationFormProps {
  student: any;
  onBack: () => void;
}

export default function RecommendationForm({ student, onBack }: RecommendationFormProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [form, setForm] = useState({
    nik: student.nik,
    ibu: student.ibu,
    ayah: student.ayah,
    prov: "",
    kabkot: "",
    kec: "",
    keldes: "",
  });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [urlPDF, setUrlPDF] = useState("");

  // Tambahkan state baru di component
const [editable, setEditable] = useState({
  nik: false,
  ibu: false,
  ayah: false,
});

  // --- Bagian definisi interface dan state wilayah ---
interface Region {
  id: string;
  name: string;
}

const [provinces, setProvinces] = useState<Region[]>([]);
const [kabkots, setKabkots] = useState<Region[]>([]);
const [kecs, setKecs] = useState<Region[]>([]);
const [keldes, setKeldes] = useState<Region[]>([]);

function capitalize(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// --- Load Provinsi ---
useEffect(() => {
  fetch("https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json")
    .then((res) => res.json())
    .then((data: any[]) => {
      setProvinces(data.map((p) => ({ id: p.id, name: capitalize(p.name) })));
    })
    .catch(console.error);
}, []);

// --- Load Kab/Kota berdasarkan Provinsi (by province_id) ---
useEffect(() => {
  if (!form.prov) {
    setKabkots([]);
    return;
  }
  fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${form.prov}.json`)
    .then((res) => res.json())
    .then((data: any[]) => {
      setKabkots(data.map((r) => ({ id: r.id, name: capitalize(r.name) })));
    })
    .catch(console.error);
}, [form.prov]);

// --- Load Kecamatan berdasarkan Kab/Kota (by regency_id) ---
useEffect(() => {
  if (!form.kabkot) {
    setKecs([]);
    return;
  }
  fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/districts/${form.kabkot}.json`)
    .then((res) => res.json())
    .then((data: any[]) => {
      setKecs(data.map((d) => ({ id: d.id, name: capitalize(d.name) })));
    })
    .catch(console.error);
}, [form.kabkot]);

// --- Load Kelurahan/Desa berdasarkan Kecamatan (by district_id) ---
useEffect(() => {
  if (!form.kec) {
    setKeldes([]);
    return;
  }
  fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/villages/${form.kec}.json`)
    .then((res) => res.json())
    .then((data: any[]) => {
      setKeldes(data.map((v) => ({ id: v.id, name: capitalize(v.name) })));
    })
    .catch(console.error);
}, [form.kec]);


  // --- Step 1: Simpan data ke rekom_pip ---
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.nik === student.nik) {
      alert("⚠️ NIK masih sama dengan data dummy. Silakan ubah melalui tombol Edit sebelum menyimpan.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 5000)); // Loading 5 detik

    try {
      const { data: existing } = await supabase
        .from("rekom_pip")
        .select("nik")
        .eq("nik", form.nik)
        .single();

      if (existing) {
        alert("⚠️ NIK sudah ada di tabel rekom_pip, periksa kembali data!");
        setLoading(false);
        return;
      }

      const { error } = await supabase.from("rekom_pip").insert({
        nama: student.nama,
        nisn: student.nisn,
        nik: form.nik,
        tempat_lhr: student.tempat_lhr,
        tgl_lhr: student.tgl_lhr,
        kelas: student.kelas,
        smst: student.smst,
        ibu: form.ibu,
        ayah: form.ayah,
        keldes: form.keldes,
        kec: form.kec,
        kabkot: form.kabkot,
        prov: form.prov,
        rekening: student.rekening,
        nominal: student.nominal,
        terbilang: angkaKeTerbilang(student.nominal),
        acc: student.acc,
        tahap: student.tahap,
        ta: student.tahun,
        no_sk: student.no_sk,
        tgl_sk: formatTanggal(student.tgl_sk),
        tgl_surat: formatTanggalSurat(student.created_at),
      });

      if (error) throw error;
      setStep(2);
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data rekomendasi!");
    } finally {
      setLoading(false);
    }
  };

  // --- Step 2: Ajukan Pengesahan Surat ---
  const handleAjukan = async () => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 20000)); // Loading 20 detik

      // Ambil nomor terakhir dari db_agenda_surat
      const { data: lastRow } = await supabase
        .from("db_agenda_surat")
        .select("no, no_agenda")
        .order("no", { ascending: false })
        .limit(1)
        .single();

      const nextNo = lastRow ? lastRow.no + 1 : 1;
      const nextAgenda = lastRow ? lastRow.no_agenda + 1 : 1;

      const now = new Date();
      const tglSurat = formatTanggalSuratKeluar(now);

      // Insert ke db_agenda_surat
      await supabase.from("db_agenda_surat").insert({
        no: nextNo,
        tgl_surat_keluar: tglSurat,
        kls_no_surat: "400.3.5.6",
        no_agenda: nextAgenda,
        naskah: "SR",
        instansi: "SDN2BOKAT",
        bln: bulanRomawi(now.getMonth() + 1),
        thn: now.getFullYear(),
        perihal: "Surat Rekomendasi PIP",
        tujuan: student.nama,
        tt_de: "TTE",
        no_surat: `400.3.5.6/${nextAgenda}/SR-SDN2BOKAT/${bulanRomawi(now.getMonth() + 1)}/${now.getFullYear()}`,
      });

      setStep(3);
    } catch (err) {
      console.error(err);
      alert("Gagal mengajukan pengesahan surat!");
    } finally {
      setLoading(false);
    }
  };

  // --- Step 3: Akhiri Proses & Generate Surat ---
  const handleAkhiri = async () => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 10000)); // Loading 10 detik

      // Ambil data dari rekom_pip
      const { data: rekom } = await supabase
        .from("rekom_pip")
        .select("*")
        .eq("nik", form.nik)
        .single();

      if (!rekom) throw new Error("Data rekom_pip tidak ditemukan");

      // Simulasi generate file Word & PDF di storage
      const fileName = `${rekom.nama.replace(/\s+/g, "_")}.pdf`;
      const fileUrl = `https://storage.supabase.co/temp_rekom_pip/${fileName}`;
      setUrlPDF(fileUrl);

      setStep(4);
    } catch (err) {
      console.error(err);
      alert("Gagal membuat surat rekomendasi!");
    } finally {
      setLoading(false);
    }
  };

  // --- Step 4: Cetak Sendiri / Dicetak Sekolah ---
  const handleCetak = (tipe: "sendiri" | "sekolah") => {
    const pesan =
      tipe === "sendiri"
        ? `Yth, Bpk Kepsek SD Negeri 2 Bokat. Saya orang tua dari ${student.nama}. Terima kasih atas layanan online pembuatan Surat Rekomendasi PIP. Saya telah memilih metode *Cetak Sendiri*, dan sebagai arsip sekolah berikut ini tautan surat rekomendasi anak kami ${urlPDF}.`
        : `Assalamu’alaikum, Yth. Bapak/Ibu di SD Negeri 2 Bokat. Saya orang tua dari ${student.nama}. Terima kasih atas layanan online pembuatan Surat Rekomendasi PIP. Saya telah memilih metode Dicetak oleh Sekolah. Berikut tautan file rekomendasi anak kami: 📎 ${urlPDF}. Mohon bantuannya untuk dicetak.`;

    window.open(`https://wa.me/6281388181249?text=${encodeURIComponent(pesan)}`, "_blank");
    setPopup(true);
  };

  if (popup) {
    return (
      <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
        <CheckCircle className="text-green-500 w-10 h-10 mx-auto mb-3" />
        <p className="text-sm sm:text-base font-semibold">
          Permohonan Rekomendasi PIP Selesai. Terima kasih sudah menggunakan layanan ini.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 bg-green-600 text-white rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-green-700"
        >
          OK
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow-sm">
      {step === 1 && (
  <form onSubmit={handleSubmitForm}>
    <h3 className="text-sm sm:text-base font-bold mb-2">Formulir Permohonan Rekomendasi PIP</h3>
    <p className="text-xs sm:text-sm mb-4">
      Periksa kembali data Anda. Jika tidak sesuai dengan Kartu Keluarga, klik <b>Edit</b> untuk memperbarui.
    </p>

    {/* Form Data */}
    {["nama", "nik", "ibu", "ayah"].map((key) => (
      <div key={key} className="mb-3">
        <label className="text-xs sm:text-sm font-semibold capitalize">
          {key === "nik"
            ? "NIK Anak"
            : key === "ibu"
            ? "Nama Ibu"
            : key === "ayah"
            ? "Nama Ayah"
            : "Nama Anak"}
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={form[key as keyof typeof form] || student[key]}
            readOnly={key === "nama" ? true : !editable[key as keyof typeof editable]} // Nama Anak selalu readonly
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className={`w-full border rounded-lg p-2 text-xs sm:text-sm ${
              key === "nama" || !editable[key as keyof typeof editable] ? "bg-gray-100" : "bg-white"
            }`}
          />
          {key !== "nama" && (
            <button
              type="button"
              className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-green-700 hover:underline cursor-pointer"
              onClick={() =>
                setEditable({
                  ...editable,
                  [key]: !editable[key as keyof typeof editable], // toggle
                })
              }
            >
              {editable[key as keyof typeof editable] ? "Simpan" : "Edit"}
            </button>
          )}
        </div>
      </div>
    ))}
          {/* Alamat */}
      <div className="mb-3">
  <label className="text-xs sm:text-sm font-semibold">Alamat (Wilayah Administratif)</label>
  <div className="grid grid-cols-2 gap-2">
    {/* Provinsi */}
    <select
      value={form.prov}
      onChange={(e) =>
        setForm({ ...form, prov: e.target.value, kabkot: "", kec: "", keldes: "" })
      }
      className="border rounded-lg p-2 text-xs sm:text-sm"
    >
      <option value="">Pilih Provinsi</option>
      {provinces.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </select>

    {/* Kab/Kota */}
    <select
      value={form.kabkot}
      onChange={(e) =>
        setForm({ ...form, kabkot: e.target.value, kec: "", keldes: "" })
      }
      disabled={!form.prov}
      className="border rounded-lg p-2 text-xs sm:text-sm"
    >
      <option value="">Pilih Kab/Kota</option>
      {kabkots.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </select>

    {/* Kecamatan */}
    <select
      value={form.kec}
      onChange={(e) => setForm({ ...form, kec: e.target.value, keldes: "" })}
      disabled={!form.kabkot}
      className="border rounded-lg p-2 text-xs sm:text-sm"
    >
      <option value="">Pilih Kecamatan</option>
      {kecs.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </select>

    {/* Kelurahan/Desa */}
    <select
      value={form.keldes}
      onChange={(e) => setForm({ ...form, keldes: e.target.value })}
      disabled={!form.kec}
      className="border rounded-lg p-2 text-xs sm:text-sm"
    >
      <option value="">Pilih Kelurahan/Desa</option>
      {keldes.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </select>
  </div>
</div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-blue-700"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin inline-block" /> : "Simpan"}
          </button>
        </form>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-sm sm:text-base font-bold mb-2">Pengesahan Surat Rekomendasi</h3>
          <p className="text-xs sm:text-sm font-semibold mb-4">
            Surat Rekomendasi Pencairan Bansos PIP milik {student.nama} berhasil dibuat.
            Selanjutnya lakukan permohonan pengesahan surat dengan menekan tombol di bawah ini:
          </p>
          <button
            onClick={handleAjukan}
            disabled={loading}
            className="bg-green-600 text-white rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-green-700"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin inline-block" /> : "Ajukan Pengesahan Surat"}
          </button>
          <p className="text-xs italic font-semibold mt-2">
            Proses ini membutuhkan waktu paling lambat 1 menit, harap untuk tidak menutup halaman ini sampai muncul tombol "Akhiri Proses".
          </p>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-sm sm:text-base font-bold mb-2">Pengesahan Surat Rekomendasi</h3>
          <p className="text-xs sm:text-sm font-semibold mb-3">
            Proses pengesahan sedang berjalan. Silakan klik tombol berikut untuk mengakhiri proses:
          </p>
          <button
            onClick={handleAkhiri}
            disabled={loading}
            className="bg-blue-600 text-white rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-blue-700"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin inline-block" /> : "Akhiri Proses"}
          </button>
          <p className="text-xs italic font-semibold mt-2">
            Proses ini membutuhkan waktu paling lambat 30 detik, harap untuk tidak menutup halaman ini sampai muncul tombol "Unduh Surat / Cetak Surat".
          </p>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="text-sm sm:text-base font-bold mb-2">Pengesahan Surat Rekomendasi</h3>
          <p className="text-xs sm:text-sm font-semibold mb-3">
            Permohonan Surat Rekomendasi PIP telah selesai. Pilih metode pencetakan:
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => handleCetak("sendiri")}
              className="bg-blue-600 text-white rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-blue-700"
            >
              Cetak Sendiri
            </button>
            <button
              onClick={() => handleCetak("sekolah")}
              className="bg-gray-700 text-white rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-gray-800"
            >
              Dicetak Sekolah
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
