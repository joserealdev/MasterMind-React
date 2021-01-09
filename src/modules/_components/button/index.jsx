// Libs
import React from 'react'
import classNames from 'classnames/bind'
import styles from './button.css'

const cx = classNames.bind(styles)

/** Button component description. */
const Button = ({
  className,
  isDisabled,
  isHidden,
  onClick,
  text
}) => {
  const btnStyle = classNames(
    className,
    cx({
      button: true,
      btnDisabled: isDisabled
    })
  )
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
      className={ btnStyle }
      disabled={ isDisabled }
      hidden={ isHidden }
      onClick={ onClick ? () => onClick(text) : null }
      type="button"
    >
      { spanTag }
    </button>
  )
  return button
}

export default Button
