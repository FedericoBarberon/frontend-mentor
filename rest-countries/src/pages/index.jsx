import CountryCard from '@/components/CountryCard'
import Filters from '@/components/Filters'
import Layout from '@/components/Layout'
import { useFilters } from '@/hooks/useFilters'
import { getCountries } from '@/services/countries'
import Head from 'next/head'

export async function getStaticProps () {
  const countries = await getCountries()

  return {
    props: {
      countries
    }
  }
}

export default function Home ({ countries }) {
  const { filteredCountries, changeFilters } = useFilters(countries)

  return (
    <Layout>
      <Head>
        <title>Where in the world?</title>
      </Head>

      <Filters changeFilters={changeFilters} />

      {filteredCountries.length > 0
        ? (
          <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-12 place-items-center'>
            {filteredCountries.map(country => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </section>)
        : <p className='mt-12'>There is no country with that name</p>}
    </Layout>
  )
}
