import { useState } from 'react'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const useFirebaseAuth = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()

  // This is the action that the hook performs. It will NOT trigger automatically.
  const loginUser = async (username, password) => {
    setLoading(true)

    const r = await signInWithEmailAndPassword(getAuth(), username, password)
    setUser(r.user)

    setLoading(false)
  }

  // We return the state of the hook AND the action,
  // so we can call the action in the component that uses this hook.
  return { loading, user, loginUser }
}

export default useFirebaseAuth
