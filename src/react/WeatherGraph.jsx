import React from 'react'

const WeatherGraph = ({ weather }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: '10px',
      paddingBottom: '10px',
      overflowX: 'scroll'
    }}
  >
    {
      weather.hourly.time.slice(0, 24).map((dateTime, index) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '0 0 auto',
            width: '150px',
            height: '100%',
            margin: '3px',
            paddingTop: '10px',
            paddingBottom: '10px',
            borderRadius: '5px',
            background: 'yellow'
          }}
        >
          <h3
            style={{
              margin: 0,
              marginBottom: '5px'
            }}
          >
            <b>
              {`${weather.hourly.temperature_2m[index]} ${weather.hourly_units.temperature_2m}`}
            </b>
          </h3>
          <span style={{ fontFamily: 'monospace' }}>
            {`hour: ${new Date(dateTime).getHours()} - ${new Date(dateTime).getHours() + 1}`}
          </span>
        </div>
      ))
    }
  </div>
)

export default WeatherGraph
