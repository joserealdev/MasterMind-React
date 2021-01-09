// Libs
import React from 'react'

/** Input component description. */
const Input = ({
  className,
  isDisabled,
  isHidden,
  value
}) => {
  const button = (
    <input
      className={ className }
      disabled={ isDisabled }
      hidden={ isHidden }
      type="text"
      value={ value }
    />
  )
  return button
}

export default Input
