import React from 'react'

import logo from '../assets/react-logos/react-logo-1.png'

/*
  Every react component is called with one parameter (the props).
  The props are guaranteed to be a JavaScript object.
  They hold all props that where set by the components parent and
  a special prop called "children".
  Children are a renderable collection of react-nodes. They are the "content"
  of the component.

  In this example the "MyComponent" would receive the h1 as it's children.
  Children can be rendered by putting them in {} like other variables. 
  <MyComponent>
    <h1>Hi</h1>
  </MyComponent>
*/
const Image = ({ src, children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <img
      src={src}
      alt="logo"
      style={{
        width: '200px',
        height: 'auto',
        margin: '5px'
      }}
    />
    {children}
  </div>
)

export default Image
