import React from 'react'
import Button from 'components/button'
import styles from './numberSelector.css'

const NumberSelector = ({
  btnValues,
  isDisabled,
  onClick
}) => {
  const buttons = btnValues.map((btn) => (
    <li key={ btn.text }>
      <Button
        isDisabled={ isDisabled || btn.isDisabled }
        onClick={ onClick }
        text={ btn.text }
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
