import React, { useState } from 'react'

import LoginForm from './LoginForm'

import useFirebaseAuth from '../hooks/useFirebaseAuth'

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
        {/*
          You can use this pattern, if the variable you want to access a member of
          (in this case "user") can be undefined at some point.
          This is equivalent to: if (user !== undefined) return user.email
        */}
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
