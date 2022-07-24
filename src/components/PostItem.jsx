import React from 'react';
import { Link } from 'react-router-dom';

export default function PostItem({ post, deletePost }) {
  return (
    <div className="col m-3">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{post.id}</h6>
            <p className="card-text">{post.body}</p>
            <Link to={`/posts/${post.id}`} state={{ post }} className="btn btn-info me-3">Edit</Link>
            <button onClick={() => deletePost(post.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
