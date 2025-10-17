'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import Logos from './Logos'
import Icon from './Icon'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { headerItem } from '@/app/types/menu'

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<headerItem[]>([])

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderData(data.HeaderData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`z-40 w-full transition-all fixed top-0 duration-300 ${
        sticky ? 'shadow-md bg-white py-3' : 'shadow-none bg-transparent py-3'
      }`}>
      <div>
        <div className='container flex items-center justify-between'>
          <div>
            <Logos variant={sticky ? 'colored' : 'white'} />
          </div>
          <nav className='hidden lg:flex items-center gap-5 justify-end ml-auto'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
            <Link
      href="/hubungi_kami"
      className='hidden lg:block bg-[#FFD60A] text-black shadow-md hover:bg-primary shadow-md hover:text-white px-3 py-1 rounded-md font-semibold text-xs'
    >
      Hubungi Kami
    </Link>
          </nav>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-black'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold text-midnight_text'>
              <Icon />
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label='Close menu Modal'></button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <Link
      href="/hubungi_kami"
      className='bg-primary text-white  px-4 py-2 rounded-lg hover:bg-blue-700'
    >
      Hubungi Kami
    </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
