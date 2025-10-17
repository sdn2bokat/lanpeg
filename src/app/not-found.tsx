import HeroSub from '@/app/components/SharedComponent/HeroSub'
import NotFound from '@/app/components/NotFound'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan | SD Negeri 2 Bokat/ SD Pembina Kab. Buol ',
}

const ErrorPage = () => {
  return (
    <>
      <HeroSub title='404' />
      <NotFound />
    </>
  )
}

export default ErrorPage
