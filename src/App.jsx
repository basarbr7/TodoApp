import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'
import ProtecttedLayout from './layout/ProtecttedLayout'
import About from './pages/About'
import RootlayOut from './layout/RootlayOut'
import ErrorPage from './pages/ErrorPage'
import TodoList from './pages/TodoList'
import TodoDetails from './pages/TodoDetails'

const App = () => {
  return (
    <Routes>
      <Route element={<RootlayOut/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>} />

        <Route element={<ProtecttedLayout/>} >
          <Route path='/todolist' element={<TodoList/>} />
          <Route path='todolist/details/:id' element={<TodoDetails/>} />
        </Route>
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App