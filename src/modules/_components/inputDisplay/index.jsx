import React from 'react'
import Input from '../input'
import styles from './inputDisplay.css'

const InputDisplay = ({
  inputs
}) => {
  const inputList = inputs.map((inp) => (
    <li key={ inp.id }>
      <Input
        className={ styles.input }
        isDisabled={ true }
        value={ inp.text }
      />
    </li>
  ))

  return (
    <div className={ styles.container }>
      <ul>
        { inputList }
      </ul>
    </div>
  )
}

export default InputDisplay
