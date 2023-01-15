import React from 'react'

import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute
} from 'react-router-dom'

type RouteProps = {
  isPrivate?: boolean
  component: React.FC
} & ReactDOMRouteProps

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  return (
      <ReactDOMRoute
        {...rest}
        element={<Component />}
      />
  )
}

export default Route
