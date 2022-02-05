import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { get, ref, child } from 'firebase/database'
import { database } from '../firebase/initFirebase'
import { getGamesAction } from '../redux/products/actions'
import App from '../App'

const InitLayout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getGames = async () => {
      const refDatabase = ref(database)

      try {
        const gamesList = await get(child(refDatabase, `games/`))
        if (gamesList.exists()) {
          console.log(gamesList.val())
          dispatch(getGamesAction(gamesList.val()))
        } else {
          console.log('No data available')
        }
      } catch (e) {
        console.log('e', e)
      }
    }

    getGames()
  }, [])

  return (
    <>
      <header>h</header>
      <App />
      <footer>f</footer>
    </>
  )
}

export default InitLayout
