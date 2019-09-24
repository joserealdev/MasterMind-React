import React from 'react'
import Button from 'components/button'
import classNames from 'classnames/bind'
import styles from './numberSelector.css'

const cx = classNames.bind(styles)

const NumberSelector = ({
  isDisabled,
  onClick
}) => {
  const btnStyles = cx({
    btn: true,
    btnDisabled: isDisabled
  })
  const btnValues = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']
  const buttons = btnValues.map((val) => (
    <li key={ val }>
      <Button
        className={ btnStyles }
        isDisabled={ isDisabled }
        onClick={ onClick }
        text={ val }
      />
    </li>
  ))

  return (
    <div className={ styles.container }>
      <ul>
        { buttons }
      </ul>
    </div>
  )
}

export default NumberSelector
