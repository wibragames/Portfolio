import { useState } from 'react';
import './BlogForm.css';

type Post = {
  id: number;
  title: string;
  date: string;
  content: string;
};

function BlogForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost: Post = {
      id: Date.now(),
      title,
      date,
      content,
    };
    try {
      const posts = JSON.parse(localStorage.getItem('posts') || '[]');
      posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(posts));
      setTitle('');
      setDate('');
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <label className="blog-form-label">
        Title:
        <input className="blog-form-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label className="blog-form-label">
        Date:
        <input className="blog-form-input" type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <label className="blog-form-label">
        Content:
        <textarea className="blog-form-textarea" value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <button className="blog-form-button" type="submit">Add post</button>
    </form>
  );
}

export default BlogForm;
