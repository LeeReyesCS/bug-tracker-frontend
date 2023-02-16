import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../api/axiosConfig';
import './Register.css';
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Register = () => {

  const cookies = new Cookies();
  const navigate = useNavigate();

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
    await api.post("/api/v1/auth/register", user)
    navigate("/signin")
  };



  return (
    <div className="container-register">
      <div className="register-box">
      <div className="row">
        <div className="col">
          <h2>Register</h2>
          <form onSubmit={(event) => onSubmit(event)}>
            <div className='user-box'>
              <label htmlFor="firstname" className="form-label">
                {" "}
                First Name
              </label>
              <br />
              <input
                type={"text"}
                className="form-control"
                placeholder="First Name"
                name="firstname"
                value={firstname}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>
            <div className='user-box'>
              <label htmlFor="lastname" className="form-label">
                {" "}
                Last Name
              </label>
              <br />
              <input
                type={"text"}
                className="form-control"
                placeholder="Last Name"
                name="lastname"
                value={lastname}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>
            <div className='user-box'>
              <label className="form-label">Email</label>
              <br />
              <input
                type={"email"}
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>
            <div>
              <div className='user-box'>
                <label for="password">Password</label>
                <br />
                <input
                  type="password"
                  id="pass"
                  name="password"
                  placeholder='8 characters minimum'
                  minLength="8"
                  required
                  value={password}
                  onChange={(event) => onInputChange(event)}
                ></input>
              </div>
            </div>
            <div className='btns'>
              <button type="submit" className="buttons-register">
                Submit
              </button>
              <br></br>
            <div className='spacing'></div>
            <Link className="sign-in" to="/signin"><span></span><span></span><span></span><span></span>
                Sign In
              </Link>
              </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Register;