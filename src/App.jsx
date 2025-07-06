// App.js
import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}

export default App