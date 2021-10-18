/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import useToggle from './useToggle'
/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Experience = (): JSX.Element => {
  const [val, setVal] = useToggle(true)

  return (
    <>
      <button type="button" onClick={() => setVal((c) => !!c)}>
        Change val
      </button>
      {val.toString()}
    </>
  )
}
export default Experience
