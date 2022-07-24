import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="col mt-2">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Log in</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Register</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">

          <form action="/login" method="post">
            <div className="mb-3">
              <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
              <input type="text" name="username" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>

        </div>
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">

          <form action="/register" method="post">
            <div className="mb-3">
              <label htmlFor="exampleInputUsername2" className="form-label">Username</label>
              <input type="text" name="username" className="form-control" id="exampleInputUsername2" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword2" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>

        </div>
      </div>
    </div>
  );
}
