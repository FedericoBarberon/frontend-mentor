import Layout from '@/components/Layout'
import Link from 'next/link'
import { getCountriesPaths, getCountryByName } from '@/services/countries'
import { IoMdArrowBack } from 'react-icons/io'
import Image from 'next/image'
import { joinString } from '@/utils/joinString'
import Head from 'next/head'

export async function getStaticPaths () {
  const paths = await getCountriesPaths()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  console.log(params)
  const country = await getCountryByName(params.country)
  console.log(country)

  return {
    props: {
      country
    }
  }
}

export default function Country ({ country }) {
  return (
    <Layout>
      <Head>
        <title>{country.name.common}</title>
      </Head>

      <Link href='/' className='bg-white dark:bg-dark-darkBlue py-2 px-8 rounded shadow-lg hover:brightness-95 dark:hover:brightness-105 cursor-pointer flex w-fit items-center gap-2'>
        <IoMdArrowBack /> Back
      </Link>

      <section className='flex flex-col lg:flex-row mt-12 lg:gap-24'>
        <Image src={country.flags.svg} width={600} height={250} alt={country.flags.alt} className='aspect-video w-full lg:w-1/2 object-contain' />

        <div className='flex flex-col gap-8 my-12'>
          <h1 className='font-bold text-2xl lg:text-4xl'>{country.name.common}</h1>

          <div className='flex flex-col md:flex-row justify-between md:gap-24 gap-12'>
            <div className='flex flex-col gap-2'>
              <p><span className='font-semibold'>Native Name: </span>{joinString(Object.values(country.name.nativeName), 'common')}</p>
              <p><span className='font-semibold'>Population: </span>{country.population.toLocaleString()}</p>
              <p><span className='font-semibold'>Region: </span>{country.region}</p>
              <p><span className='font-semibold'>Sub Region: </span>{country.subregion}</p>
              <p><span className='font-semibold'>Capital: </span>{country.capital}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p><span className='font-semibold'>Top Level Domain: </span>{country.tld}</p>
              <p><span className='font-semibold'>Currencies: </span>{joinString(Object.values(country.currencies), 'name')}</p>
              <p><span className='font-semibold'>Languages: </span>{Object.values(country.languages).join(', ')}</p>
            </div>
          </div>

          {country.borders.length > 0 && (
            <div className='flex gap-2 items-center flex-wrap'>
              <span className='font-semibold'>Border Countries: </span>
              {country.borders.map(cca3 => (
                <Link href={cca3} key={cca3} className='bg-white dark:bg-dark-darkBlue py-1 px-4 rounded shadow-lg hover:brightness-95 dark:hover:brightness-105'>{cca3}</Link>
              ))}
            </div>)}
        </div>
      </section>
    </Layout>
  )
}
