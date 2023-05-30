
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/blog/blog-posts');
      setBlogPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogPosts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          {post.picture && <img src={`http://localhost:4000/${post.picture.path}`} alt="Blog Post" />}
          <p>{post.content}</p>
          {/* Display other fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
//Solohitechnology blog post