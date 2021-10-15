/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Experience = (): JSX.Element => {
  // Managing the onClick event
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target)
  }

  // Managing the change event of the React
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Test Click Event
      </button>
      <input onChange={handleChange} />
    </div>
  )
}

export default Experience
