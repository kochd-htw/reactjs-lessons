import React, { useState } from 'react'

import GeoForm from './GeoForm'
import WeatherGraph from './WeatherGraph'

import useWeather from '../hooks/useWeather'

const Home = () => {
  const [lat, setLat] = useState('52.45')
  const [long, setLong] = useState('13.52')

  const { loading, weather } = useWeather(lat, long, 3000)

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
        Welcome to the best Weather-App on the internet.
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
          The current weather is:
        </h3>
        {
          loading
            && <b>Loading ...</b>
        }
        {
          (!loading && weather)
            && <WeatherGraph weather={weather} />
        }
      </div>
      <GeoForm
        lat={lat}
        long={long}
        onLatChange={setLat}
        onLongChange={setLong}
      />
    </div>
  )
}

export default Home
