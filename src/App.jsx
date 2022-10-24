import { useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Spinner from './components/UI/Spinner/Spinner'
import ThemeBtn from './components/UI/ThemeBtn/ThemeBtn'
const Lending = lazy(() => import('./components/Lending/Lending'))
const Home = lazy(() => import('./components/Home/Home'))

const App = () => {

  const [state, setstate] = useState()

  return (
    <BrowserRouter>
      <div className='App'>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route exact path='/' element={<Lending />}/>
            <Route path='/home' element={<Home />} />
            </Routes>
          </Suspense>
          <ThemeBtn  />
        </div>
    </BrowserRouter>
  )
}

export default App