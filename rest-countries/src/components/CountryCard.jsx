import Image from 'next/image'
import Link from 'next/link'

export default function CountryCard ({ country }) {
  return (
    <article className='bg-white dark:bg-dark-darkBlue rounded overflow-hidden shadow-[0_0_5px_#00000033] cursor-pointer hover:scale-105 hover:brightness-95 dark:hover:brightness-105 transition-transform w-full max-w-[350px] h-full'>
      <Link href={`country/${country.name.common}`}>
        <Image src={country.flags.svg} alt={country.flags.alt} width={250} height={125} className='aspect-video object-cover w-full' />
        <div className='p-6 flex flex-col gap-3'>
          <h2 className='text-xl font-bold'>{country.name.common}</h2>

          <div>
            <p className='text-sm'><span className='font-semibold'>Population: </span>{country.population.toLocaleString()}</p>
            <p className='text-sm'><span className='font-semibold'>Region: </span>{country.region}</p>
            {country.capital.length > 0 && (
              <p className='text-sm'><span className='font-semibold'>Capital: </span>{country.capital.join(', ')}</p>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}
