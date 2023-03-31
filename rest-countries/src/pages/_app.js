// eslint-disable-next-line camelcase
import { Nunito_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'

const NunitoSans = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-nunito-sans'
})

export default function App ({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className={`${NunitoSans.className} min-h-screen flex flex-col`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
