import { useEffect, useState } from 'react'

const PREFIX = 'restcountries-'

export const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState()

  useEffect(() => {
    setValue(() => {
      const jsonValue = window.localStorage.getItem(prefixedKey)

      if (jsonValue !== undefined) setValue(JSON.parse(jsonValue))

      if (typeof initialValue === 'function') initialValue()

      return initialValue
    })
  }, [])

  useEffect(() => {
    if (value === undefined) return

    window.localStorage.setItem(prefixedKey, value)
  }, [value, prefixedKey])

  return [value, setValue]
}
