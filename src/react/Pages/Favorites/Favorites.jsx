import React from 'react'

import { Button } from '@mui/material'

import useRandomCatNameAsync from '../../../hooks/useRandomCatNameAsync'

const Favorites = () => {
  const { catName, refreshCatName } = useRandomCatNameAsync()

  return (
    <>
      <h5>Cat Name</h5>
      {catName}
      <Button onClick={() => refreshCatName()}>
        Change Cat Name
      </Button>
    </>
  )
}

export default Favorites
