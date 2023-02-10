import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../../api/axiosConfig';

const Register = () => {


  const[user, setUser] = useState({
    firstname:"",
    lastname: "",
    email:"",
    password:"",
  });

  const { firstname, lastname, email, password } = user;

  
  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };



  const onSubmit = async (event) => {
    event.preventDefault();
    await api.post("/api/v1/auth/register", user);
    <Link to="/signin"></Link>
  };




  return (
    <div className=' container'>
      <div className='row'>
        <div className='col'>
          <h2>
            Register User
          </h2>
          <form onSubmit={(event) => onSubmit(event)}>
          <div>
            <label htmlFor ="firstname" className ="form-label"> First Name</label>
            <input 
            type ={"text"}
            className="form-control"
            placeholder='Enter your first name'
            name = "firstname"
            value ={firstname}
            onChange = {(event)=>onInputChange(event)}></input>
          </div>
          <div>
            <label htmlFor ="lastname" className ="form-label"> Last Name</label>
            <input 
            type ={"text"} 
            className="form-control"
            placeholder='Enter your last name'
            name = "lastname"
            value={lastname}
            onChange = {(event)=>onInputChange(event)}></input>
          </div>
          <div>
              <label className="form-label">
                E-mail
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange = {(event)=>onInputChange(event)}></input>
          </div>
          <div>
            <div>
    <label for="password">Password (8 characters minimum):</label>
    <input type="password" id="pass" name="password"
           minLength="8" required
           value={password}
           onChange = {(event)=>onInputChange(event)}></input>
    </div>
</div>


          <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="sign-in" to="/signin">
              Sign In
            </Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register;