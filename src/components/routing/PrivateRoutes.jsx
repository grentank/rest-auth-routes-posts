import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditPost from '../EditPost';
import Home from '../Home';
import Posts from '../Posts';

export default function PrivateRoutes({ post, username }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts username={username} />} />
      <Route path="/posts/:id" element={<EditPost post={post} />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
