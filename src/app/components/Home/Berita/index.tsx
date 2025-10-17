import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import Wave from "@/app/components/Wave"
import WaveTop from "@/app/components/WaveTop";

const Berita = () => {
  return (
    <section className='relative bg-header py-15 overflow-hidden' id='informasi'>
        <WaveTop />
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 content-center justify-items-center'>
          <div className='lg:col-span-6 flex flex-col gap-5 justify-center'>
            <h2 className='text-white/90 text-center lg:text-start'>
              Temukan berbagai Informasi dan Edukasi menarik.
            </h2>
            <p className='text-white text-lg font-normal text-center lg:text-start sm:leading-140 max-w-2xl lg:max-w-lg mx-auto lg:mx-0'>
              Kunjungi laman Informasi dan Edukasi SD Negeri 2 Bokat untuk membaca berita sekolah, artikel pembelajaran, serta tips bermanfaat bagi siswa dan orang tua. Dapatkan wawasan baru setiap hari untuk mendukung proses belajar yang lebih menyenangkan.
            </p>
            <Link
              href={'https://info.sdn2bokat.sch.id'}
              target="_blank"
              className='text-[#FFD60A] z-10 hover:text-white text-lg font-medium flex items-center gap-2 mx-auto lg:mx-0 w-fit'>
              Ayo temukan sekarang
              <Icon icon='tabler:arrow-right' className='text-2xl' />
            </Link>
          </div>
          <div className='lg:col-span-6 flex sm:justify-center justify-start mt-10 lg:mt-0'>
            <Image
              src='/images/berita/berita.png'
              alt='business'
              width={636}
              height={805}
              className='w-full'
            />
          </div>
        </div>
      </div>
      <Wave />
    </section>
  )
}

export default Berita
