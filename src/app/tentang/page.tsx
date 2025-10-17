import SearchSection from "@/app/components/Home/Tentang/Pencarian";
import TentangSekolah from "@/app/components/Home/Tentang/TentangSekolah";
import ProfilVMS from "@/app/components/Home/Tentang/ProfilVisiMisi";
import DataGTK from "@/app/components/Home/Tentang/DataGTK";
import DataPD from "@/app/components/Home/Tentang/DataPD";
import Rombel from "@/app/components/Home/Tentang/Rombel";
import Prasarana from "@/app/components/Home/Tentang/Prasarana";
import SaranaDLL from "@/app/components/Home/Tentang/SaranaDLL";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang SD Negeri 2 Bokat / SD Pembina Kab. Buol",
};

export default function Tentang() {
  return (
    <div className="pt-[72px]">
      <div className="sticky top-[69px] z-30 bg-midnight_text">
        <SearchSection />
      </div>

      {/* Isi halaman */}
      <div className="space-y-0">
        <TentangSekolah />
        <ProfilVMS />
        <DataGTK />
        <DataPD />
        <Rombel />
        <Prasarana />
        <SaranaDLL />
      </div>
    </div>
  );
}
