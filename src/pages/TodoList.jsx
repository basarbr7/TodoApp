import React, { useEffect } from 'react'
import { useGetTodosQuery } from '../redux/todosApi'
import { Link, Outlet } from 'react-router-dom'

const TodoList = () => {
  const userId = localStorage.getItem('userId')
  const { data }= useGetTodosQuery(userId)

  return (
    <div>
        {
            data?.todos?.map(({ id, todo, completed }, index)=>(
                <Link to={`/todolist/details/${id}`} key={id} className={`flex gap-10 items-center mt-4 group`}>
                    <p className={`${completed? 'line-through': ''}`}>{index+1}.  {todo}</p>
                    <p>{completed? 'completed': 'Not completed'}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default TodoList