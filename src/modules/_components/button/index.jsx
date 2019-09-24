// Libs
import React from 'react'

/** Button component description. */
const Button = ({
  className,
  isDisabled,
  isHidden,
  onClick,
  text
}) => {
  let spanTag = null

  if (text) {
    spanTag = (
      <span>
        { text }
      </span>
    )
  }
  const button = (
    <button
      className={ className }
      disabled={ isDisabled }
      hidden={ isHidden }
      onClick={ () => onClick(text) }
      type="button"
    >
      { spanTag }
    </button>
  )
  return button
}

export default Button
