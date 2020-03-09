import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../actions/auth";

const LogIn = () => {
  const [credentials, setCredentials] = useState({ user: "", password: "" });
  const [error, setError] = useState(null);
  const successfulLogIn = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { user, password } = credentials;
    if (user && password) {
      dispatch(logIn(credentials));
      if (!successfulLogIn) {
        setError("Check your credentials");
      }
    } else {
      setError("Both fields are required");
    }
  };

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "100vh" }}>
        <div className="col-12 col-md-8 col-lg-5 m-auto">
          <div className="mb-5">
            <h1 className="h2">Counter App</h1>
            <h2 className="text-muted h5">Log In to access the app</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">Username</label>
              <input
                className="form-control"
                type="text"
                name="user"
                id="user"
                value={credentials.user}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Log In
            </button>
            {error && (
              <div class="alert alert-danger my-4" role="alert">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
