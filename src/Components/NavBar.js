import React, { useState } from 'react';
import { BugForm } from './bugform/BugForm';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';


 export const NavBar = (props) => {

  const cookie = new Cookies();
  const navigate = useNavigate();
  const [bugFormVisible, setBugFormVisible] = useState(false);

  const toggleBugFormVisible = () => {
    setBugFormVisible(!bugFormVisible);
  }
  const bugFormElement = bugFormVisible ? (
    <BugForm 
    newBug = {props.newBug}
    toggleForm={toggleBugFormVisible}>
    </BugForm>
  ) : ("");

  const signOut = () => {
    cookie.remove("token")
    alert("You've been signed out.")
    navigate("/signin")
  }

  return (
  
    <nav>
    <div className='NavBar'>
        <Link to="/home"><button className='button'>Home        </button></Link>
        <br></br>
        <button className='bugSubmit' onClick={toggleBugFormVisible}>Submit a Bug
        </button>
        {bugFormElement}
        <br></br>
        <Link to="/updatebug"><button className='button'>Update Bug</button></Link>
        <br></br>
          <button className='button' onClick={()=>signOut()}>Sign Out</button>
          <br></br>
          <Link to ="/about"><button className='button'>About The Dev</button></Link>
    </div>
</nav>)
}
export default NavBar;