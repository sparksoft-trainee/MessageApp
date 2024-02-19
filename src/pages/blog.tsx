import React from 'react';

const Blog = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">Card Title</h2>
      <p className="text-gray-500">Card content goes here.</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
        Click Me
      </button>
    </div>
  );
};

export default Blog;