import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsFillMoonFill, BsMoon } from 'react-icons/bs'

export default function Layout ({ children }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleDarkMode = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  return (
    <>
      <header className='flex justify-between py-4 px-4 sm:px-24 shadow-md relative bg-light-veryLightGray text-light-veryDarkBlue dark:bg-dark-darkBlue dark:text-white'>
        <Link href='/'>
          <h1 className='text-base font-extrabold sm:text-2xl'>Where in the world?</h1>
        </Link>
        <button onClick={toggleDarkMode} className='flex gap-2 items-center text-sm sm:text-base'>
          {
            theme === 'dark'
              ? (
                <>
                  <BsFillMoonFill className='w-5' /> Light Mode
                </>
                )
              : (
                <>
                  <BsMoon className='w-5' /> Dark Mode
                </>
                )
          }
        </button>
      </header>
      <main className='py-12 px-8 sm:px-24 bg-light-veryLightGray text-light-veryDarkBlue dark:bg-dark-veryDarkBlue dark:text-white flex-grow'>
        {children}
      </main>
    </>
  )
}
