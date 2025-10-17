"use client";

const Rombel = () => {
    const data = [
    { no: 1, rombel: "Kelas 1", tingkat: 1, L: 12, P: 16, total: 28, wali: "Sauda Is. Samunggai, S.Pd", kurikulum: "Kurikulum SD Merdeka", ruang: "RK - 1" },
    { no: 2, rombel: "Kelas 2", tingkat: 2, L: 14, P: 12, total: 26, wali: "Karyawati Pou Mangada, S.Pd", kurikulum: "Kurikulum SD Merdeka", ruang: "RK - 2" },
    { no: 3, rombel: "Kelas 3", tingkat: 3, L: 11, P: 14, total: 25, wali: "Wiwin Mahmud, S.Pd", kurikulum: "Kurikulum SD Merdeka", ruang: "RK - 3" },
    { no: 4, rombel: "Kelas 4.A", tingkat: 4, L: 12, P: 7, total: 19, wali: "Nasriyanto K. Dj. Tayeb, S.Pd", kurikulum: "Kurikulum SD Merdeka", ruang: "RK - 7" },
    { no: 5, rombel: "Kelas 4.B", tingkat: 4, L: 11, P: 6, total: 17, wali: "Andisyam L. Ontoh, S.Pd", kurikulum: "Kurikulum SD Merdeka", ruang: "RK - 4" },
    { no: 6, rombel: "Kelas 5", tingkat: 5, L: 10, P: 9, total: 19, wali: "Munira, S.Pd", kurikulum: "Kurikulum SD Merdeka", ruang: "RK - 5" },
    { no: 7, rombel: "Kelas 6", tingkat: 6, L: 15, P: 12, total: 27, wali: "Herilani, S.Pd", kurikulum: "Kurikulum SD Merdeka", ruang: "RK - 6" },
  ];
 
  return (
    <section className='scroll-mt-[130px]' id='rombel'>
      <div className='container'>
        <h1 className="text-midnight_text text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4">
        Rekap Rombongan Belajar (Rombel)<br />Semester Ganjil Tahun Ajaran 2025/2026
            </h1>
        <p className="text-black/70 text-sm text-justify leading-relaxed py-2">
        <strong>Tanggal sunting:</strong> 2025-10-11 02:02:56<br />
        <strong>Penyunting:</strong> Umar A. Piantae, S.IP (Penata Layanan Operasional)
        </p>
      {/* === Tabel GTK === */}
      <div className="overflow-x-auto shadow">
      <table className="min-w-full text-sm border border-gray-200">
      <thead className="bg-green-100 text-green-800 font-semibold">
        <tr className="text-center">
          <th rowSpan={2} className="px-2 py-2 border">No.</th>
          <th rowSpan={2} className="px-2 py-2 border">Nama Rombel</th>
          <th rowSpan={2} className="px-2 py-2 border">Tingkat Kelas</th>
          <th colSpan={3} className="px-2 py-2 border">Jumlah Siswa</th>
          <th rowSpan={2} className="px-2 py-2 border">Nama Wali Kelas</th>
          <th rowSpan={2} className="px-2 py-2 border">Kurikulum</th>
          <th rowSpan={2} className="px-2 py-2 border">Ruangan</th>
        </tr>
        <tr className="text-center">
          <th className="px-2 py-2 border">L</th>
          <th className="px-2 py-2 border">P</th>
          <th className="px-2 py-2 border">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
        <tr key={row.no} className="bg-white hover:bg-green-50">
          <td className="px-2 py-1 border text-center">{row.no}</td>
          <td className="px-2 py-1 border">{row.rombel}</td>
          <td className="px-2 py-1 border text-center">{row.tingkat}</td>
          <td className="px-2 py-1 border text-center">{row.L}</td>
          <td className="px-2 py-1 border text-center">{row.P}</td>
          <td className="px-2 py-1 border text-center">{row.total}</td>
          <td className="px-2 py-1 border">{row.wali}</td>
          <td className="px-2 py-1 border">{row.kurikulum}</td>
          <td className="px-2 py-1 border text-center">{row.ruang}</td>
          </tr>
         ))}
      </tbody>
      </table>
      </div>
      <p className="text-black/70 text-justify text-xs sm:text-sm py-2">
        <strong>Sumber:</strong> Data Pokok Pendidikan (Dapodik).
        </p>
      {/* Footer */}
      <footer className="relative w-full mt-8 opacity-70">
      <div className="border-t border-green-500 w-full"></div>
      <div className="flex justify-between items-center text-[8px] sm:text-xs text-green-700 mt-0">
        <p>Profil SD Negeri 2 Bokat / SD Pembina Kab. Buol</p>
        <div className="relative">
          <span className="border-l border-b border-green-500 bg-green-100 rounded-bl-full pl-4 pr-2 py-0.5 inline-block">
            Sheet 4
          </span>
        </div>
      </div>
    </footer>        
    </div>
    </section>
  )
}

export default Rombel
