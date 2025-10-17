import { NextResponse } from 'next/server'
import { headerItem } from '@/app/types/menu'
import { socialLinksData } from '@/app/types/sociallinks'
import { footerlLinksData } from '@/app/types/footerlinks'

const HeaderData: headerItem[] = [
  { label: 'Beranda', href: '/ ' },
  { label: 'Layanan', href: '/page/portal-layanan-sekolah' },
  { label: 'Aplikasi', href: '/#aplikasi' },
  { label: 'Informasi', href: '/#informasi' },
  { label: 'Galeri', href: '/#galeri' },
]

const FooterLinks: footerlLinksData[] = [
  { label: 'Tentang', href: '/tentang' },
  { label: 'Visi Misi', href: '/tentang#pvmsekolah' },
  { label: 'Guru', href: '/tentang#dgtk' },
  { label: 'Siswa', href: '/tentang#rekapsiswa' },
  { label: 'Komite', href: '/tentang#saranadll' },
]

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'https://www.facebook.com/sdnduabokat',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:tiktok',
    link: 'https://www.tiktok.com/@sdn2bokat',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:youtube',
    link: 'https://www.youtube.com/@sdn2bokat',
    width: 14,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FooterLinks,
    SocialLinks,
  })
}
