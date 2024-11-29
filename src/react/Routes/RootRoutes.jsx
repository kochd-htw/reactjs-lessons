import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from '../Pages/LandingPage/LandingPage'

const RootRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </Router>
)

export default RootRoutes
