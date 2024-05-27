import React from 'react'
import ReactDOM from 'react-dom/client'

import { initializeApp } from 'firebase/app'

import Home from './react/Home'

// REPLACE WITH YOUR OWN FIREBASE PROJECT KEYS
// I WILL REVOKE THIS KEY SOON!
const firebaseConfig = {
  apiKey: 'AIzaSyAyo228op2lFfIYdJGAV8TW9OfHGat05Z4',
  authDomain: 'htw-test-app.firebaseapp.com',
  projectId: 'htw-test-app',
  storageBucket: 'htw-test-app.appspot.com',
  messagingSenderId: '595902203417',
  appId: '1:595902203417:web:7960de93b6b31acea84c88',
  measurementId: 'G-HB7N8XCPB0'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const rootDomElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootDomElement)

// We use createElement to make this a pure JavaScript file,
// because we don't like JSX in our .js files ;)
root.render(React.createElement(Home))
