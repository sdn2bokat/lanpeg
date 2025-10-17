import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'

export const metadata: Metadata = {
  title: "SD NEGERI 2 BOKAT",
  description:
    "SiDi adalah platform resmi untuk penjualan dan layanan digital seperti aplikasi web, dokumen digital, dan desain digital. Solusi digitalisasi administrasi dan informasi terpadu untuk produktivitas Anda.",
  keywords: [
    "SiDi",
    "Sistem Digitalisasi",
    "Digitalisasi Administrasi",
    "Produk Digital",
    "Aplikasi Web",
    "Desain Digital",
    "Dokumen Digital",
    "Layanan Digital",
    "SiDi Indonesia",
    "sidi.my.id"
  ],
  alternates: {
    canonical: "https://sidi.my.id",
  },
  openGraph: {
    title: "SiDi | Sistem Digitalisasi",
    description:
      "Solusi Digital Administrasi dan Informasi Terpadu. Temukan aplikasi, dokumen, dan desain digital untuk mendukung produktivitas Anda.",
    url: "https://sidi.my.id",
    siteName: "SiDi",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://www.sidi.my.id/images/hero/banner.webp", // ganti dengan gambar Anda
        width: 1200,
        height: 630,
        alt: "SiDi | Sistem Digitalisasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SiDi | Sistem Digitalisasi",
    description:
      "Solusi Digital Administrasi dan Informasi Terpadu untuk produktivitas Anda.",
    images: ["https://www.sidi.my.id/images/hero/banner.webp"],
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
