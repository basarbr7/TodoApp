import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetTodoQuery } from '../redux/todosApi'
import { Loader, AlertCircle, CheckCircle, Clock, MoveLeft } from 'lucide-react'

const TodoDetails = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetTodoQuery(id)

  return (
    <div className='max-w-xl mx-auto px-4 mt-12'>
      {isLoading && (
        <div className='flex justify-center items-center h-40'>
          <Loader className='animate-spin text-gray-600 w-6 h-6' />
          <p className='ml-2'>Loading...</p>
        </div>
      )}

      {isError && (
        <div className='text-red-600 text-center flex items-center justify-center gap-2'>
          <AlertCircle className='w-5 h-5' />
          <span>Failed to load todo</span>
        </div>
      )}

      {data && (
        <div className='bg-yellow-100 rounded-lg shadow p-6 space-y-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>📝 Todo Details</h2>

          <div className='text-gray-700 space-y-2'>
            <p><span className='font-medium'>Todo ID:</span> {data.id}</p>
            <p><span className='font-medium'>Name:</span> {data.todo}</p>
            <p className='flex items-center gap-2'>
              <span className='font-medium'>Status:</span>
              {data.completed ? (
                <span className='flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-md text-sm'>
                  <CheckCircle className='w-4 h-4' />
                  Completed
                </span>
              ) : (
                <span className='flex items-center gap-1 text-yellow-700 bg-yellow-200 px-2 py-1 rounded-md text-sm'>
                  <Clock className='w-4 h-4' />
                  Pending
                </span>
              )}
            </p>
          </div>
        </div>
      )}

      <div className='text-center mt-8'>
        <Link to='/todos'
          className='bg-yellow-600 text-white px-5 py-2 rounded-md hover:bg-yellow-700 transition'>
            Go Back
        </Link>
        
      </div>
    </div>
  )
}

export default TodoDetails
