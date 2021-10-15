/**
 * The module managing the home page
 * @module Home
 */

import React, { useEffect } from 'react'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Experience = (): JSX.Element => {

  // Managing the onClick event
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target)
  }

  const handleClickAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
  }

  // Managing the change event of the React
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
  }

  const handleInput = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    console.log(e.key)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Test Click Event
      </button>
      <a href="#foo" onClick={handleClickAnchor}>
        Test Click on Anchor
      </a>
      <input onChange={handleChange} onInput={handleInput} />
    </div>
  )
}

export default Experience
