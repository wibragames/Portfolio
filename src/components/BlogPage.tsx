import { ImageListItem } from '@mui/material';
import React from 'react';
import BlogPostList from './BlogPostList';
import './styles.css';

function BlogPage(): JSX.Element {
  return (
    <div className="blog-page">

      <h1>StageBlog</h1>
      <ImageListItem
        sx={{
          bgcolor: "background.paper",
          width: 150,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={"./logo_inuits.svg"}
          alt={"My Picture"}
          loading="lazy"
        />
      </ImageListItem>
      <BlogPostList />
    </div>
  );
}

export default BlogPage;
