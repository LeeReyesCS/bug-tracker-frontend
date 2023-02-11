import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../../api/axiosConfig';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = user;

  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await api.post("/api/v1/auth/register", user);
    <Link to="/signin"></Link>;
  };

  return (
    <div className=" container-register">
      <div className="row">
        <div className="col">
          <h2>Register</h2>
          <form onSubmit={(event) => onSubmit(event)}>
            <div>
              <label htmlFor="firstname" className="form-label">
                {" "}
                First Name
              </label>
              <br />
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your first name"
                name="firstname"
                value={firstname}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>
            <div>
              <label htmlFor="lastname" className="form-label">
                {" "}
                Last Name
              </label>
              <br />
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your last name"
                name="lastname"
                value={lastname}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>
            <div>
              <label className="form-label">E-mail</label>
              <br />
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>
            <div>
              <div>
                <label for="password">Password (8 characters minimum):</label>
                <br />
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minLength="8"
                  required
                  value={password}
                  onChange={(event) => onInputChange(event)}
                ></input>
              </div>
            </div>
            <div className="buttons-register">
              <button type="submit" className="btn-submit">
                Submit
              </button>
              <Link className="sign-in" to="/signin">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;