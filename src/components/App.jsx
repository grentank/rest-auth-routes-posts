import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditPost from './EditPost';
import Home from './Home';
import NavBar from './NavBar';
import Posts from './Posts';

export default function App({ post }) {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<EditPost post={post} />} />
      </Routes>
    </div>
  );
}
