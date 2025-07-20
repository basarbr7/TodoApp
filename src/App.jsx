import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'
import ProtecttedLayout from './layout/ProtecttedLayout'
import About from './pages/About'
import RootlayOut from './layout/RootlayOut'
import ErrorPage from './pages/ErrorPage'
import TodoDetails from './pages/TodoDetails'
import Todos from './pages/Todos'
import TodoList from './pages/TodoList'
import AddTodo from './pages/AddTodo'
import UpdateTodo from './pages/UpdateTodo'

const App = () => {
  return (
    <Routes>
      <Route element={<RootlayOut/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>} />

        <Route element={<ProtecttedLayout/>} >
          <Route path='/todos' element={<Todos/>}>
            <Route index element={<TodoList/>} />
            <Route path='addtodo' element={<AddTodo/>} />
            <Route path='updatetodo' element={<UpdateTodo/>} />
            <Route path='details/:id' element={<TodoDetails/>} />
          </Route>
        </Route>
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App