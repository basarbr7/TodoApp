import React from 'react'
import { useGetTodosQuery } from '../redux/todosApi'
import { Link } from 'react-router-dom'
import { Loader } from 'lucide-react'

const TodoList = () => {
  const userId = localStorage.getItem('userId')
  const { data, isLoading, isError } = useGetTodosQuery(userId)

  return (
      <div className='mt-10 px-4 max-w-xl mx-auto'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>📋 Your Todo List</h1>

        {
          isLoading && <div className='text-gray-600 flex gap-3 items-center justify-center'>
            <Loader className='animate-spin text-gray-600 w-6 h-6'/>
            Loading todos...
          </div>
        }
        {isError && <p className='text-red-500 text-center'>Failed to load todos</p>}
        {!isLoading && data?.todos?.length === 0 && (
          <p className='text-gray-500 text-center'>No todos found. Start adding some!</p>
        )}

        <div className='space-y-4'>
          {data?.todos?.map(({ id, todo, completed }, index) => (
            <div
              key={id}
              className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white border border-gray-200 p-4 rounded-md shadow hover:shadow-md transition'
            >
              <div className='flex flex-col sm:flex-row gap-4 sm:items-center'>
                <p className={`font-medium ${completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {index + 1}. {todo}
                </p>
                <span
                  className={`text-sm font-semibold px-2 py-1 rounded ${
                    completed
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {completed ? '✅ Completed' : '⌛ Pending'}
                </span>
              </div>

              <Link
                to={`details/${id}`}
                className='text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition'
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
  )
}

export default TodoList
