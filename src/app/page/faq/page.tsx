import React from 'react'
import { Metadata } from 'next'
import { FaqSiswa } from '@/app/components/FAQ/Siswa/FAQsiswa'
import FormFaq from '@/app/components/FAQ/Form/FormFAQ'
import { FaqPublik } from '@/app/components/FAQ/Publik/FAQpublik'
export const metadata: Metadata = {
  title: 'FAQ | SD Negeri 2 Bokat/ SD Pembina Kab. Buol',
}

export default function Faq() {
  return (
    <section className='pt-24 scroll-mt-12' id='faq'>
      <div className="container mx-auto">
        <div className="mb-4 pb-1 border-b-2 border-gray-300">
            <h3 className="text-black">
              FAQ
            </h3>
            </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-2xl shadow-sm p-6 bg-white">
        <FaqPublik />
        </div>
        <div className="border rounded-2xl shadow-sm p-6 bg-white">
        <FaqSiswa />
        </div>
      </div>
      <div className="border rounded-2xl shadow-sm px-6 bg-white">
        <FormFaq />
      </div>
      </div>
    </section>
  )
}
