import React, { useState } from 'react';
import { BugForm } from './BugForm';
import './NavBar.css';
// import { Link } from 'react-router-dom';

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
    <div className='NavBar'>
      <button className='bugSubmit' onClick={toggleBugFormVisible}>Submit a Bug</button>
      {bugFormElement}
      <br></br>
    <button className='signOut'>Sign Out</button>
    <br></br>
    <button>placeholder</button></div>
  )
}
