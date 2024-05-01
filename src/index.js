import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './react/Home'

const rootDomElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootDomElement)

// We use createElement to make this a pure JavaScript file,
// because we don't like JSX in our .js files ;)
root.render(React.createElement(Home))
