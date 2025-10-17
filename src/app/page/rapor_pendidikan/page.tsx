import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rapor Pendidikan | SD Negeri 2 Bokat/ SD Pembina Kab. Buol",
};

export default function RaporPendidikan() {
  return (
    <section className="pt-24 scroll-mt-24" id="petasekolah">
      {/* Gambar untuk layar SM ke atas */}
  <div className="container w-full hidden sm:block">
    <Image
      src="/images/rapor/rapor2025-web.png"
      alt="Rapor Pendidikan 2025"
      width={1920}
      height={1080}
      quality={100}
      className="w-full h-auto object-contain"
      priority
    />
  </div>

  {/* Gambar untuk layar di bawah SM */}
  <div className="container w-full block sm:hidden">
    <Image
      src="/images/rapor/rapor2025.jpg"
      alt="Rapor Pendidikan 2025 (Mobile)"
      width={1920}
      height={1080}
      quality={100}
      className="w-full h-auto object-contain"
      priority
    />
  </div>
</section>
  );
}
