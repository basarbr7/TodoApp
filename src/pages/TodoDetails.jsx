import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetTodoQuery } from '../redux/todosApi'

const TodoDetails = () => {
  const { id } =useParams()
  const { data }= useGetTodoQuery(id)

  return (
    <div>
        <p>User ID: {data?.userId}</p>
        <p>Todo ID: {data?.id}</p>
        <p>{data?.todo}</p>
        <p>{data?.completed? "completed": "not completed"}</p>
    </div>
  )
}

export default TodoDetails