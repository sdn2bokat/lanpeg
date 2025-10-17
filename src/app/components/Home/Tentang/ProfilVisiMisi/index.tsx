"use client";

import ModalMap from "@/app/components/Popup/ModalMap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const ProfilVisiMisi = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <section className='scroll-mt-[130px]' id='pvmsekolah'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {/* === Profil === */}
          <div className='col-span-1 border rounded-2xl shadow-sm p-6 bg-white'>
            <h1 className="text-midnight_text text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6">
        Profil Sekolah
            </h1>
            <div className="flex items-center mb-2">
              <h3 className="mr-1 text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                  A. Identitas Sekolah
              </h3>
              <div className="flex-1 border-b-1 border-gray-800 translate-y-[4px]"></div>
            </div>
            <div className="border-t-2 w-[75px] border-yellow-400 translate-y-[-6px] mb-2"></div>
            <div className="overflow-x-auto mb-6 ml-4">
                <table className="min-w-full w-full">
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">1.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Nama Sekolah</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">SD NEGERI 2 BOKAT/ SD PEMBINA KAB. BUOL</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">2.</td>
                      <td className="w-[35%] px-1 py-1 align-top">NPSN</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">40202114</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">3.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Jenjang Pendidikan</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">Sekolah Dasar</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">4.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Status Sekolah</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">Negeri</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">5.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Alamat Sekolah</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">Jln. Trans Sulawesi No. 6. RT 001/RW 002, Desa Bokat, Kecamatan Bokat, Kab. Buol, Provinsi Sulawesi Tengah - Indonesia. Kode Pos 94566.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">6.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Posisi Geografis</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">1°05'22.8"N 121°30'12.1"E</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center mt-3">
                <ModalMap />
                </div>
            </div>
            <div className="flex items-center mb-2">
              <h3 className="mr-1 text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                  B. Data Pelengkap
              </h3>
              <div className="flex-1 border-b-1 border-gray-800 translate-y-[4px]"></div>
            </div>
            <div className="border-t-2 w-[75px] border-yellow-400 translate-y-[-6px] mb-2"></div>
            <div className="overflow-x-auto mb-6 ml-4">
                <table className="min-w-full w-full">
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">1.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Sk Pendirian Sekolah</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">No. 820/02-imb/pem/74 Tanggal, 12 Desember 1974</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">2.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Status Kepemilikan</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">Pemerintah Daerah</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">3.</td>
                      <td className="w-[35%] px-1 py-1 align-top">SK Izin Operasional</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">No. 820/34-51/DISDIKPORA Tanggal, 4 September 2015</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">4.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Siswa Kebutuhan Khusus Dilayani</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">Tidak ada</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">5.</td>
                      <td className="w-[35%] px-1 py-1 align-top">MBS</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">Tidak</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">6.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Memungut Iuran</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">Tidak ada (Sekolah Gratis)</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className="flex items-center mb-2">
              <h3 className="mr-1 text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                  C. Kontak Sekolah
              </h3>
              <div className="flex-1 border-b-1 border-gray-800 translate-y-[4px]"></div>
            </div>
            <div className="border-t-2 w-[75px] border-yellow-400 translate-y-[-6px] mb-2"></div>
            <div className="overflow-x-auto mb-6 ml-4">
                <table className="min-w-full w-full">
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">1.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Nomor Telepon</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">0445 xxx xxx</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">2.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Email Sekolah</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">sekolah@sdn2bokat.sch.id</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">3.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Website Sekolah</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">https://sdn2bokat.sch.id</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className="flex items-center mb-2">
              <h3 className="mr-1 text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                  Data Periodik
              </h3>
              <div className="flex-1 border-b-1 border-gray-800 translate-y-[4px]"></div>
            </div>
            <div className="border-t-2 w-[75px] border-yellow-400 translate-y-[-6px] mb-2"></div>
            <div className="overflow-x-auto mb-4 ml-4">
                <table className="min-w-full w-full">
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">1.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Waktu Penyelenggaraan</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">Pagi dan Sore / 5 Hari</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">2.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Dana BOSP</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">1) BOSP Reguler</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top"></td>
                      <td className="w-[35%] px-1 py-1 align-top"></td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">2) BOSP Kinerja</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">4.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Sertifikasi ISO</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">Belum Sertifikasi ISO</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">5.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Sumber Listrik</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">PLN 2.200 Kwh</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="w-[3%] px-1 py-1 align-top">6.</td>
                      <td className="w-[35%] px-1 py-1 align-top">Akses Internet</td>
                      <td className="w-[2%] px-1 py-1 align-top">:</td>
                      <td className="w-[60%] px-1 py-1 align-top">BAKTI Kominfo (3 Mbps)</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
          
          {/* === Visi === */}
          <div className='col-span-1 border rounded-2xl shadow-sm p-6 bg-white'>
            <h1 className="text-midnight_text text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6">
        Visi Misi dan Tujuan Sekolah
            </h1>
            <div className="flex items-center mb-2">
              <h3 className="mr-1 text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                  Visi
              </h3>
              <div className="flex-1 border-b-1 border-gray-800 translate-y-[4px]"></div>
            </div>
            <div className="bg-green-50 text-green-800 p-4 rounded-md shadow-md mb-5 text-sm sm:text-base md:text-lg font-semibold italic text-center relative">
            <Icon icon="bxs:quote-alt-left" className="text-3xl absolute top-3 left-6 opacity-50" />
            <p className="px-4 sm:px-8 leading-relaxed">
            Unggul dalam Prestasi berlandaskan<br /> Moralitas Agama
            </p>
            <Icon icon="bxs:quote-alt-right" className="text-3xl absolute bottom-3 right-6 opacity-50" />
            </div>
            <div className="flex items-center mb-2">
              <h3 className="mr-1 text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                  Misi
              </h3>
              <div className="flex-1 border-b-1 border-gray-800 translate-y-[4px]"></div>
            </div>
            <div className="overflow-x-auto mb-3">
                <table className="min-w-full w-full">
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">1.</td>
                      <td className="pr-2 py-1 align-top">Mengembangkan proses pembelajaran dengan pendekatan bervariatif, inovatif, bermakna dan menyenangkan.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">2.</td>
                      <td className="pr-2 py-1 align-top">Menumbuhkan semangat keunggulan secara intensif kepada seluruh warga sekolah.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">3.</td>
                      <td className="pr-2 py-1 align-top">Mendorong dan membantu setiap peserta didik untuk mengenali potensi dirinya melalui penguatan pendidikan karakter sehingga dapat berkembang secara optimal.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">4.</td>
                      <td className="pr-2 py-1 align-top">Menumbuhkan penghayatan terhadap ajaran agama yang dianut dan budaya bangsa kearifan local dalam berfikir dan bertindak.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">5.</td>
                      <td className="pr-2 py-1 align-top">Menciptakan semangat kekeluargaan sehingga tercipta lingkungan sekolah yang harmonis.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">6.</td>
                      <td className="pr-2 py-1 align-top">Menerapkan manajemen partisifatif dengan melibatkan seluruh warga sekolah dan pemangku kepentingan yang terkait dengan sekolah.</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className="flex items-center mb-2">
              <h3 className="mr-1 text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                  Tujuan Sekolah
              </h3>
              <div className="flex-1 border-b-1 border-gray-800 translate-y-[4px]"></div>
            </div>
            <div className="overflow-x-auto mb-3">
                <table className="min-w-full w-full">
                  <tbody className="text-gray-800">
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">1.</td>
                      <td className="pr-2 py-1 align-top">Setiap tahun pembelajaran persentasi kelulusan mencapai 100% dan nilai keberhasilan meningkat.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">2.</td>
                      <td className="pr-2 py-1 align-top">Setiap tahun 100% peserta didik melanjutkan ke jenjang pendidikan lebih tinggi.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">3.</td>
                      <td className="pr-2 py-1 align-top">Tahun kedepan menjadi sekolah unggul ditingkat kecamatan.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">4.</td>
                      <td className="pr-2 py-1 align-top">Memiliki tim O2SN dan OSN yang tangguh dan berprestasi ditingkat kabupaten.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-2 py-1 align-top">5.</td>
                      <td className="pr-2 py-1 align-top">Membekali setiap peserta didik / lulusan mampu membaca Al-Qur'an dan terbiasa melaksanakan Sholat berjamaah bagi yang beragama Islam dan beragama lain mampu menghayati dan mengamalkan ajaran alkitabnya masing-masing.</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className="py-5 text-xs sm:text-sm">
            <p>Bokat, 18 Januari 2021</p>
            </div>
            <div className="pt-5 text-xs sm:text-sm">
            <p><strong>Rahman A. Majid, S.Pd</strong><br />Pembina Tingkat 1. IV/b</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilVisiMisi
