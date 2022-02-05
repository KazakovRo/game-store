import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import InitLayout from './layouts/InitLayout'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <InitLayout />
  </Provider>,
  document.getElementById('root')
)
