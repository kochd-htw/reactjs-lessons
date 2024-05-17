import React from 'react'

const LoginForm = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onLoginClicked
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <div style={{ marginBottom: '5px' }}>
      <span
        style={{
          display: 'inline-block',
          width: '100px'
        }}
      >
        Username:
      </span>
      <input
        type="text"
        value={username}
        onChange={e => onUsernameChange(e.target.value)}
      />
    </div>
    <div>
      <span
        style={{
          display: 'inline-block',
          width: '100px'
        }}
      >
        Password:
      </span>
      <input
        type="password"
        value={password}
        onChange={e => onPasswordChange(e.target.value)}
      />
    </div>
    <button
      type="button"
      onClick={onLoginClicked}
    >
      Login
    </button>
  </div>
)

export default LoginForm
