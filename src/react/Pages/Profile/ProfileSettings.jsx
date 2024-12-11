import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Typography, Button } from '@mui/material'
import { ArrowBack as BackIcon } from '@mui/icons-material'

const ProfileSettings = () => {
  const navigate = useNavigate()

  return (
    // This is a React Fragment. It is a virtual React Component that will not render a HTML-DOM-Element
    // We need to use it here, because we want to render two Components (Typography, Button) with no parent around them.
    <>
      <Typography
        variant="h4"
      >
        Here are your Settings
      </Typography>
      <Button
        variant="contained"
        startIcon={<BackIcon />}
        onClick={() => navigate('/profile')}
      >
        Go back to Profile Overview
      </Button>
    </>
  )
}

export default ProfileSettings
