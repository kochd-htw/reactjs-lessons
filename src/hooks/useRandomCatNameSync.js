import { useState } from 'react'

const useRandomCatNameSync = () => {
  const [catName, setCatName] = useState('Lilly')

  return {
    catName,
    setCatName
  }
}

export default useRandomCatNameSync
