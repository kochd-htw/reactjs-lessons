import React, { useEffect, useState } from 'react'

import getRandomCatName from './catNames'

import Image from './Image'

const Home = () => {
  /*
    State in components needs to be synchronous.
    It is only allowed to change though props or via the useState hook.
    This way the react framework can predictably determine the state of a component and decide if the component
    needs to be re-rendered in the next render-cycle.
    Because we can't predict the timing of state changes due to things like events, user-inputs or calls to remote services,
    these so called side-effects need to be handled differently.
  */
  const [catName, setCatName] = useState(getRandomCatName())

  const catIds = [
    'FmTkbYVy0FSi4QBl',
    '8hJ4kU7EtjB8Y203',
    'JgWaCxZ0sz3yZ2Xz',
    '2uWNSTyOg2IVBcAL'
  ]

  // Start an asynchronous side-effect via useEffect hook.
  useEffect(() => {
    // This runs one time at the mounting (first creation) of the component.
    // It sets up an interval that changes the catName state every second.
    const interval = setInterval(() => setCatName(getRandomCatName()), 1000)

    // If we return a function from useEffect. Is will be called if the component is being un-mounted (destroyed).
    // This is useful to clean up listeners or cancel remote calls or timers.
    return () => clearInterval(interval)

    // The second parameter of useEffect is it's "dependency array".
    // The dependency array tells react when to re-execute the effect.
    // If it is empty, the effect only fires ones at component mounting.
  }, [])

  const handleChangeCOTD = () => {
    setCatName(getRandomCatName())
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
