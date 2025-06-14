import React, { useState } from 'react'
import { blogCategories, blog_data } from '../assets/assets'
import { motion } from 'framer-motion'
import BlogCard from '../components/BlogCard' // Adjust the path based on your folder structure

const Bloglist = () => {
  const [menu, setMenu] = useState("All")

  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`relative px-2 py-1 cursor-pointer text-gray-500 font-medium transition-colors ${
                menu === item ? 'text-white' : ''
              }`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className='absolute left-0 right-0 top-0 h-7 z-[-1] bg-primary rounded-full'
                />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8 sm:mx-16 xl:mx-40'>
        {blog_data
          .filter((blog) => menu === "All" || blog.category === menu)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  )
}

export default Bloglist
