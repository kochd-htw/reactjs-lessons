import React from 'react'

import { Stack, Typography } from '@mui/material'

const Error404 = () => (
  <Stack
    flex="1 1 auto"
    justifyContent="center"
    alignItems="center"
  >
    <Typography
      variant="h5"
      color="error"
    >
      View is missing ... sorry!
    </Typography>
  </Stack>
)

export default Error404
