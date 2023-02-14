import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';
import "./SignIn.css";
import Cookies from 'universal-cookie';

const SignIn = () => {
  const cookies = new Cookies();


  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const { email, password } = user;

  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const sendLoginRequest = async (event) => {
    event.preventDefault();
    await api.post("/api/v1/auth/authenticate", user)
    .then((response)=> {
      if(response.status === 200) {
      cookies.set("token",response.data.token,["/"]);
      const jwt = response.data.token;
      console.log(jwt);
      window.location.href ="home";
    } else {
      console.log("failure")
      alert("invalid login!");
      <Link to="/signin"></Link>;
      return Promise.reject("Invalid login attempt");
    }

    })
  .catch((message)=> {
    alert("Invalid login attempt");
  })};



  return (
    <div className ="background">
    <div className="login-box">
      <div className="row">
        <div className="col">
          <h2>Login</h2>
          <form onSubmit={(event) => sendLoginRequest(event)}>
            <div className='user-box'>
              <label htmlFor='email' className="form-label">Email:</label>
              <br />
              <div className='user-box'>
              <input
                type={"email"}
                className="form-control"
                // placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(event) => onInputChange(event)}
              ></input>
              </div>
            </div>
            <div>
              <div className="user-box">
                <label for="password">Password:</label>
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
          <input
        type="Submit"
        className="buttons-register"
        defaultValue="login"
      ></input>
              <Link className="register" to="/register"><span></span><span></span><span></span><span></span>
                Register
              </Link>
  
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;