import React from 'react'

import {
  Stack,
  Typography,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material'

import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  Person4 as ProfileIcon
} from '@mui/icons-material'

import AppLogo from '../assets/favicon.svg'

const borderRadius = 6

const AppLayout = () => (
  <Stack
    direction="row"
    justifyContent="center"
    sx={{
      width: '100%',
      height: '100%',
      paddingTop: theme => theme.spacing(5),
      paddingBottom: theme => theme.spacing(5)
    }}
  >
    <Container
      maxWidth="xs"
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginBottom={2}
      >
        <img
          src={AppLogo}
          alt="App Logo"
          style={{
            width: '40px',
            height: '40px'
          }}
        />
        <Typography variant="h5">
          My Mobile Health App
        </Typography>
      </Stack>
      <Paper
        elevation={6}
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 2,
          paddingRight: 1,
          paddingBottom: 2,
          paddingLeft: 1,
          overflow: 'hidden',
          borderRadius: theme => theme.spacing(borderRadius),
          background: theme => theme.palette.grey[900]
        }}
      >
        <Stack
          flex="1 1 auto"
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            overflow: 'hidden',
            borderRadius: theme => theme.spacing(borderRadius),
            background: theme => theme.palette.background.paper
          }}
        >
          <Stack
            flex="1 1 auto"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h3">
              App Content
            </Typography>
          </Stack>
          <BottomNavigation
            showLabels
            value={0}
            sx={{ width: '100%' }}
          >
            <BottomNavigationAction
              label="Recents"
              icon={<RestoreIcon />}
            />
            <BottomNavigationAction
              label="Favorites"
              icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
              label="Profile"
              icon={<ProfileIcon />}
            />
          </BottomNavigation>
        </Stack>
      </Paper>
    </Container>
  </Stack>
)

export default AppLayout
