import { ImageListItem } from '@mui/material';
import React from 'react';
import BlogPostList from './BlogPostList';
import BlogForm from './CommentForm';
import './styles.css';

function BlogPage(): JSX.Element {
  return (
    <div className="blog-page">
      <h1>StageBlog</h1>
      <BlogPostList />
    </div>
  );
}

export default BlogPage;
