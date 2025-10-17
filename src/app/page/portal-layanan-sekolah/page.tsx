import React from 'react'
import Layanan from '@/app/components/Home/Layanan'
import Aplikasi from '@/app/components/Home/Aplikasi'
import Kemendikdasmen from '@/app/components/Home/Kemendikdasmen'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Portal Layanan SD Negeri 2 Bokat/ SD Pembina Kab. Buol',
}

export default function PortalLayananSekolah() {
  return (
    <div className="pt-10">
      <Layanan />
      <Kemendikdasmen />
      <Aplikasi />
    </div>
  )
}
