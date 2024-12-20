import React from 'react'

import { Stack, Button } from '@mui/material'

import useRandomCatNameAsync from '../../../hooks/useRandomCatNameAsync'

const CatNames = () => {
  const { catName, refreshCatName } = useRandomCatNameAsync()

  return (
    <Stack
      sx={{
        flex: ' 1 1 auto',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2>Cat Name Generator</h2>
      <h4>
        {catName}
      </h4>
      <Button
        variant="contained"
        onClick={() => refreshCatName()}
      >
        Change Cat Name
      </Button>
    </Stack>
  )
}

export default CatNames
