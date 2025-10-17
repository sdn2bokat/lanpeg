import Link from 'next/link'
import { Icon } from "@iconify/react/dist/iconify.js";

const Kemendikdasmen = () => {
  return (
    <section className='sm:px-6 scroll-mt-10' id='kemendikdasmen'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-15'>
        {/* === Link 1 === */}
          <div className='col-span-1'>
            <div className="flex items-center">
              <h3 className="mr-2 text-base sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                  Rumah Pendidikan
              </h3>
              <div className="flex-1 border-t-2 border-blue-600"></div>
            </div>
            <div className="mt-2">
                {[
                  { label: "Ruang Sekolah", url: "https://rumah.pendidikan.go.id/ruang/sekolah", icon: "fluent-color:building-home-32" },
                  { label: "Ruang GTK", url: "https://rumah.pendidikan.go.id/ruang/gtk", icon: "fluent-color:building-people-24" },
                  { label: "Ruang Murid", url: "https://rumah.pendidikan.go.id/ruang/murid", icon: "fluent-color:people-home-32" },
                  { label: "Ruang Orang Tua", url: "https://rumah.pendidikan.go.id/ruang/orang-tua", icon: "fluent-color:people-community-32" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mr-3 text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <Icon
                      icon={item.icon}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-sm sm:text-base font-medium leading-loose sm:leading-[40px]">{item.label}</span>
                  </Link>
                ))}
              </div>
          </div>
          {/* === Link 2 === */}
          <div className='col-span-1'>
            <div className="flex items-center">
              <h3 className="mr-2 text-base sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                  Dapodik
              </h3>
              <div className="flex-1 border-t-2 border-blue-600"></div>
            </div>
            <div className="mt-2">
                {[
                  { label: "Portal Dapodik", url: "https://dapo.kemendikdasmen.go.id/", icon: "fluent-color:approvals-app-16" },
                  { label: "Manajemen Sekolah", url: "https://sp.datadik.kemendikdasmen.go.id/", icon: "fluent-color:calendar-sync-24" },
                  { label: "Individu GTK", url: "https://ptk.datadik.kemendikdasmen.go.id/", icon: "fluent-color:scan-person-16" },
                  { label: "Info GTK", url: "https://info.gtk.dikdasmen.go.id/", icon: "fluent-color:apps-list-24" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mr-3 text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <Icon
                      icon={item.icon}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-sm sm:text-base font-medium leading-loose sm:leading-[40px]">{item.label}</span>
                  </Link>
                ))}
              </div>
          </div>
          {/* === Link 3 === */}
          <div className='col-span-1'>
            <div className="flex items-center">
              <h3 className="mr-2 text-base sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                  Verval
              </h3>
              <div className="flex-1 border-t-2 border-blue-600"></div>
            </div>
            <div className="mt-2">
                {[
                  { label: "Verval SP", url: "https://vervalsp.data.kemendikdasmen.go.id/", icon: "fluent-color:apps-32" },
                  { label: "Verval PTK", url: "https://vervalptk.data.kemendikdasmen.go.id/", icon: "fluent-color:layer-diagonal-person-16" },
                  { label: "Verval PD", url: "http ://vervalpd.data.kemendikdasmen.go.id", icon: "fluent-color:person-edit-32" },
                  { label: "Verval Ijazah", url: "https://ijazah.data.kemendikdasmen.go.id/manajemen/", icon: "fluent-color:certificate-32" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mr-3 text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <Icon
                      icon={item.icon}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-sm sm:text-base font-medium leading-loose sm:leading-[40px]">{item.label}</span>
                  </Link>
                ))}
              </div>
          </div>
          {/* === Link 4 === */}
          <div className='col-span-1'>
            <div className="flex items-center">
              <h3 className="mr-2 text-base sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                  Tautan Terkait
              </h3>
              <div className="flex-1 border-t-2 border-blue-600"></div>
            </div>
            <div className="mt-2">
                {[
                  { label: "Pusdatin", url: "https://pusdatin.kemendikdasmen.go.id/?utm_source=portal-satu-data", icon: "fluent-color:database-32" },
                  { label: "SIM PKB", url: "https://gtk.belajar.kemendikdasmen.go.id/", icon: "fluent-color:guest-32" },
                  { label: "Portal Kemdikdasmen", url: "https://data.kemendikdasmen.go.id/", icon: "fluent-color:document-folder-24" },
                  { label: "Dashboard MBG", url: "https://mbg.pdm.kemendikdasmen.go.id/portal", icon: "fluent-color:calendar-data-bar-16" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mr-3 text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <Icon
                      icon={item.icon}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-sm sm:text-base font-medium leading-loose sm:leading-[40px]">{item.label}</span>
                  </Link>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kemendikdasmen
