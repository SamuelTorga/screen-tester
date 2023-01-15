import {
  createBrowserRouter
} from 'react-router-dom'

import Index from '../pages/Index'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  }
])

export default Router
