/**
 * The module managing the home page
 * @module Home
 */

import React, { useState, useRef } from 'react'
import Children from './Children'
/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Experience = (): JSX.Element => {
  const [val, setVal] = useState<boolean>(false)
  const myRef = useRef<HTMLButtonElement>(null)
  const handleCount = (count: number) => count
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Children
        handleCount={handleCount}
        handleClick={handleClick}
        setVal={setVal}
        myRef={myRef}
      />
      <div>{val}</div>
    </>
  )
}

export default Experience
