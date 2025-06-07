import React, { useState } from 'react'

const Login = () => {

const [email,setEmail] = useState('')
const [password,setpassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your login logic here
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'>
              <span className='text-primary'>Admin</span> Login
            </h1>
            <p className='font-light'>
              Enter your credentials to access the admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
            <div className='flex flex-col mb-4'>
              <label className='mb-1'>Email</label>
              <input onChange={e=> setEmail(e.target.value)} value={email}
                type='email'
                required
                placeholder='Your email address'
                className='border-b-2 border-gray-300 p-2 outline-none'
              />
            </div>

            <div className='flex flex-col mb-6'>
              <label className='mb-1'>Password</label>
              <input onChange={e=> setpassword(e.target.value)} value={password}
                type='password'
                required
                placeholder='Your password'
                className='border-b-2 border-gray-300 p-2 outline-none'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-primary text-white py-2 rounded hover:opacity-90 transition-all'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
