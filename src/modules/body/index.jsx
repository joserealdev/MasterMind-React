import React, { Component } from 'react'
import NumberSelector from 'components/numberSelector'
import InputDisplay from 'components/inputDisplay'
import styles from './body.css'

class Body extends Component {
  constructor(props) {
    super(props)

    const vMax = 9
    const vMin = 0
    const rndmNumbers = this.getRandomNumbers(vMin, vMax)

    this.state = {
      secretNumber: rndmNumbers,
      isDisabled: false
    }
  }

  getRandomNumbers = (vMin, vMax) => {
    const rndmNumbers = []
    while (rndmNumbers.length < 4) {
      const num = Math.floor(Math.random() * (vMax - vMin + 1) + vMin)
      if (rndmNumbers.indexOf(num) === -1) rndmNumbers.push(num)
    }
    return rndmNumbers
  }

  clickHandler = (val) => {
    console.log('CLICKKK', val)
    if (val > 5) {
      this.setState({
        isDisabled: true
      })
    }
  }

  render() {
    const { secretNumber, isDisabled } = this.state
    console.log(secretNumber)
    return (
      <div className={ styles.container }>
        <InputDisplay
          inputsToShow={ 4 }
        />
        <NumberSelector
          isDisabled={ isDisabled }
          onClick={ this.clickHandler }
        />
      </div>
    )
  }
}

export default Body
