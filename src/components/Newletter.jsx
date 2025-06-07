import React from 'react'

const Newletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-4 my-32 px-4'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog</h1>
      <p className='md:text-lg text-gray-500/70 px-8'>
        Subscribe to get the latest blogs, tech news, and exclusive updates.
      </p>

      <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input
          className='border border-gray-300 h-full rounded-l-md outline-none w-full px-3 text-gray-500'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='md:px-12 px-6 h-full text-white bg-primary rounded-r-md'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newletter
