import { createContext } from 'react'

// By initializing the context with an empty object, we allow all context-consumers
// to destructure the context value safely.
const ProfileContext = createContext()

export default ProfileContext
