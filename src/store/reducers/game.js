import * as actionTypes from '../types'
import { updateObject } from '../helpers'

const initialState = {
  btnValues: [],
  inputValues: [],
  isDisabled: false,
  isGameOver: false,
  moves: [],
  secretNumber: null,
  error: false
}

const setInitNewGame = (state, action) => ({
  ...state,
  ...{
    ...action,
    error: false
  }
})

const setClickHandler = (state, action) => updateObject(
  state,
  {
    btnValues: action.btnValues
  }
)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INITNEWGAME:
      return setInitNewGame(state, action)
    case actionTypes.SET_CLICKHANDLER:
      return setClickHandler(state, action)
    case actionTypes.SET_INITGAME_FAILED:
      return { ...state, ...{ error: true } }
    default:
      return state
  }
}

export default reducer
