import { Metadata } from 'next'
import Kontak from './Kontak'
export const metadata: Metadata = {
  title: 'Hubungi Kami | SD Negeri 2 Bokat/ SD Pembina Kab. Buol',
}

export default function HubungiKami() {
  return (
    <section className='scroll-mt-24' id='hubungikami'>
        <Kontak />
    </section>
  )
}
