import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg mt-4">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 text-blue-600 underline">
        Go back Home
      </Link>
    </div>
  )
}

export default ErrorPage