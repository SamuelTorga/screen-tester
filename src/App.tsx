import React from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom'

import Router from './routes'

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  )
}

export default App
