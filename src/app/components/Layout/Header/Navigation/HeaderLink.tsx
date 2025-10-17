'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { headerItem } from '@/app/types/menu'

const HeaderLink: React.FC<{ item: headerItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }
  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  // 🔹 Deteksi apakah link ini aktif (untuk route atau hash)
  const isActive =
    path === item.href ||
    (item.href.startsWith('#') && item.href === `#${activeSection}`)
 
  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link
        href={item.href}
        className={`text-md flex font-medium hover:text-primary p-1 border-yellow-400 hover:border-b-2 transform transition duration-200 ease-in-out hover:scale-105 active:scale-95 capitalized ${
          path === item.href ? 'text-primary border-b-2' : 'text-black'
        }`}>
        {item.label}
        {item.submenu && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.5em'
            height='1.5em'
            viewBox='0 0 24 24'>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m7 10l5 5l5-5'
            />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 w-60 bg-white dark:bg-darklight dark:text-white shadow-lg rounded-lg `}
          data-aos='fade-up'
          data-aos-duration='500'>
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2   ${
                path === subItem.href
                  ? 'bg-primary text-white'
                  : 'text-black dark:text-white hover:bg-primary'
              }`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderLink
