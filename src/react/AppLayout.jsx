import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import {
  Stack,
  Typography,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material'

import {
  HealthAndSafety as HomeIcon,
  Pets as CatIcon,
  Person4 as ProfileIcon
} from '@mui/icons-material'

import AppRoutes from './AppRoutes'

import AppLogo from '../assets/favicon.svg'

const borderRadius = 6

const AppLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()

  let navigationIndex = 0
  if (location.pathname.startsWith('/catnames')) navigationIndex = 1
  if (location.pathname.startsWith('/profile')) navigationIndex = 2

  return (
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
            <AppRoutes />
            <BottomNavigation
              showLabels
              value={navigationIndex}
              sx={{ width: '100%' }}
            >
              <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                onClick={() => navigate('/')}
              />
              <BottomNavigationAction
                label="Cat Names"
                icon={<CatIcon />}
                onClick={() => navigate('/catnames')}
              />
              <BottomNavigationAction
                label="Profile"
                icon={<ProfileIcon />}
                onClick={() => navigate('/profile')}
              />
            </BottomNavigation>
          </Stack>
        </Paper>
      </Container>
    </Stack>
  )
}

export default AppLayout
