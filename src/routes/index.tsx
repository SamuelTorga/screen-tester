import { createBrowserRouter } from 'react-router-dom'

import {
  Angle,
  ColorDistance,
  Defects,
  Gamma,
  Gradients,
  Pattern,
  ResponseTime,
  Sharpness,
  Uniformity,
} from '../pages'
import Root from '../pages/Root'
import NotFound from '../pages/Error'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: '/angle',
    element: <Angle />,
  },
  {
    path: '/color-distance',
    element: <ColorDistance />,
  },
  {
    path: '/defects',
    element: <Defects />,
  },
  {
    path: '/gamma',
    element: <Gamma />,
  },
  {
    path: '/gradients',
    element: <Gradients />,
  },
  {
    path: '/pattern',
    element: <Pattern />,
  },
  {
    path: '/response-time',
    element: <ResponseTime />,
  },
  {
    path: '/sharpness',
    element: <Sharpness />,
  },
  {
    path: '/uniformity',
    element: <Uniformity />,
  },
])

export default Router
