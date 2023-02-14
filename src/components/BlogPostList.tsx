import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import CreatePostForm from './CreatePostForm';
import blogPosts from './blog-posts.json';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
}

function BlogPostList(): JSX.Element {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  return (
    <div className="blog-post-list">
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} date={post.date} content={post.content} />
      ))}
    </div>
  );
}

export default BlogPostList;
