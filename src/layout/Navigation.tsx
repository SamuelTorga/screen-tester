import React, { useMemo } from 'react'

const Navigation: React.FC = () => {
  const links = useMemo(
    () =>
      [
        {
          url: '/angle',
          name: 'Angle',
        },
        {
          url: '/color-distance',
          name: 'Color Distance',
        },
        {
          url: '/defects',
          name: 'Defects',
        },
        {
          url: '/gamma',
          name: 'Gamma',
        },
        {
          url: '/gradients',
          name: 'Gradients',
        },
        {
          url: '/pattern',
          name: 'Pattern',
        },
        {
          url: '/response-time',
          name: 'Response Time',
        },
        {
          url: '/sharpness',
          name: 'Sharpness',
        },
        {
          url: '/uniformity',
          name: 'Uniformity',
        },
      ].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  )

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
