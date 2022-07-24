import React, { useState } from 'react';

export default function PostForm({ submitHandler }) {
  const defaultInput = { title: '', body: '' };
  const [input, setInput] = useState(defaultInput);
  const changeTitle = (e) => setInput((prev) => ({ ...prev, title: e.target.value }));
  const changeBody = (e) => setInput((prev) => ({ ...prev, body: e.target.value }));
  return (
    <form
      className="m-5"
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler(input);
        setInput(defaultInput);
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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
