import React from 'react'

const GeoForm = ({ lat, long, onLatChange, onLongChange }) => (
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
          width: '50px'
        }}
      >
        Lat:
      </span>
      <input
        type="text"
        value={lat}
        onChange={e => onLatChange(e.target.value)}
      />
    </div>
    <div>
      <span
        style={{
          display: 'inline-block',
          width: '50px'
        }}
      >
        Long:
      </span>
      <input
        type="text"
        value={long}
        onChange={e => onLongChange(e.target.value)}
      />
    </div>
  </div>
)

export default GeoForm
