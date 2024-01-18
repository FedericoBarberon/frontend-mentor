import Image from 'next/image'
import Link from 'next/link'

export default function Header () {
  return (
    <header className='p-20 flex justify-between items-center'>
      <Image src='logo.svg' alt='Humble Logo' width={240} height={32} />
      <Link href='#' className='border-2 border-pink-500 rounded-3xl py-[6px] px-6 text-pink-500'>Try It Free</Link>
    </header>
  )
}
