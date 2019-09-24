// Libs
import React from 'react'

/** Input component description. */
const Input = ({
  className,
  isDisabled,
  isHidden
}) => {
  const button = (
    <input
      className={ className }
      disabled={ isDisabled }
      hidden={ isHidden }
      type="text"
    />
  )
  return button
}

export default Input
