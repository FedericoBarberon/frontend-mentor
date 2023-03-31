import { useState } from 'react'

export const useFilters = (initialCountries) => {
  const [filteredCountries, setFilteredCountries] = useState(initialCountries)

  const changeFilters = (search, region) => {
    const newFilteredCountires = initialCountries.filter(country => {
      return (
        country.name.common.toLowerCase().includes(search.toLowerCase()) && (
          region === 'All' || !region || country.region === region
        )
      )
    })

    setFilteredCountries(newFilteredCountires)
  }

  return { filteredCountries, changeFilters }
}
