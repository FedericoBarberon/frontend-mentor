
const API_URL = 'https://restcountries.com/v3.1'

export const getCountriesPaths = async () => {
  const res = await fetch(`${API_URL}/all?fields=name,cca3`)
  const countries = await res.json()
  const paths = countries.flatMap(country => {
    const path = [
      { params: { country: country.name.common } },
      { params: { country: country.name.official } }
    ]

    if (country.cca3) path.push({ params: { country: country.cca3 } })

    return path
  })

  return paths
}

export const getCountries = async () => {
  const res = await fetch(`${API_URL}/all?fields=name,flags,population,capital,region`)
  const countries = await res.json()

  return countries
}

export const getCountryByName = async (name) => {
  let endpoint

  if (name.length > 3) {
    endpoint = `name/${name}`
  } else {
    endpoint = `alpha/${name}`
  }

  const res = await fetch(`${API_URL}/${endpoint}?fields=name,flags,region,subregion,capital,languages,currencies,tld,population,borders`)
  const country = await res.json()

  if (Array.isArray(country)) return country[0]
  return country
}
