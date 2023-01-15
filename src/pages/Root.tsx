import React from 'react'

const Root: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href={'/angle'}>Angle</a>
        </li>
        <li>
          <a href={'/color-distance'}>Color Distance</a>
        </li>
        <li>
          <a href={'/defects'}>Defects</a>
        </li>
        <li>
          <a href={'/gamma'}>Gamma</a>
        </li>
        <li>
          <a href={'/gradients'}>Gradients</a>
        </li>
        <li>
          <a href={'/pattern'}>Pattern</a>
        </li>
        <li>
          <a href={'/response-time'}>Response Time</a>
        </li>
        <li>
          <a href={'/sharpness'}>Sharpness</a>
        </li>
        <li>
          <a href={'/uniformity'}>Uniformity</a>
        </li>
      </ul>
    </nav>
  )
}

export default Root
