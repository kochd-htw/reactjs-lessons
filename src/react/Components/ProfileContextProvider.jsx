import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import ProfileContext from './ProfileContext'

const DEFAULT_NAME = 'Anonymous'

const ProfileContextProvider = ({ children }) => {
  // A context-provider manages the state of the context.
  // It can load the state from databases, APIs or defaults.
  // It also provides setters for the context consumers to enable them to manipulate the states.
  const [name, setName] = useState(DEFAULT_NAME)

  // The context must be stable across rerenders to avoid endless-loops.
  // You can use the useMemo hook to achieve this.
  // Make sure to put all state-variables and -setters in the dependency array,
  // so the context is refreshed if they change.
  const context = useMemo(() => ({ name, changeName: setName }), [name, setName])

  console.log(context)

  return (
    <ProfileContext.Provider value={context}>
      {children}
    </ProfileContext.Provider>
  )
}

// A context-provider is only useful if it has children, so we make them required.
ProfileContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProfileContextProvider
