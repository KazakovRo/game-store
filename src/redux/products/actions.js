import { GET_GAMES } from './types'

const getGamesAction = payload => ({
  type: GET_GAMES,
  payload
})

export { getGamesAction }
