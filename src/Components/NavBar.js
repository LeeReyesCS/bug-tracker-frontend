import React, { useState } from 'react';
import { BugForm } from './bugform/BugForm';
import './NavBar.css';
import { Link } from 'react-router-dom';



 export const NavBar = (props) => {
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


  return (
  
    <nav>
    <div className='NavBar'>

        <Link to="/"><button className='button'>Home        </button></Link>
        <br></br>
        <button className='bugSubmit' onClick={toggleBugFormVisible}>Submit a Bug
        </button>
        {bugFormElement}
        <br></br>
        <Link to="/updatebug"><button className='button'>Update Bug</button></Link>
        <br></br>
          <Link to ="/signout"><button className='button'>Sign Out</button></Link>
          <br></br>
          <Link to ="/about"><button className='button'>About The Dev</button></Link>
    </div>
</nav>)
}
export default NavBar;