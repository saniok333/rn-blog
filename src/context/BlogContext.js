import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const addBlogPost = () => {
    setBlogPosts((currentPosts) => [
      ...currentPosts,
      { title: `Blog Post #${currentPosts.length + 1}` },
    ]);
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
