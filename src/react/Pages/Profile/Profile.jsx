import React from 'react'

import { Outlet } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'

const Profile = () => (
  <Stack
    sx={{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2
    }}
  >
    <Typography
      variant="h4"
    >
      Your Profile
    </Typography>
    <Stack
      width="100%"
      height="100%"
    >
      {/* Sub-Routes of /profile like /profile/settings will mount here */}
      <Outlet />
    </Stack>
  </Stack>
)

export default Profile
