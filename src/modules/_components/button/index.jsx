// Libs
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

// Styles
import styles from './button.css'

/** Button component description. */
const Button = ({ className, isDisabled, onClick, size, template, text }) => {
  const buttonClass = classNames(
    className,
    styles.button,
    styles[template],
    styles[size]
  )

  let button, iconTag, spanTag = null

  if (text) {
    spanTag = (
      <span className={ `color_alpha` }>
        { text }
      </span>
    )
  }
  button = (
    <button
      className={ buttonClass }
      disabled={ isDisabled }
      onClick={ () => onClick() }
    >
      { iconTag }
      { spanTag }
    </button>
  )
  return button
}

Button.propTypes = {
  /** Custom CSS component */
  className: PropTypes.string,
  /** height for icon */
  height: PropTypes.string,
  /** If the component has hollow */
  hollow: PropTypes.bool,
  /** href link component */
  href: PropTypes.string,
  /** Identify the control icon */
  iconName: PropTypes.oneOf(['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'CallContact', 'ChatContact', 'Close', 'CloseCircle', 'FavoriteComplete', 'FullScreen', 'Goto', 'HamburgerMenu', 'MailContact', 'More', 'Mute', 'NormalScreen', null, 'Pause', 'PauseCircle', 'Play', 'PlayCircle', 'Plus', 'ProgressCircle', 'Remove', 'Search', 'Share', 'Volume']),
  /** control of button enabled **/
  isDisabled: PropTypes.bool,
  /** If the component has hover effect */
  noHover: PropTypes.bool,
  /** Function onClick */
  onClick: PropTypes.func,
  /** Rel attribute for tag a */
  rel: PropTypes.oneOf(['nofollow', 'noreferrer', 'noopener', null]),
  /** Size of the coin */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /** Target link component */
  target: PropTypes.oneOf(['_self', '_blank']),
  /** Template component prototype */
  template: PropTypes.oneOf(['multisite', 'corporative', 'mitele']),
  /** Text of the Button */
  text: PropTypes.string,
  /** If the icon has white color */
  whiteColor: PropTypes.bool,
  /** width */
  width: PropTypes.string
}

Button.defaultProps = {
  className: null,
  height: '32px',
  hollow: false,
  iconName: null,
  isDisabled: false,
  noHover: false,
  onClick: null,
  rel: null,
  size: 'default',
  target: '_blank',
  template: 'multisite',
  text: null,
  whiteColor: true,
  width: '32px'
}

export default Button