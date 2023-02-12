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

  // const login = () => {

  //   fetch("http://localhost:8080/api/v1/auth/authenticate", {
  //     "headers": {
  //       "Content-Type": "application/json",
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     "method" : "post",
  //     body: JSON.stringify(user),
  //   })
  //   .then((response)=> Promise.all([response.json(), response.headers]))
  //   .then(([body])=>{
  //     cookies.set("token",body.token);
  //     const jwt = body.token;
  //     console.log(jwt);
  //   })
  
  //   }
  
    // useEffect(()=>login(),[jwt])

  return (
    <div className=" container-signIn">
      <div className="row">
        <div className="col">
          <h2>Sign In</h2>
          <form onSubmit={(event) => sendLoginRequest(event)}>
            <div>
              <label htmlFor='email' className="form-label">E-mail</label>
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
           
            <input
        type="Submit"
        className="buttons-register"
        defaultValue="signin"
      ></input> 
              <Link className="register" to="/register">
                Register
              </Link>
  
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;