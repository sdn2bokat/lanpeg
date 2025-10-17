import Image from 'next/image'
import Wave from "@/app/components/Wave";

const Banner = () => {
  return (
    <section className='relative bg-header pt-28 lg:pb-14 overflow-hidden' id='hero'>
      <div className='container'>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-12 content-center'>
          <div className='lg:col-span-7 flex flex-col justify-center relative'>
            <Image
              src='/images/hero/star.svg'
              alt='star-image'
              width={95}
              height={97}
              className='absolute top-[-74px] right-[51px] opacity-70'
            />
            <Image
              src='/images/hero/lineone.svg'
              alt='line-image'
              width={190}
              height={148}
              className='absolute top-[-74px] right-[51px] opacity-55'
            />
            <Image
              src='/images/hero/linetwo.svg'
              alt='line-image'
              width={190}
              height={148}
              className='hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-70'
            />
            <p className='text-canary-500 text-md font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                👋 Halo! Selamat datang di
              </p>
            <div className='flex flex-col gap-5'>
              <h1 className='text-3x1 sm:text-6xl max-w-2xl leading-16 text-white/90 text-center lg:text-start mx-auto lg:mx-0 pt-5 leading-tight'>
                Website resmi<br/>SD Negeri 2 Bokat
              </h1> 
              <p className='text-white/80 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                Kami berkomitmen untuk menghadirkan layanan pendidikan
                yang berkualitas, transparan, dan mudah diakses. Semoga website ini menjadi
                jendela informasi bagi siswa, guru, orang tua, serta masyarakat.
              </p>
              <div className="mx-auto lg:mx-0">
              <a href="#layanan">
               <button className="relative z-10 text-blue-900 text-lg font-medium py-3 px-6 rounded-full transition duration-250 border border-[#FFD60A] bg-[#FFD60A] hover:bg-transparent hover:cursor-pointer hover:text-[#FFD60A]">
               Mulai dari sini!
               </button>
              </a>
              </div>
            </div>
          </div>
          <div className='mt-10 lg:mt-0 lg:col-span-5'>
            <div>
              <Image
                src='/images/hero/banner.webp'
                alt='nothing'
                width={698}
                height={652}
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
      <Wave />
    </section>
  )
}

export default Banner
