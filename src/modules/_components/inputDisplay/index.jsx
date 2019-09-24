import React from 'react'
import Input from 'components/input'
import styles from './inputDisplay.css'

const InputDisplay = ({
  inputsToShow
}) => {
  const inputs = []

  for (let x = 0; x < inputsToShow; x += 1) {
    inputs.push(
      (
        <li key={ x }>
          <Input
            className={ styles.input }
            isDisabled={ true }
          />
        </li>
      )
    )
  }

  return (
    <div className={ styles.container }>
      <ul>
        { inputs }
      </ul>
    </div>
  )
}

export default InputDisplay
