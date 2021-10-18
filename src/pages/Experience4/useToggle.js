import React, { useState, useCallback } from 'react'

const useToggle = (
  initialState = false
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [state, setState] = useState(initialState)

  const isToggle = useCallback(() => {
    setState((c) => !c)
  }, [state])

  return [state, isToggle]
}

export default useToggle
