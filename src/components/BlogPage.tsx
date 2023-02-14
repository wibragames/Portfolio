import React from 'react';
import BlogPostList from './BlogPostList';

function BlogPage(): JSX.Element {
  return (
    <div className="blog-page">
      <h1>My Blog</h1>
      <BlogPostList />
    </div>
  );
}

export default BlogPage;
