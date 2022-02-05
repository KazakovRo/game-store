import { GET_GAMES } from './types'

const initialState = {
  games: []
}

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES:
      return { ...state, games: payload }

    default:
      return state
  }
}

export default productsReducer
