import React, { useState } from 'react'

import catNames from './catNames'

import Image from './Image'

const Home = () => {
  /*
    Components can be thought of as state-machines.
    They hold a state and change their behaviour and render-output depending on it.
    In order for your component to re-render after a state change, you must use a
    react hook called useState
  */
  const [catName, setCatName] = useState(catNames())

  const catIds = [
    'FmTkbYVy0FSi4QBl',
    '8hJ4kU7EtjB8Y203',
    'JgWaCxZ0sz3yZ2Xz',
    '2uWNSTyOg2IVBcAL'
  ]

  const handleChangeCOTD = () => {
    setCatName(catNames())
  }

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
        Welcome to the best Cat-App on the internet.
      </h1>
      <h3>
        {`Cat-Of-The-Day is "${catName}"`}
      </h3>
      <div
        style={{
          marginTop: '15px',
          marginBottom: '15px'
        }}
      >
        <button onClick={handleChangeCOTD}>
          Get another cat-of-the-day
        </button>
      </div>
      <div
        style={{
          display: 'flex'
        }}
      >
        {
          catIds.map(catId => (
            /*
              State can also propagated down the component tree to other components.
              The syntax is the same as in HTML-Element's attributes.
              In react these attributes are called props.
            */
            <Image src={`https://cataas.com/cat/${catId}?type=square`}>
              <h5 style={{ marginTop: '5px' }}>
                <i>
                  {`Cat Id: ${catId}`}
                </i>
              </h5>
            </Image>
          ))
        }
      </div>
    </div>
  )
}

export default Home
