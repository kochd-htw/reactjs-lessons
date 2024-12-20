import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Favorites from './Pages/Favorites/Favorites'
import Profile from './Pages/Profile/Profile'
import ProfileOverview from './Pages/Profile/ProfileOverview'
import ProfileSettings from './Pages/Profile/ProfileSettings'

import Error404 from './Pages/Error404'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />}>
      <Route path="" element={<ProfileOverview />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Route>
    <Route path="/favorites" element={<Favorites />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default AppRoutes
