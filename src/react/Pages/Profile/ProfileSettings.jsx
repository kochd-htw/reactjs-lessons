import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Typography, Button, Stack, TextField } from '@mui/material'

import {
  ArrowBack as BackIcon,
  Save as SaveIcon
} from '@mui/icons-material'

import ProfileContext from '../../Components/ProfileContext'

const ProfileSettings = () => {
  const navigate = useNavigate()

  // The context ensures to always return an object, so we can safely destructure it here.
  const { name, changeName } = useContext(ProfileContext)

  // Initialize newName with the state from context.
  const [newName, setNewName] = useState(name)

  const handleSaveName = () => {
    // Update the profile context with the new name.
    changeName(newName)
    navigate('/profile')
  }

  return (
    // This is a React Fragment. It is a virtual React Component that will not render a HTML-DOM-Element
    // We need to use it here, because we want to render two Components (Typography, Button) with no parent around them.
    <>
      <Typography
        variant="h4"
      >
        Here are your Settings
      </Typography>

      <Stack sx={{ marginY: 4 }}>
        <TextField
          label="Change your name"
          name="name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <Button
          variant="text"
          startIcon={<BackIcon />}
          onClick={() => navigate('/profile')}
        >
          Go back
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={handleSaveName}
        >
          Save
        </Button>
      </Stack>
    </>
  )
}

export default ProfileSettings
