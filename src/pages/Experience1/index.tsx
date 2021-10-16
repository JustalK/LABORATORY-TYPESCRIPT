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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  // Managing the change event of the React
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
  }

  const handleInput = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const handleBlur = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const handleFocus = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e.key)
  }

  const handleScrollDown = (e: WheelEvent) => {
    console.log(e.deltaY)
  }

  const handleClickEvent = (e: MouseEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    document.addEventListener('click', handleClickEvent)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('wheel', handleScrollDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('wheel', handleScrollDown)
      document.removeEventListener('click', handleClickEvent)
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
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onInput={handleInput}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </form>
    </div>
  )
}

export default Experience
