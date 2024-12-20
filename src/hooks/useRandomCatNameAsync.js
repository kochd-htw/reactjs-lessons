import { useState } from 'react'

const useRandomCatNameAsync = () => {
  const [catName, setCatName] = useState('Lilly')

  const refreshCatName = async () => {
    const result = await fetch('https://tools.estevecastells.com/api/cats/v1')
    const catNameArray = await result.json()
    setCatName(catNameArray[0])
  }

  return {
    catName,
    refreshCatName
  }
}

export default useRandomCatNameAsync
