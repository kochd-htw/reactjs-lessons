import React, { useState } from 'react'

import LoginForm from './LoginForm'

import useFirebaseAuth from '../hooks/useFirebaseAuth'

// import useWeather from '../hooks/useWeather'

const Home = () => {
  const [username, setUsername] = useState('')
  const [password, setPassord] = useState('')

  const { loading, user, loginUser } = useFirebaseAuth()

  const handleLogin = () => {
    loginUser(username, password)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <h1>
        Welcome to the best Auth-App on the internet:
        {user?.email}
      </h1>
      <div
        style={{
          width: '66%',
          padding: '15px',
          marginBottom: '10px',
          background: '#89cff0',
          borderRadius: '15px'
        }}
      >
        <h3 style={{ margin: 0 }}>
          Please login
        </h3>
        {
          loading
            && <b>Loading ...</b>
        }
        {/* {
          !loading
            && <WeatherGraph weather={weather} />
        } */}
      </div>
      <LoginForm
        username={username}
        password={password}
        onUsernameChange={setUsername}
        onPasswordChange={setPassord}
        onLoginClicked={handleLogin}
      />
    </div>
  )
}

export default Home
