import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar({ username }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/posts">Posts</NavLink>
          </div>
          {username ? (
            <div className="navbar-nav">
              <a className="nav-link" href="/logout">Log out</a>
            </div>
          )
            : ' '}
        </div>
      </div>
      {username ? (
        <div className="row">
          Hello,
          {' '}
          {username}
        </div>
      ) : <div>Log in to proceed</div>}
    </nav>
  );
}
