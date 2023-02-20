import React from 'react';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

function BlogPost({ title, date, content }: BlogPostProps): JSX.Element {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
