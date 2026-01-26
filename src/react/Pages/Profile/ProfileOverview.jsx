import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { Stack, Button, Typography } from '@mui/material'
import { AppSettingsAlt as SettingsIcon } from '@mui/icons-material'

import ProfileContext from '../../Components/ProfileContext'

const ProfileOverview = () => {
  const navigate = useNavigate()

  // The context ensures to always return an object, so we can safely destructure it here.
  const { name } = useContext(ProfileContext)

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant="h4"
        color="primary"
        gutterBottom
      >
        {`Hello ${name}!`}
      </Typography>
      <Button
        variant="contained"
        startIcon={<SettingsIcon />}
        onClick={() => navigate('/profile/settings')}
      >
        Go to Settings
      </Button>
    </Stack>
  )
}

export default ProfileOverview
