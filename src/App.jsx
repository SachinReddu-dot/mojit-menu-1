import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Auth from './Pages/Auth'
import Login from './Components/Auth/Login'
import Breakfast from './Components/Home/Breakfast'
import MainCourse from './Components/Home/MainCourse'

const App = () => {
  return (
    <>
      <Routes>

        <Route path='/auth' element={<Auth />}>
          <Route path='login' element={<Login />}/>
        </Route>

        <Route path='/' element={<Home />}>
          <Route path='breakfast' element={<Breakfast />}/>
          <Route path='mainCourse' element={<MainCourse />}/>
        </Route>

      </Routes>
    </>
  )
}

export default App