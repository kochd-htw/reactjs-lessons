import { useState } from 'react'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// Hooks always star with "use".
// They can contain other hooks.
const useFirebaseAuth = () => {
  // Internal state of the hook.
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()

  // The async logic of this hook.
  // It fetches data from a remote api and communicates it's progress through useState hooks.
  const loginUser = async (username, password) => {
    setLoading(true)

    const r = await signInWithEmailAndPassword(getAuth(), username, password)
    setUser(r.user)
    // const weather = await r.json()

    // setUser(newUser)
    setLoading(false)
  }

  // The hook returns the result of its operations in a JavaScript Object.
  // In this case the Object is used like a key-value store.
  // This is a very common use-case of objects in JavaScript.
  return { loading, user, loginUser }
}

export default useFirebaseAuth
