import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-white pb-8">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-5/12 lg:w-6/12">
            <div className="relative mx-auto aspect-129/138 max-w-[357px] text-center">
              <Image
                src="/images/404dea.png"
                alt="image"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                className="mx-auto max-w-full"
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
            <div className="mb-3">
            <Image
            src="/images/404-maaf.svg"
            alt="404 Maaf"
            width={327} // bisa disesuaikan
            height={132} // bisa disesuaikan
            priority
            />
            </div>
              <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                Kami Tidak Dapat Menemukan Halaman yang Anda Cari.
              </h3>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Maaf! Halaman yang Anda cari tidak ada. Mungkin telah dipindahkan atau dihapus.
              </p>
              <Link
                href="/"
                className="rounded-md px-7 py-3 text-base font-medium text-white transition hover:bg-blue-700 bg-primary"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
};

export default NotFound;