import React from 'react';
import NavBar from './NavBar';
import PrivateRoutes from './routing/PrivateRoutes';
import PublicRoutes from './routing/PublicRoutes';

export default function App({ post, username }) {
  return (
    <div className="container">
      <NavBar username={username} />
      {username
        ? <PrivateRoutes post={post} username={username} />
        : <PublicRoutes />}
    </div>
  );
}
