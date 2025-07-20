import React, { useState, useEffect } from 'react';
import { useGetProfileQuery } from '../redux/todosApi';
import { Loader } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const userId = localStorage.getItem('userId');
  const { data, error, isLoading } = useGetProfileQuery(userId);

  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
  });

  useEffect(() => {
    if (data) {
      setProfile({
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        email: data.email || '',
        username: data.username || '',
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    toast.success("Profile updated..");
    setEditMode(false);
  };

  return (
    <div className=' mt-10 h-svh '>
    {
      !userId ? (
          <div className='text-center mt-10 text-lg text-red-500 font-medium'>
            Please login first to view your profile.
          </div>
        ) : isLoading ? (
          <div className='text-center mt-10 flex items-center justify-center gap-2 text-blue-500'>
              <Loader className='animate-spin text-gray-600 w-6 h-6' />
              Loading profile...
          </div>
        ) : error ? (
          <div className='text-center mt-10 text-red-600 font-medium'>
            Failed to load profile. Please try again later.
          </div>
        ) : (
          <div className=' px-4 max-w-lg mx-auto'>
            <div className='bg-yellow-200 rounded-lg shadow-md p-6 flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <img
                  src={data?.image}
                  alt="profile"
                  className='w-16 h-16 rounded-full object-cover'
                />
                <h2 className='text-2xl font-bold text-gray-800'>
                  {profile.firstName} {profile.lastName}
                </h2>
              </div>

              <div className='space-y-2'>
                <div className='text-gray-700'>
                  <span className='font-semibold'>Email:</span>{' '}
                  {editMode ? (
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      className='border p-1 rounded w-full'
                    />
                  ) : (
                    profile.email
                  )}
                </div>

                <div className='text-gray-700'>
                  <span className='font-semibold'>Username:</span>{' '}
                  {editMode ? (
                    <input
                      type="text"
                      name="username"
                      value={profile.username}
                      onChange={handleChange}
                      className='border p-1 rounded w-full'
                    />
                  ) : (
                    profile.username
                  )}
                </div>
              </div>

              {editMode ? (
                <div className='flex gap-3'>
                  <button
                    onClick={handleSave}
                    className='bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600'
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className='bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500'
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 self-start'
                >
                  Edit Profile
                </button>
              )}
            </div>
            <ToastContainer position="top-center" autoClose={2000} />
          </div>
        )
      }
    </div>
    
  )
};

export default Profile;
