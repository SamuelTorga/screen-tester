import React from 'react'
import './App.css'
import Router from './routes'
import {
  RouterProvider
} from 'react-router-dom'

function App (): JSX.Element {
  return (
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  )
}

export default App
