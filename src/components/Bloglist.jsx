import React, { useState } from 'react';
import { blogCategories } from '../assets/assets';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { useAppContext } from '../context/AppContext';

const Bloglist = () => {
  const [menu, setMenu] = useState("All");
  const { blogs = [], input } = useAppContext(); // ✅ default empty array for safety

  // ✅ Filter based on input
  const filteredBlogs = () => {
    if (!input?.trim()) return blogs;

    return blogs.filter(blog =>
      blog.title?.toLowerCase().includes(input.toLowerCase()) ||
      blog.category?.toLowerCase().includes(input.toLowerCase())
    );
  };

  // ✅ Filter by selected category
  const displayedBlogs = filteredBlogs().filter(
    blog => menu === "All" || blog.category?.toLowerCase() === menu.toLowerCase()
  );

  return (
    <div>
      {/* Category Tabs */}
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

      {/* Blog Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8 sm:mx-16 xl:mx-40'>
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No blogs found for this filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bloglist;
