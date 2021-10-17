/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'

type ExperienceProps = {
  handleCount: (count: number) => number,
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  setVal: React.Dispatch<React.SetStateAction<boolean>>,
  myRef: React.RefObject<HTMLButtonElement>
}

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Experience = ({
  handleCount,
  handleClick,
  setVal,
  myRef
}: ExperienceProps): JSX.Element => (
  <>
    <div>{handleCount(5)}</div>
    <button type="button" onClick={handleClick}>
      Button
    </button>
    <button
      type="button"
      ref={myRef}
      onClick={() => setVal((c: boolean) => !!c)}
    >
      Button SetVal
    </button>
  </>
)

export default Experience
