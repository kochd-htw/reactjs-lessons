import React from 'react'

import Image from './Image'

const Home = () => {
  const headline = 'This is the headline.'
  const loading = true
  const images = ['image1', 'image2', 'image3']

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
      {/*
        Variables, as long as they are numbers, strings or booleans,
        can be rendered by enclosing them in {}
      */}
      <h1>
        {headline}
      </h1>
      {/*
        You can use expressions and logic operators inside the {}
        to make the render output flexible
      */}
      <div style={{ marginBottom: '10px' }}>
        {
          loading
            && <span>We are Loading</span>
        }
        {
          !loading
            && <span>This will not be shown</span>
        }
      </div>
      {/*
        You can iterate over arrays with the map function
        and return react components to be rendered.
      */}
      <div>
        {
          images.map(() => (
            <Image />
          ))
        }
      </div>
    </div>
  )
}

export default Home
