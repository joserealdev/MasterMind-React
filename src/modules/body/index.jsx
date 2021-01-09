import React, { Component } from 'react'
import { connect } from 'react-redux'
import NumberSelector from 'components/numberSelector'
import InputDisplay from 'components/inputDisplay'
import Button from 'components/button'
import MovesTable from 'components/movesTable'
import Loading from 'components/loading'
import LITERALS from 'commons/constants/literals'
import { getButtonsValues, getInputValues } from 'commons/helpers/main'
import * as actions from 'store/actions/game'
import styles from './body.css'

class Body extends Component {
  constructor(props) {
    super(props)

    this.resetGame = this.resetGame.bind(this)
  }

  componentDidMount() {
    const { onInitGame } = this.props
    onInitGame()
  }

  resetGame = () => {
    const { onInitGame } = this.props
    onInitGame()
  }

  checkAnswer = () => {
    const {
      inputValues, moves, secretNumber, setClickHandler
    } = this.props

    const hitsbin = []
    const move = inputValues.map((value) => value.text).join('')
    let correct = 0
    let coinc = 0

    secretNumber.forEach((number, i) => {
      if (`${number}` === inputValues[i].text) {
        correct += 1
        hitsbin[i] = 1
      }
    })
    const end = correct === secretNumber.length

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
    }

    moves.unshift({
      id: moves.length,
      combination: move,
      correctPosition: correct,
      coincidence: coinc
    })

    if (!end) {
      setClickHandler({
        btnValues: getButtonsValues(),
        inputValues: getInputValues(),
        moves,
        isDisabled: false
      })
    } else {
      setClickHandler({
        isGameOver: true
      })
    }
  }

  clickHandler = (val) => {
    const { btnValues, inputValues, setClickHandler } = this.props

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

    setClickHandler({
      btnValues,
      inputValues,
      isDisabled: inputValues[inputValues.length - 1].text.length > 0
    })
  }

  render() {
    const {
      btnValues,
      inputValues,
      isDisabled,
      isGameOver,
      moves,
      secretNumber
    } = this.props

    if (!secretNumber) {
      return (
        <div className={ styles.container }>
          <Loading />
        </div>
      )
    }

    const lastMovement = moves[0] ? (
      <div>
        {LITERALS.LASTMOVEMENT}
        <div>
          {LITERALS.COMBINATION}
          <span>{moves[0].combination}</span>
        </div>
        <div>
          {LITERALS.CORRECTPOSITION}
          <span>{moves[0].correctPosition}</span>
        </div>
        <div>
          {LITERALS.COINCIDENCE}
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
          onClick={ isGameOver ? this.resetGame : this.checkAnswer }
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

const mapStateToProps = (state) => ({
  btnValues: state.game.btnValues,
  inputValues: state.game.inputValues,
  isDisabled: state.game.isDisabled,
  isGameOver: state.game.isGameOver,
  moves: state.game.moves,
  secretNumber: state.game.secretNumber,
  error: state.game.error
})

const mapDispatchToProps = (dispatch) => ({
  onInitGame: () => dispatch(actions.initNewGame()),
  setClickHandler: (params) => dispatch(actions.setClickHandler(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)
