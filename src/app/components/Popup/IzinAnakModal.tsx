"use client";

import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createClient } from "@supabase/supabase-js";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"; // pastikan sudah install pdf-lib

function LoadingComingMini() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-yellow-400 border-transparent animate-[spin_1.2s_linear_infinite_reverse]"></div>
      </div>
      <p className="mt-3 text-blue-700 font-medium text-sm animate-pulse text-center">
        Silakan tunggu...
      </p>
    </div>
  );
}

interface IzinAnakModalProps {
  onClose: () => void;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 🔹 Interface formData
interface FormDataType {
  kelas: string;
  namaAnak: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  alasan: string;
  pemohon: string;
  namaPemohon: string;
  whatsapp: string;
}

export default function IzinAnakModal({ onClose }: IzinAnakModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dataSiswa, setDataSiswa] = useState<any[]>([]);
  const [rombelList, setRombelList] = useState<string[]>([]);
  const [namaList, setNamaList] = useState<string[]>([]);
  const [orangTuaList, setOrangTuaList] = useState<string[]>([]);

  const [formData, setFormData] = useState<FormDataType>({
    kelas: "",
    namaAnak: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    alasan: "",
    pemohon: "",
    namaPemohon: "",
    whatsapp: "",
  });

  // 🔹 Kunci scroll di belakang popup
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 🔹 Ambil data siswa
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("db_siswa")
        .select("nama, rombel, nama_ayah, nama_ibu");
      if (!error && data) {
        setDataSiswa(data);
        setRombelList([...new Set(data.map((d) => d.rombel))]);
      }
    };
    fetchData();
  }, []);

  // 🔹 Update dropdown nama anak berdasarkan kelas
  useEffect(() => {
    if (formData.kelas) {
      const filtered = dataSiswa.filter((s) => s.rombel === formData.kelas);
      setNamaList(filtered.map((s) => s.nama));
    } else {
      setNamaList([]);
    }
  }, [formData.kelas, dataSiswa]);

  // 🔹 Update daftar nama orang tua berdasarkan anak terpilih
  useEffect(() => {
    const selected = dataSiswa.find((s) => s.nama === formData.namaAnak);
    if (selected) {
      const ortu = [selected.nama_ayah, selected.nama_ibu].filter(Boolean);
      setOrangTuaList(ortu);
    } else {
      setOrangTuaList([]);
    }
  }, [formData.namaAnak, dataSiswa]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidWA = (wa: string) => /^\d{10,}$/.test(wa);

  // 🔹 Fungsi buat PDF
  const generateIzinPDF = async (data: FormDataType) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;

    const lines = [`Perihal: Surat Permohonan Izin Anak`,
      `Tanggal, ${data.tanggalMulai} `,
      ``,
      ``,
      `Kepada Yth.`,
      `Bapak/Ibu Guru Wali ${data.kelas}`,
      'SD NEGERI 2 BOKAT/ SD PEMBINA KAB. BUOL',
      `di Tempat`,
      ``,
      ``,
      `Dengan hormat,`,
      `Melalui surat ini, saya ${data.namaPemohon} selaku ${data.pemohon} dari:`,
      ``,
      `Nama: ${data.namaAnak}`,
      `Siswa: ${data.kelas}`,
      ``,
      `Dengan ini memohon izin untuk anak kami tersebut belum bisa hadir ke sekolah untuk`, 
      `mengikuti pelajaran pada tanggal, ${data.tanggalMulai} s/d ${data.tanggalSelesai} dengan alasan:`,
      `${data.alasan}.`,
      ``,
      `Demikian surat izin ini kami buat dengan sebenarnya. Atas perhatian dan pengertiannya,`,
      `kami ucapkan terima kasih.`,
      ``,
      ``,
      `Hormat kami,`,
      `${data.pemohon} dari ${data.namaAnak}`,
      ``,
      `T T D`,
      ``,
      `${data.namaPemohon}`,
    ];

    let y = height - 50;
    lines.forEach((line) => {
      page.drawText(line, { x: 50, y, size: fontSize, font, color: rgb(0, 0, 0) });
      y -= 18;
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!isValidWA(formData.whatsapp)) {
    alert("Nomor WhatsApp tidak valid. Gunakan angka minimal 10 digit.");
    return;
  }

  setLoading(true);

  try {
    // 🔹 Buat PDF
    const pdfBytes = await generateIzinPDF(formData);
    const filename = `Surat_Izin-${formData.namaAnak}-${Date.now()}.pdf`;

    // 🔹 Upload PDF ke Supabase Storage (pakai Uint8Array)
    const uploadResponse = await supabase.storage
      .from("izin_anak")
      .upload(filename, pdfBytes, { contentType: "application/pdf" });

    if (uploadResponse.error) {
      throw uploadResponse.error;
    }

    // 🔹 Ambil URL publik
    const { data: publicData } = supabase.storage
      .from("izin_anak")
      .getPublicUrl(filename);

    const pdfUrl = publicData.publicUrl;

    // 🔹 Simpan data ke db_izin sekaligus PDF URL
    const { error: insertError } = await supabase.from("db_izin").insert([
      {
        nama_siswa: formData.namaAnak,
        kelas: formData.kelas,
        alasan: formData.alasan,
        tanggal_mulai: formData.tanggalMulai,
        tanggal_selesai: formData.tanggalSelesai,
        pemohon: formData.pemohon,
        nama_pemohon: formData.namaPemohon,
        nomor_hp: formData.whatsapp,
        pdf_url: pdfUrl, // <--- simpan URL PDF di sini
      },
    ]);

    if (insertError) {
      throw insertError;
    }

    // 🔹 Kirim WA
    const pesanWA =
     `*Permohonan Izin Anak*

Kpd Yth. Bpk/Ibu Guru Wali ${formData.kelas}.
Mohon maaf mengganggu waktunya. Saya *${formData.namaPemohon}*, ${formData.pemohon} dari *${formData.namaAnak}*, ${formData.kelas}.

Dengan ini menyampaikan permohonan izin bahwa anak kami belum bisa mengikuti pelajaran pada tanggal ${formData.tanggalMulai} s/d ${formData.tanggalSelesai}.
Dengan alasan: *${formData.alasan}*

Bersama ini kami lampirkan Link Surat Izin:
${pdfUrl}

Terima kasih

Hormat kami,
Pemohon: ${formData.pemohon} - ${formData.namaPemohon}
No. WhatsApp: ${formData.whatsapp}`;
    const linkWA = `https://wa.me/6281388181249?text=${encodeURIComponent(
      pesanWA
    )}`;
    window.open(linkWA, "_blank");

    // 🔹 Reset form
    setFormData({
      kelas: "",
      namaAnak: "",
      tanggalMulai: "",
      tanggalSelesai: "",
      alasan: "",
      pemohon: "",
      namaPemohon: "",
      whatsapp: "",
    });

    setSubmitted(true);
  } catch (err: any) {
    console.error(err);
    alert("Gagal membuat PDF atau menyimpan data: " + err.message);
  } finally {
    setLoading(false);
  }
};

  // 🔹 Tampilan loading
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center">
          <LoadingComingMini />
        </div>
      </div>
    );
  }

  // 🔹 Tampilan sukses
  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 text-center space-y-4 animate-fadeIn">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800">
            Permohonan izin berhasil dikirim!
          </h3>
          <p className="text-gray-600 text-sm">
            Terima kasih, permohonan izin Anda telah terkirim ke pihak sekolah.  
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    );
  }

  // 🔹 Form utama
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >

  {/* Body */}
  <div
  className="relative bg-[#FFFFFF] w-full h-screen sm:p-4 overflow-auto sm:overflow-hidden"
  style={{ borderRadius: 0 }}
        
  >

    {/* main content: two columns on large, stacked on small */}
        <div className="sm:h-full flex flex-col">
          <div className="h-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            {/* RIGHT */}
            
            <div className="bg-header sm:rounded-[18px] shadow-xl border-l 
            sm:border-l-0 pl-5 py-4 sm:pt-7 sm:pl-8 overflow-hidden relative select-none" onContextMenu={(e) => e.preventDefault()}>
          <div className="prose max-w-none">
      {/* Logo kiri atas */}
      <div className="flex">
        <img
          src="/images/logo/logo-white.svg"
          alt="Layanan SD Negeri 2 Bokat"
          className="h-6 sm:h-12"
          
        />
        <div className='block sm:hidden'>
          {/* Banner */}
          <img
            src="/images/layanan/img_login_mobi.png"
            alt="Banner Layanan"
            className="
              w-42
              absolute
              right-0 bottom-0
            "
          />
        </div> 
      </div>

      {/* Konten utama */}
      <div className="flex sm:pl-8">
        {/* Teks + Banner wrapper */}
        <div className="relative flex pt-4 sm:pt-10">
          {/* Teks H1 */}
          <h1 className="text-[22px] sm:text-[50px] text-shadow font-semibold text-white/90 leading-tight z-10">
            Selamat datang <br/>
            di <b className="text-[#FFD60A]">Layanan<br/>Orang Tua</b>
          </h1>
        </div>
        <div className='hidden sm:block'>
          {/* Banner */}
          <img
            src="/images/layanan/img_login.png"
            alt="Banner Layanan"
            className="
              w-full
              sm:self-start
              absolute
              right-0 bottom-0 
            "
          />
        </div> 
        </div>
        </div>
      </div>

      {/* LEFT: form and logic */}
      <div className="flex flex-col gap-3 p-4 sm:pb-8 sm:px-8">
  <div className="flex items-center mb-2 ml-[-18px]">
  <a
            onClick={onClose}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-transparent hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
        >
        <Icon
        icon="ion:chevron-back-outline"
        className="w-5 h-5 font-semibold text-blue-400"
         />
        <span className="text-sm font-semibold text-blue-400">
        Kembali
        </span>
          </a>
          </div>
          <div className="block sm:hidden flex items-center mb-4">
    <img
       src="/images/layanan/ortu-siswa.png"
       alt="Layanan Orang Tua dan Siswa"
       className="h-10 sm:h-12 mr-3 sm:mr-4"
     />
    <span className="text-[17px] sm:text-[20px] font-semibold text-black leading-tight italic">
      Permohonan Izin Anak
      <p className="bg-header border-blue-500 rounded-tl-xl rounded-br-xl px-3 py-[1.5px] text-center text-gray-100 
      text-[10px] md:text-[14px] font-semibold italic text-shadow">Sistem Layanan Online Khusus Orang Tua</p>
    </span>
  </div>

        {/* Body */}
        <form
          onSubmit={handleSubmit}
          className="p-4 space-y-4 w-full sm:max-h-[80vh] overflow-y-auto overflow-x-hidden"
        >
    <div className="hidden sm:block mb-8">
    <div className="flex items-center">
    <img
       src="/images/layanan/ortu-siswa.png"
       alt="Layanan Orang Tua dan Siswa"
       className="h-10 sm:h-12 mr-3 sm:mr-4"
     />
    <span className="text-[17px] sm:text-[20px] font-semibold text-black leading-tight italic">
      Permohonan Izin Anak
      <p className="bg-header border-blue-500 rounded-tl-xl rounded-br-xl px-3 py-[1.5px] text-center text-gray-100 
      text-[10px] md:text-[14px] font-semibold italic text-shadow">Sistem Layanan Online Khusus Orang Tua/ Wali</p>
    </span>
  </div>
  </div>
          <div>
            <label className="block text-sm sm:text-base mb-1">Kelas</label>
            <select
              name="kelas"
              value={formData.kelas}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
            >
              <option value="">-- Pilih Kelas --</option>
              {rombelList.map((rombel) => (
                <option key={rombel} value={rombel}>{rombel}</option>
              ))}
            </select>
          </div>

          {/* Nama anak */}
          <div>
            <label className="block text-sm sm:text-base mb-1">Nama Anak</label>
            <select
              name="namaAnak"
              value={formData.namaAnak}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
            >
              <option value="">-- Pilih Nama Anak --</option>
              {namaList.map((nama) => (
                <option key={nama} value={nama}>{nama}</option>
              ))}
            </select>
          </div>

          {/* Tanggal izin */}
          <div className="flex flex-cols gap-2">
              <label className="block text-sm sm:text-base mb-1">Mulai Izin
              <input
                type="date"
                name="tanggalMulai"
                value={formData.tanggalMulai}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
              />
            </label>
              <label className="block text-sm sm:text-base mb-1">Selesai Izin
              <input
                type="date"
                name="tanggalSelesai"
                value={formData.tanggalSelesai}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
              />
            </label>
          </div>

          {/* Keterangan */}
          <div>
            <label className="block text-sm sm:text-base mb-1">Keterangan Izin</label>
            <textarea
              name="alasan"
              rows={2}
              value={formData.alasan}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2"
            ></textarea>
          </div>

          {/* Pemohon */}
          <div>
            <label className="block text-sm sm:text-base mb-1">Pemohon</label>
            <select
              name="pemohon"
              value={formData.pemohon}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
            >
              <option value="">-- Pilih Pemohon --</option>
              <option value="Orang Tua">Orang Tua</option>
              <option value="Kaka Kandung">Kaka Kandung</option>
              <option value="Adik Kandung">Adik Kandung</option>
              <option value="Keluarga Lainnya">Keluarga Lainnya</option>
            </select>
          </div>

          {/* Nama Pemohon */}
          {formData.pemohon === "Orang Tua" ? (
            <div>
              <label className="block text-sm sm:text-base mb-1">Nama Orang Tua</label>
              <select
                name="namaPemohon"
                value={formData.namaPemohon}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
              >
                <option value="">-- Pilih Orang Tua --</option>
                {orangTuaList.map((ortu) => (
                  <option key={ortu} value={ortu}>{ortu}</option>
                ))}
              </select>
            </div>
          ) : (
            formData.pemohon && (
              <div>
                <label className="block text-sm sm:text-base mb-1">Nama Pemohon</label>
                <input
                  type="text"
                  name="namaPemohon"
                  value={formData.namaPemohon}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            )
          )}

          {/* Nomor WhatsApp */}
          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp Pemohon</label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="Contoh: 6281234567890"
              required
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Footer */}
          <div className="w-full flex items-center justify-center pt-2 mb-6">
            <button
              type="submit"
              className="w-auto px-20 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}
