import { useState, useEffect } from 'react'

// Fake a great network delay, so we can observe the effect.
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

// Hooks always star with "use".
// They can contain other hooks.
const useWeather = (lat, long, waitInMS = 5000) => {
  // Internal state of the hook.
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState()

  // The async logic of this hook.
  // It fetches data from a remote api and communicates it's progress through useState hooks.
  const fetchWeather = async () => {
    setLoading(true)

    await wait(waitInMS)
    const r = await fetch(`https://api.open-meteo.com/v1/dwd-icon?latitude=${lat}&longitude=${long}&hourly=temperature_2m`)
    const weather = await r.json()

    setWeather(weather)
    setLoading(false)
  }

  // This effect has the parameters of the hook in it's dependency array.
  // It will retrigger the async function "fetchWeather" every time one or more parameters change.
  useEffect(() => {
    if (lat && long) {
      fetchWeather()
    }
  }, [lat, long])

  // The hook returns the result of its operations in a JavaScript Object.
  // In this case the Object is used like a key-value store.
  // This is a very common use-case of objects in JavaScript.
  return { loading, weather }
}

export default useWeather
