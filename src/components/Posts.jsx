import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostForm from './PostForm';
import PostItem from './PostItem';

export default function Posts({ username }) {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/posts')
      .then((res) => setAllPosts(res.data));
  }, []);

  const submitHandler = (input) => {
    axios.post('/posts', input)
      .then((res) => setAllPosts(res.data));
  };

  const deletePost = (id) => {
    axios.delete(`/posts/${id}`)
      .then(() => setAllPosts(allPosts.filter((post) => post.id !== id)));
  };

  return (
    <div className="col">
      <PostForm submitHandler={submitHandler} />
      {allPosts
        ? allPosts?.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            deletePost={deletePost}
            username={username}
          />
        ))
        : 'Loading...'}
    </div>
  );
}
