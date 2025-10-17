"use client";

import { useState } from "react";

const DataPD = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <section className='scroll-mt-[130px]' id='rekapsiswa'>
      <div className='container'>
        <h1 className="text-midnight_text text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4">
        Rekap Data Peserta Didik
            </h1>
        <p className="text-black/70 text-sm text-justify leading-relaxed py-2">
        <strong>Tanggal sunting:</strong> 2025-10-11 02:02:56<br />
        <strong>Penyunting:</strong> Umar A. Piantae, S.IP (Penata Layanan Operasional)
        </p>
      {/* === Tabel Kelamin === */}
      <p className="text-black/70 text-sm text-justify leading-relaxed py-2">
        <strong>1. Jumlah Peserta Didik Berdasarkan Jenis Kelamin</strong>
        </p>
      <div className="overflow-x-auto shadow">
      <table className="min-w-full text-sm border border-gray-200">
      <thead className="bg-green-100 text-green-800 text-center font-semibold">
        <tr>
          <th className="px-2 py-2 border">Laki - laki</th>
          <th className="px-2 py-2 border">Perempuan</th>
          <th className="px-2 py-2 border">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">84</td>
          <td className="px-2 py-1 border text-center">76</td>
          <td className="px-2 py-1 border text-center">160</td>
        </tr>
      </tbody>
      </table>
      </div>
      {/* === Tabel Usia === */}
      <p className="text-black/70 text-sm text-justify leading-relaxed pt-6 pb-2">
        <strong>2. Jumlah Peserta Didik Berdasarkan Usia</strong>
        </p>
      <div className="overflow-x-auto shadow">
      <table className="min-w-full text-sm border border-gray-200">
      <thead className="bg-green-100 text-green-800 text-center font-semibold">
        <tr>
          <th className="px-2 py-2 border">No.</th>
          <th className="px-2 py-2 border">Usia</th>
          <th className="px-2 py-2 border">Laki - laki</th>
          <th className="px-2 py-2 border">Perempuan</th>
          <th className="px-2 py-2 border">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">1.</td>
          <td className="px-2 py-1 border">Kurang 6 tahun</td>
          <td className="px-2 py-1 border text-center">2</td>
          <td className="px-2 py-1 border text-center">3</td>
          <td className="px-2 py-1 border text-center font-bold">5</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">2.</td>
          <td className="px-2 py-1 border">6 - 12 tahun</td>
          <td className="px-2 py-1 border text-center">81</td>
          <td className="px-2 py-1 border text-center">33</td>
          <td className="px-2 py-1 border text-center font-bold">154</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">3.</td>
          <td className="px-2 py-1 border">13 - 15 tahun</td>
          <td className="px-2 py-1 border text-center">1</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center font-bold">1</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">4.</td>
          <td className="px-2 py-1 border">16 - 20 tahun</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center font-bold">0</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">5.</td>
          <td className="px-2 py-1 border">20 tahun ke atas</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center font-bold">0</td>
        </tr>
        <tr className="bg-white font-bold hover:bg-green-50">
          <td className="px-2 py-1 text-center"></td>
          <td className="pr-2 py-1 text-center">Jumlah Total</td>
          <td className="px-2 py-1 border text-center">84</td>
          <td className="px-2 py-1 border text-center">76</td>
          <td className="px-2 py-1 border text-center">160</td>
        </tr>
      </tbody>
      </table>
      </div>
      {/* === Tabel Agama === */}
      <p className="text-black/70 text-sm text-justify leading-relaxed pt-6 pb-2">
        <strong>3. Jumlah Peserta Didik Berdasarkan Agama</strong>
        </p>
      <div className="overflow-x-auto shadow">
      <table className="min-w-full text-sm border border-gray-200">
      <thead className="bg-green-100 text-green-800 text-center font-semibold">
        <tr>
          <th className="px-2 py-2 border">No.</th>
          <th className="px-2 py-2 border">Agama</th>
          <th className="px-2 py-2 border">Laki - laki</th>
          <th className="px-2 py-2 border">Perempuan</th>
          <th className="px-2 py-2 border">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">1.</td>
          <td className="px-2 py-1 border">Islam</td>
          <td className="px-2 py-1 border text-center">78</td>
          <td className="px-2 py-1 border text-center">74</td>
          <td className="px-2 py-1 border text-center font-bold">152</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">2.</td>
          <td className="px-2 py-1 border">Kristen</td>
          <td className="px-2 py-1 border text-center">4</td>
          <td className="px-2 py-1 border text-center">1</td>
          <td className="px-2 py-1 border text-center font-bold">5</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">3.</td>
          <td className="px-2 py-1 border">Katholik</td>
          <td className="px-2 py-1 border text-center">1</td>
          <td className="px-2 py-1 border text-center">1</td>
          <td className="px-2 py-1 border text-center font-bold">2</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">4.</td>
          <td className="px-2 py-1 border">Hindu</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center font-bold">0</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">5.</td>
          <td className="px-2 py-1 border">Budha</td>
          <td className="px-2 py-1 border text-center">1</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center font-bold">1</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">6.</td>
          <td className="px-2 py-1 border">Konghucu</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center font-bold">0</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">7.</td>
          <td className="px-2 py-1 border">Lainnya</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center font-bold">0</td>
        </tr>
        <tr className="bg-white font-bold hover:bg-green-50">
          <td className="px-2 py-1 text-center"></td>
          <td className="pr-2 py-1 text-center">Jumlah Total</td>
          <td className="px-2 py-1 border text-center">84</td>
          <td className="px-2 py-1 border text-center">76</td>
          <td className="px-2 py-1 border text-center">160</td>
        </tr>
      </tbody>
      </table>
      </div>
      {/* === Tabel Penghasilan === */}
      <p className="text-black/70 text-sm text-justify leading-relaxed pt-6 pb-2">
        <strong>4. Jumlah Peserta Didik Berdasarkan Penghasilan Orang Tua/Wali</strong>
        </p>
      <div className="overflow-x-auto shadow">
      <table className="min-w-full text-sm border border-gray-200">
      <thead className="bg-green-100 text-green-800 text-center font-semibold">
        <tr>
          <th className="px-2 py-2 border">No.</th>
          <th className="px-2 py-2 border">Penghasilan</th>
          <th className="px-2 py-2 border">Laki - laki</th>
          <th className="px-2 py-2 border">Perempuan</th>
          <th className="px-2 py-2 border">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">1.</td>
          <td className="px-2 py-1 border">Tidak berpenghasilan</td>
          <td className="px-2 py-1 border text-center">1</td>
          <td className="px-2 py-1 border text-center">3</td>
          <td className="px-2 py-1 border text-center font-bold">4</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">2.</td>
          <td className="px-2 py-1 border">Kurang dari Rp. 500,000</td>
          <td className="px-2 py-1 border text-center">33</td>
          <td className="px-2 py-1 border text-center">29</td>
          <td className="px-2 py-1 border text-center font-bold">62</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">3.</td>
          <td className="px-2 py-1 border">Rp. 500,000 - Rp. 999,999</td>
          <td className="px-2 py-1 border text-center">24</td>
          <td className="px-2 py-1 border text-center">29</td>
          <td className="px-2 py-1 border text-center font-bold">53</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">4.</td>
          <td className="px-2 py-1 border">Rp. 1,000,000 - Rp. 1,999,999</td>
          <td className="px-2 py-1 border text-center">7</td>
          <td className="px-2 py-1 border text-center">3</td>
          <td className="px-2 py-1 border text-center font-bold">10</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">5.</td>
          <td className="px-2 py-1 border">Rp. 2,000,000 - Rp. 4,999,999</td>
          <td className="px-2 py-1 border text-center">17</td>
          <td className="px-2 py-1 border text-center">11</td>
          <td className="px-2 py-1 border text-center font-bold">28</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">6.</td>
          <td className="px-2 py-1 border">Rp. 5,000,000 - Rp. 20,000,000</td>
          <td className="px-2 py-1 border text-center">2</td>
          <td className="px-2 py-1 border text-center">1</td>
          <td className="px-2 py-1 border text-center font-bold">3</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">7.</td>
          <td className="px-2 py-1 border">Lebih dari Rp. 20,000,000</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center">0</td>
          <td className="px-2 py-1 border text-center font-bold">0</td>
        </tr>
        <tr className="bg-white font-bold hover:bg-green-50">
          <td className="px-2 py-1 text-center"></td>
          <td className="pr-2 py-1 text-center">Jumlah Total</td>
          <td className="px-2 py-1 border text-center">84</td>
          <td className="px-2 py-1 border text-center">76</td>
          <td className="px-2 py-1 border text-center">160</td>
        </tr>
      </tbody>
      </table>
      </div>
      {/* === Tabel Tingkatatan === */}
      <p className="text-black/70 text-sm text-justify leading-relaxed pt-6 pb-2">
        <strong>5. Jumlah Siswa Berdasarkan Tingkat Pendidikan</strong>
        </p>
      <div className="overflow-x-auto shadow">
      <table className="min-w-full text-sm border border-gray-200">
      <thead className="bg-green-100 text-green-800 text-center font-semibold">
        <tr>
          <th className="px-2 py-2 border">No.</th>
          <th className="px-2 py-2 border">Tingkat Pendidikan</th>
          <th className="px-2 py-2 border">Laki - laki</th>
          <th className="px-2 py-2 border">Perempuan</th>
          <th className="px-2 py-2 border">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">1.</td>
          <td className="px-2 py-1 border">Tingkat 1</td>
          <td className="px-2 py-1 border text-center">12</td>
          <td className="px-2 py-1 border text-center">16</td>
          <td className="px-2 py-1 border text-center font-bold">28</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">2.</td>
          <td className="px-2 py-1 border">Tingkat 2</td>
          <td className="px-2 py-1 border text-center">14</td>
          <td className="px-2 py-1 border text-center">12</td>
          <td className="px-2 py-1 border text-center font-bold">26</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">3.</td>
          <td className="px-2 py-1 border">Tingkat 3</td>
          <td className="px-2 py-1 border text-center">11</td>
          <td className="px-2 py-1 border text-center">14</td>
          <td className="px-2 py-1 border text-center font-bold">25</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">4.</td>
          <td className="px-2 py-1 border">Tingkat 4</td>
          <td className="px-2 py-1 border text-center">22</td>
          <td className="px-2 py-1 border text-center">13</td>
          <td className="px-2 py-1 border text-center font-bold">35</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">5.</td>
          <td className="px-2 py-1 border">Tingkat 5</td>
          <td className="px-2 py-1 border text-center">10</td>
          <td className="px-2 py-1 border text-center">9</td>
          <td className="px-2 py-1 border text-center font-bold">19</td>
        </tr>
        <tr className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">6.</td>
          <td className="px-2 py-1 border">Tingkat 6</td>
          <td className="px-2 py-1 border text-center">15</td>
          <td className="px-2 py-1 border text-center">12</td>
          <td className="px-2 py-1 border text-center font-bold">27</td>
        </tr>
        <tr className="bg-white font-bold hover:bg-green-50">
          <td className="px-2 py-1 text-center"></td>
          <td className="pr-2 py-1 text-center">Jumlah Total</td>
          <td className="px-2 py-1 border text-center">84</td>
          <td className="px-2 py-1 border text-center">76</td>
          <td className="px-2 py-1 border text-center">160</td>
        </tr>
      </tbody>
      </table>
      </div>
      <p className="text-black/70 text-justify text-xs sm:text-sm pt-3">
        <strong>Sumber:</strong> Data Pokok Pendidikan (Dapodik).
        </p>
      {/* Footer */}
      <footer className="relative w-full mt-8 opacity-70">
      <div className="border-t border-green-500 w-full"></div>
      <div className="flex justify-between items-center text-[8px] sm:text-xs text-green-700 mt-0">
        <p>Profil SD Negeri 2 Bokat / SD Pembina Kab. Buol</p>
        <div className="relative">
          <span className="border-l border-b border-green-500 bg-green-100 rounded-bl-full pl-4 pr-2 py-0.5 inline-block">
            Sheet 3
          </span>
        </div>
      </div>
    </footer>        
    </div>
    </section>
  )
}

export default DataPD
