import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Layanan from '@/app/components/Home/Layanan'
import Aplikasi from '@/app/components/Home/Aplikasi'
import GaleriandYoutube from '@/app/components/Home/GaleriandYoutube'
import Berita from '@/app/components/Home/Berita'
import Kemendikdasmen from '@/app/components/Home/Kemendikdasmen'
import { Metadata } from 'next'
import SosialMedia from './components/Home/SosialMedia'
export const metadata: Metadata = {
  title: 'SD Negeri 2 Bokat/ SD Pembina Kab. Buol',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Layanan />
      <section id="kemendikdasmen">
        <Kemendikdasmen />
      </section>
      <section id="aplikasi">
        <Aplikasi />
      </section>
      <section id="informasi">
        <Berita />
      </section>
      <section id="galeri">
        <GaleriandYoutube />
      </section>
      <SosialMedia />
    </main>
  )
}

