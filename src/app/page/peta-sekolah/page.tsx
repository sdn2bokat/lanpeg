import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Peta Sekolah | SD Negeri 2 Bokat/ SD Pembina Kab. Buol',
}

export default function PetaSekolah() {
  return (
    <section className='pt-24 scroll-mt-24' id='petasekolah'>
      <div className='container'>
        <div className="mb-4 pb-1 border-b-2 border-gray-300">
            <h3 className="text-black">
              Peta Sekolah
            </h3>
            </div>
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.6736227305017!2d121.50275436948084!3d1.0894334999312696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3270ad8c33d4851f%3A0xc18c0fa25fdfe189!2sSD%20NEGERI%202%20BOKAT!5e1!3m2!1sid!2sid!4v1760255231785!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
    </div>
    </section>
  )
}
