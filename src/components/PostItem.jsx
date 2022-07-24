import React from 'react';
import { Link } from 'react-router-dom';

export default function PostItem({ post, deletePost, username }) {
  return (
    <div className="col m-3">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{post.User.username}</h6>
            <p className="card-text">{post.body}</p>
            {username === post.User.username ? (
              <div className="col">
                <Link to={`/posts/${post.id}`} state={{ post }} className="btn btn-info me-3">Edit</Link>
                <button onClick={() => deletePost(post.id)} className="btn btn-danger">Delete</button>
              </div>
            ) : <div style={{ fontSize: '10px' }}>...</div>}

          </div>
        </div>
      </div>
    </div>
  );
}
