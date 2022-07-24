import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditPost({ post: initPost }) {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post ?? initPost;
  console.log('INIT ->>', initPost);
  console.log('LOCATION ->>', location.state?.post);
  const defaultInput = { title: post.title, body: post.body };
  const [input, setInput] = useState(defaultInput);
  const changeTitle = (e) => setInput((prev) => ({ ...prev, title: e.target.value }));
  const changeBody = (e) => setInput((prev) => ({ ...prev, body: e.target.value }));
  return (
    <form
      className="m-5"
      onSubmit={(e) => {
        e.preventDefault();
        axios.patch(`/posts/${post.id}`, input)
          .then(() => navigate('/posts'));
      }}
    >
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">Post title:</label>
        <input
          type="text"
          className="form-control"
          id="post-title"
          value={input.title}
          onChange={changeTitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">Post body:</label>
        <input
          type="text"
          className="form-control"
          id="post-body"
          value={input.body}
          onChange={changeBody}
        />
      </div>
      <button type="submit" className="btn btn-info">Edit</button>
    </form>
  );
}
