import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { get, ref, child } from 'firebase/database'
import { database } from '../firebase/initFirebase'
import { getGamesAction } from '../redux/products/actions'

const InitLayout = ({ children }) => {
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
      {children}
      <footer>f</footer>
    </>
  )
}

InitLayout.propTypes = {
  children: PropTypes.node
}

InitLayout.defaultProps = {
  children: null
}

export default InitLayout
