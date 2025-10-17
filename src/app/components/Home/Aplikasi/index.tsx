import Image from 'next/image'
import Link from 'next/link'

const Aplikasi = () => {
  return (
    <section className='scroll-mt-10' id='aplikasi'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 content-center justify-items-center'>
          <div className='col-span-6'>
            <Image
              src='/images/aplikasi/aplikasi-baner.png'
              alt='payment'
              width={600}
              height={500}
            />
          </div>
          <div className='col-span-6 flex flex-col gap-5 justify-center'>
            <h2 className='text-midnight_text text-center lg:text-start sm:leading-14 leading-12'>
              Aplikasi Web Milik SD Negeri 2 Bokat.
            </h2>
            <p className='text-black/75 text-sm sm:text-base font-normal text-center lg:text-start sm:leading-140 max-w-2xl lg:max-w-lg mx-auto lg:mx-0'>
              Di bawah ini merupakan kumpulan jalan pintas menuju ke masing-masing aplikasi 
              web resmi miliki SD Negeri 2 Bokat/ SD Pembina Kab. Buol, muda diakses dan responsive.
            </p>
            <div className="grid grid-cols-2 gap-5 text-center mt-2">
                {[
                  { label: "Sistem PMB Online", url: "/page/maintenance", icon: "/images/aplikasi/spmb.png", ket: "Merupakan Aplikasi Sistem Penerimaan Murid Baru secara Online" },
                  { label: "Sistem E-Learning", url: "https://sdn2bokat.elearning.id", icon: "/images/aplikasi/cat.png", ket: "Aplikasi Web Ujian dan Penilaian berbasis Komputer (CBT Onlone)" },
                  { label: "Jurnal Orang Tua 7KAIH", url: "/page/maintenance", icon: "/images/aplikasi/7kaih.png", ket: "Aplikasi Jurnal Harian Orang Tua untuk Mencatat 7 Kebiasaan Anak Indonesia Hebat" },
                  { label: "Absensi Siswa Online", url: "/page/maintenance", icon: "/images/aplikasi/absen.png", ket: "Merupakan Aplikasi Guru untuk melakukan absensi murid di kelas secara Online" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={50}
                      height={50}
                      className="mb-2"
                    />
                    <span className="text-sm sm:text-base font-semibold">{item.label}</span>
                    <span className="italic text-xs text-gray-600">{item.ket}</span>
                  </Link>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aplikasi
