/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'

type ExperienceProps = {
  name: string,
  count?: number
}

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Experience = ({ name, count }: ExperienceProps): JSX.Element => (
  <div data-count={count}>{name}</div>
)

Experience.defaultProps = {
  count: 0
}

export default Experience
