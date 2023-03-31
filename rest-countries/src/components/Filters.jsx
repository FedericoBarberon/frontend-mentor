import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'

const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default function Filters ({ changeFilters }) {
  const [search, setSearch] = useState('')
  const [regionSelected, setRegionSeleced] = useState('')

  const handleRegionChange = (e) => setRegionSeleced(e.target.value)
  const handleSearchChange = (e) => setSearch(e.target.value)

  useEffect(() => {
    changeFilters(search, regionSelected)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, regionSelected])

  return (
    <section className='flex flex-col sm:flex-row justify-between gap-8'>
      <div className='bg-white dark:bg-dark-darkBlue shadow-[0_0_5px_#00000033] p-4 w-full sm:w-80 rounded flex gap-2 items-center'>
        <AiOutlineSearch className='w-5' />
        <input value={search} onChange={handleSearchChange} placeholder='Search for a country...' className='bg-transparent w-full border-b-[1px] border-transparent focus:border-opacity-50 focus:outline-none focus:border-black dark:focus:border-white' />
      </div>

      <div className='bg-white dark:bg-dark-darkBlue shadow-[0_0_5px_#00000033] px-4 w-60 rounded'>
        <select className='bg-white dark:bg-dark-darkBlue focus:outline-none w-full py-4 text-inherit dark:text-white' value={regionSelected} onChange={handleRegionChange}>
          <option disabled hidden value=''>Filter by regions</option>
          {REGIONS.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
    </section>
  )
}
