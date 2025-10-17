import './globals.css'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import LoadingOverlay from './components/LoadingOverlay'

export const metadata: Metadata = {
  title: "SD Negeri 2 Bokat/ SD Pembina Kab. Buol",
  description:
    "Website Resmi SD Negeri 2 Bokat | Kami berkomitmen untuk menghadirkan layanan pendidikan yang berkualitas, transparan, dan mudah diakses. Semoga website ini menjadi jendela informasi bagi siswa, guru, orang tua, serta masyarakat.",
  keywords: [
    "sdn 2 bokat",
    "SDN Pembina Buol",
    "sdn2bokat",
    "Layanan SDN 2 Bokat",
    "Profil SDN 2 Bokat",
    "Dapodik SDN 2 Bokat",
    "PPDB SDN 2 Bokat",
    "Digital SDN 2 Bokat",
    "Aplikasi cek ijazah",
    "www.sdn2bokat.sch.id",
    "Berita SDN 2 Bokat",
    "Pengumuman SDN 2 Bokat",
    "web sdn 2 bokat",
    "portal sdn 2 bokat",
    "SDN Bokat",
    "40202114",
    "sdn 2",
    "SD Negeri 2"
  ],
  alternates: {
    canonical: "https://sdn2bokat.sch.id",
  },
  openGraph: {
    title: "Website SD Negeri 2 Bokat/ SD Pembina Kab. Buol",
    description:
      "Kami berkomitmen untuk menghadirkan layanan pendidikan yang berkualitas, transparan, dan mudah diakses. Semoga website ini menjadi jendela informasi bagi siswa, guru, orang tua, serta masyarakat.",
    url: "https://sdn2bokat.sch.id",
    siteName: "Website SD Negeri 2 Bokat",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://sdn2bokat.sch.id/images/sdn2bokat.webp", // ganti dengan gambar Anda
        width: 1200,
        height: 630,
        alt: "SD Negeri 2 Bokat/ SD Pembina Kab. Buol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SD Negeri 2 Bokat/ SD Pembina Kab. Buol",
    description:
      "Website Resmi SD Negeri 2 Bokat | Kami berkomitmen untuk menghadirkan layanan pendidikan yang berkualitas, transparan, dan mudah diakses. Semoga website ini menjadi jendela informasi bagi siswa, guru, orang tua, serta masyarakat.",
    images: ["https://sdn2bokat.sch.id/images/sdn2bokat.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='id' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <LoadingOverlay />
        <Aoscompo>
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  )
}
