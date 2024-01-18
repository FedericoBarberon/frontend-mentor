import Link from 'next/link'

export default function LinkButton ({ href = '#', children }) {
  return (
    <Link href={href} className="text-xl text-white bg-pink-500 rounded-full py-6 px-28 shadow">{children}</Link>
  )
}
