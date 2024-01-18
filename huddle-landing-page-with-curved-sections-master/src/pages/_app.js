import '@/styles/globals.css'
// eslint-disable-next-line camelcase
import { Poppins, Open_Sans } from 'next/font/google'

const poppins = Poppins({
  weight: '700',
  variable: '--font-poppins',
  subsets: ['latin']
})

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  variable: '--font-openSans',
  subsets: ['latin']
})

export default function App ({ Component, pageProps }) {
  return <main className={`${poppins.variable} ${openSans.variable} font-openSans`}>
    <Component {...pageProps} />
  </main>
}
