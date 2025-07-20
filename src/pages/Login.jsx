import React, { useState } from 'react'
import { useLoginMutation } from '../redux/todosApi'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [login, { data, error, isLoading }] = useLoginMutation()
    const navigate = useNavigate()
    const location = useLocation();
    const token = localStorage.getItem("token")

    const from = location.state?.from?.pathname || '/';
    
    if (token) {
        return <Navigate to={from} replace />
    }
    const handleChange =(e)=>{
        const {name, value} = e.target
        setFormData(prev=>({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await login(formData).unwrap()
            localStorage.setItem('token', res.token)
            localStorage.setItem('userId', res.id)
            console.log('Login success:', res)

            window.dispatchEvent(new Event("authChanged"));

            navigate(from, { replace: true });

        } catch (err) {
            console.error('Login failed:', err)
            alert('Login failed ')
        }finally{
            setFormData({username: '', password: ''})
        }
    }

  return (
   <div className='max-w-[1200px] mx-auto py-10 '>
        <form onSubmit={handleSubmit} className='max-w-[420px] mx-auto bg-gray-200 p-10 rounded-md flex flex-col gap-6 '>
            <h2 className='text-xl font-bold'>Login Form</h2>

            <div className='flex flex-col gap-2'>
                <label htmlFor='username' className='text-base font-semibold'>Name:</label>
                <input
                    type="text"
                    name='username'
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className='border outline-none px-4 py-2 '
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='password' className='text-base font-semibold'>Password:</label>
                <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className='border outline-none px-4 py-2 '
                />
            </div>
            <button type="submit" disabled={isLoading} className='bg-amber-600 py-2 cursor-pointer '>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p style={{ color: 'red' }}>Login failed</p>}
            {data && <p style={{ color: 'green' }}>Welcome, {data.username}!</p>}
        </form>
   </div>
  )
}

export default Login