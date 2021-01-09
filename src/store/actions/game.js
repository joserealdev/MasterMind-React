import { getButtonsValues, getInputValues, getRandomNumbers } from 'commons/helpers/main'
import * as actionTypes from '../types'

export const setNewGame = (gameParams) => ({
  type: actionTypes.SET_INITNEWGAME,
  ...gameParams
})

export const initGameFailed = (e) => ({
  type: actionTypes.SET_INITGAME_FAILED,
  error: e
})

export const setClickHandler = (params) => {
  console.log(params)
  return ({
    type: actionTypes.SET_CLICKHANDLER,
    ...params
  })
}

export const initNewGame = () => ((dispatch) => {
  const gameParams = {
    btnValues: getButtonsValues(),
    inputValues: getInputValues(),
    isDisabled: false,
    isGameOver: false,
    moves: [],
    secretNumber: getRandomNumbers()
  }
  dispatch(setNewGame(gameParams))
})
