"use client";

import React, { useState, useEffect } from "react";

interface WilayahAdministrasiProps {
  form: {
    nik: any;
    ibu: any;
    ayah: any;
    prov: string;
    kabkot: string;
    kec: string;
    keldes: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      nik: any;
      ibu: any;
      ayah: any;
      prov: string;
      kabkot: string;
      kec: string;
      keldes: string;
    }>
  >;
}

interface Region {
  id: string;
  name: string;
}

export default function WilayahAdministrasi({ form, setForm }: WilayahAdministrasiProps) {
  const [provinces, setProvinces] = useState<Region[]>([]);
  const [kabkots, setKabkots] = useState<Region[]>([]);
  const [kecs, setKecs] = useState<Region[]>([]);
  const [keldes, setKeldes] = useState<Region[]>([]);

  const capitalize = (str: string) =>
    str
      .toLowerCase()
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  // Load Provinsi
  useEffect(() => {
    fetch("https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json")
      .then((res) => res.json())
      .then((data: any[]) =>
        setProvinces(data.map((p) => ({ id: p.id, name: capitalize(p.name) })))
      )
      .catch(console.error);
  }, []);

  // Load Kab/Kota
  useEffect(() => {
    if (!form.prov) return setKabkots([]);
    fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${form.prov}.json`)
      .then((res) => res.json())
      .then((data: any[]) =>
        setKabkots(data.map((r) => ({ id: r.id, name: capitalize(r.name) })))
      )
      .catch(console.error);
  }, [form.prov]);

  // Load Kecamatan
  useEffect(() => {
    if (!form.kabkot) return setKecs([]);
    fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/districts/${form.kabkot}.json`)
      .then((res) => res.json())
      .then((data: any[]) =>
        setKecs(data.map((d) => ({ id: d.id, name: capitalize(d.name) })))
      )
      .catch(console.error);
  }, [form.kabkot]);

  // Load Kelurahan/Desa
  useEffect(() => {
    if (!form.kec) return setKeldes([]);
    fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/villages/${form.kec}.json`)
      .then((res) => res.json())
      .then((data: any[]) =>
        setKeldes(data.map((v) => ({ id: v.id, name: capitalize(v.name) })))
      )
      .catch(console.error);
  }, [form.kec]);

  return (
    <div className="grid grid-cols-2 gap-2">
      {/* Provinsi */}
      <select
        value={form.prov}
        onChange={(e) =>
          setForm({ ...form, prov: e.target.value, kabkot: "", kec: "", keldes: "" })
        }
        className="border rounded-lg p-2 text-xs sm:text-sm"
      >
        <option value="">Pilih Provinsi</option>
        {provinces.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      {/* Kab/Kota */}
      <select
        value={form.kabkot}
        onChange={(e) =>
          setForm({ ...form, kabkot: e.target.value, kec: "", keldes: "" })
        }
        disabled={!form.prov}
        className="border rounded-lg p-2 text-xs sm:text-sm"
      >
        <option value="">Pilih Kab/Kota</option>
        {kabkots.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      {/* Kecamatan */}
      <select
        value={form.kec}
        onChange={(e) => setForm({ ...form, kec: e.target.value, keldes: "" })}
        disabled={!form.kabkot}
        className="border rounded-lg p-2 text-xs sm:text-sm"
      >
        <option value="">Pilih Kecamatan</option>
        {kecs.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      {/* Kelurahan/Desa */}
      <select
        value={form.keldes}
        onChange={(e) => setForm({ ...form, keldes: e.target.value })}
        disabled={!form.kec}
        className="border rounded-lg p-2 text-xs sm:text-sm"
      >
        <option value="">Pilih Kelurahan/Desa</option>
        {keldes.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  );
}
