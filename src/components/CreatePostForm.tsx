import React, { useState } from 'react';

function CreatePostForm(props: { onPostCreate: (arg0: { title: string; content: string; date: string; }) => void; }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleTitleChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setTitle(event.target.value);
  }

  function handleContentChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setContent(event.target.value);
  }

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();

    const newPost = {
      title: title,
      content: content,
      date: new Date().toISOString()
    };

    props.onPostCreate(newPost);

    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={handleContentChange}></textarea>
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostForm;