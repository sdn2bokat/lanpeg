"use client";

import { useState, useEffect } from "react";
import LeftPanel from "./components/LeftPanel";
import { supabase } from "@/lib/supabaseClient";
import LoadingOverlay from "../components/LoadingOverlay";
import SearchStudent from "./components/SearchStudent";

export default function PIPPage() {
  const [dbData, setDbData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDb = async () => {
      const { data, error } = await supabase.from("db_pip").select("*");
      if (!error) setDbData(data || []);
      setLoading(false);
    };
    fetchDb();
  }, []);

  if (loading) return <LoadingOverlay />;

  return (
    <section className='pt-24 scroll-mt-24' id='pip'>
      <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-4">
        <LeftPanel />
      </div>

      <div className="lg:col-span-8">
        <SearchStudent data={dbData}/>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-1">
      <div className="span justify-start">
          <p className="text-[10px] sm:text-[12px] text-gray-400 mt-4">
            <strong>AplWeb by Sistem Digitalisasi</strong>
          </p>
          </div>
          <div className="span justify-and">
          <p className="text-right text-[10px] sm:text-[12px] text-gray-400 mt-4">
            Versi Aplikasi: v.1.0.1
          </p>
          </div>
          </div>
    </div>
    </section>
  );
}
