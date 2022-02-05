import { React, Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InitLayout from '../layouts/InitLayout'
import store from '../redux/store'

const Test = lazy(() => import('../pages/Test/Test'))
const ProductList = lazy(() => import('../pages/ProductList/ProductList'))

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <InitLayout>
          <Suspense fallback={'<Loader height="100vh" />'}>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </Suspense>
        </InitLayout>
      </Provider>
    </BrowserRouter>
  )
}

export default MainRouter
