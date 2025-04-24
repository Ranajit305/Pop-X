import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
    </div>
  )
}

export default App