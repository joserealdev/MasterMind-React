import React, { Component } from 'react'
import NumberSelector from 'components/numberSelector'
import InputDisplay from 'components/inputDisplay'
import Button from 'components/button'
import MovesTable from 'components/movesTable'
import { getButtonsValues, getInputValues, getRandomNumbers } from 'commons/helpers/main'
import LITERALS from 'commons/constants/literals'
import styles from './body.css'

class Body extends Component {
  constructor(props) {
    super(props)

    this.resetGame = this.resetGame.bind(this)
    const rndmNumbers = getRandomNumbers()

    this.state = {
      secretNumber: rndmNumbers,
      isDisabled: false,
      btnValues: getButtonsValues(),
      inputValues: getInputValues(),
      moves: [],
      isGameOver: false
    }
  }

  resetGame = (rndmNumbers) => {
    this.setState({
      secretNumber: rndmNumbers,
      isDisabled: false,
      btnValues: getButtonsValues(),
      inputValues: getInputValues(),
      moves: [],
      isGameOver: false
    })
  }

  checkAnswer = () => {
    const {
      inputValues,
      secretNumber,
      moves
    } = this.state

    const hitsbin = []
    let end = false
    const move = inputValues.map((value) => value.text).join('')
    let correct = 0
    let coinc = 0

    secretNumber.forEach((number, i) => {
      if (`${number}` === inputValues[i].text) {
        correct += 1
        hitsbin[i] = 1
      }
    })

    if (correct < secretNumber.length) {
      secretNumber.forEach((number, i) => {
        if (hitsbin[i] !== 1) {
          if (hitsbin[i] !== 1) {
            for (let y = 0; y < inputValues.length; y += 1) {
              if (inputValues[y].text === `${number}` && hitsbin[y] !== 1) {
                coinc += 1
                break
              }
            }
          }
        }
      })
    } else {
      end = true
    }

    moves.unshift({
      id: moves.length,
      combination: move,
      correctPosition: correct,
      coincidence: coinc
    })

    if (!end) {
      this.setState({
        btnValues: getButtonsValues(),
        inputValues: getInputValues(),
        moves,
        isDisabled: false
      })
    } else {
      this.setState({
        isGameOver: true
      })
    }
  }

  clickHandler = (val) => {
    const { btnValues, inputValues } = this.state

    for (let x = 0; x < btnValues.length; x += 1) {
      if (btnValues[x].text === val) {
        btnValues[x].isDisabled = true
        break
      }
    }
    for (let x = 0; x < inputValues.length; x += 1) {
      if (inputValues[x].text.length === 0) {
        inputValues[x].text = val
        break
      }
    }
    this.setState({
      btnValues,
      inputValues,
      isDisabled: inputValues[inputValues.length - 1].text.length > 0
    })
  }

  playAgain = () => {
    const rndmNumbers = getRandomNumbers()
    this.resetGame(rndmNumbers)
  }

  render() {
    const {
      btnValues,
      inputValues,
      isDisabled,
      moves,
      isGameOver
    } = this.state

    const lastMovement = moves[0] ? (
      <div>
        {LITERALS.LASTMOVEMENT}
        <div>
          {`${LITERALS.COMBINATION}: `}
          <span>{moves[0].combination}</span>
        </div>
        <div>
          {`${LITERALS.CORRECTPOSITION}: `}
          <span>{moves[0].correctPosition}</span>
        </div>
        <div>
          {`${LITERALS.COINCIDENCE}: `}
          <span>{moves[0].coincidence}</span>
        </div>
      </div>
    ) : null

    return (
      <div className={ styles.container }>
        <InputDisplay
          inputs={ inputValues }
        />
        <NumberSelector
          btnValues={ btnValues }
          isDisabled={ isDisabled }
          onClick={ this.clickHandler }
        />
        <Button
          className={ styles.actionButton }
          isDisabled={ inputValues[inputValues.length - 1].text.length === 0 }
          onClick={ isGameOver ? this.playAgain : this.checkAnswer }
          text={ isGameOver ? LITERALS.PLAYAGAIN : LITERALS.CHECK }
        />
        {lastMovement}
        <MovesTable
          moves={ moves }
        />
      </div>
    )
  }
}

export default Body
