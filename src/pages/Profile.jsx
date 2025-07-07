import React from 'react'
import { useGetProfileQuery } from '../redux/todosApi'

const Profile = () => {
  const userId = localStorage.getItem('userId')  // userId...
  const { data, error, isLoading } = useGetProfileQuery(userId)  //id pathano...

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Please Login frist then see your profile</p>

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold'>Welcome, {data?.firstName}</h2>
      <p>Email: {data?.email}</p>
      <p>Username: {data?.username}</p>
    </div>
  )
}

export default Profile
