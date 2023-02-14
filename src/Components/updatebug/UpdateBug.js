import React from 'react'
import NavBar from '../NavBar'
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Select from 'react-select'
import axios from 'axios';
import './UpdateBug.css';

const UpdateBug = () => {

  const cookies = new Cookies();

  const [bugs, setBugs] = useState()
  const getBugs = async () => {
    fetch("http://127.0.0.1:8080/bugs", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies.get("token")}`,
        'Access-Control-Allow-Origin': '*',
      },
      method: "GET",
    }).then((response) => {
      if (response.status=== 200) return response.json();})
      .then((bugData) => {
        setBugs(bugData);
      });
  }
  useEffect (() => {
    getBugs();
  },[])



  const options = bugs?.map((bug) =>  {
    return {value: bug.bugId, label: bug.description}
  })


  const [selectedBug, setSelectedBug] = useState({
    bugId: "",
    priority:"",
    description:"",
    status:"",
    dueDate:"",
  });

  const { priority, description, status, dueDate } = selectedBug;


  const selectBug = (event) => {
    const pickedBug = bugs.filter(bug => bug.bugId === event.value);
    setSelectedBug(pickedBug[0]);
  }

  const getOriginalBugDescription = () => {
    const pickedBug = bugs.filter(bug => bug.bugId === selectedBug.bugId)
    return pickedBug[0].description;
  }

  const onInputChange = (event) => {
  setSelectedBug({ ...selectedBug, [event.target.name]: event.target.value });
  };

  function refreshPage() {
    window.location.reload(false);
  };

  

const onSubmit = async (event) => {
  event.preventDefault();
  const time = new Date();
  const date = `${time.getFullYear()} - ${time.getMonth()} - ${time.getDate()}`;
  const oldDescription = getOriginalBugDescription();
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${cookies.get("token")}`
  }


  await axios.put(`http://127.0.0.1:8080/bugs/${selectedBug.bugId}`, {...selectedBug, description:`${oldDescription}\n[Updated ${date}]: ${selectedBug.description}` }, {
      headers: headers
    })
    .then((response)=> {
    console.log(response);
    if (response.status >= 200) return response.data;})
    .then((bugData) => {
      setBugs(bugData);
      console.log(bugData);
      alert("Bug submitted!");
      refreshPage();
    });
}

  return (
    <div>
      <NavBar/>

    <div className="bug-box">
    <form className="update-form" onSubmit={(event)=>onSubmit(event)}>
      <h2>UPDATE BUG</h2>
      <br></br>
      <Select name = "selectedBug" options={options} value={options?.find(function (option) {
          return option.value === selectedBug;
        })} onChange={(event)=>selectBug(event)}>
      </Select>
      <div className = "dropdown">

      <label for="priority">Priority:</label>
    <select id="priority" className='dropbtn' name="priority" required="true"
      value={priority}
      onChange={(event)=>onInputChange(event)}>
    <option className='choice-green' value="Low">Low</option>
    <option className='choice-yellow' value="Medium">Medium</option>
    <option className='choice-red' value="High">High</option>
  </select>
  <br></br>
  </div> 
  <div className='user-box'>
        <textarea 
        placeholder='Description'
        className='description-field'
        name='description'
        required='true'
        value={description}
        onChange={(event)=>onInputChange(event)}>
        </textarea>
      </div>
      <div className='dropdown'>
        <label for="status">Status:</label>
    <select id="status" className='dropbtn' name="status" required ="true"
        value={status}
        onChange={(event)=>onInputChange(event)}>

      <option value="Solved">Solved</option>
      <option value="Blocked">Blocked</option>
      <option value="In Progress">In Progress</option>
      <option value="Needs Review">Needs Review</option>
      <option value="Up Next">Up Next</option>

    </select>
      </div>
      <div className = "form-control">
        <input type="Date"
        placeholder='Due Date'
        className='form-control'
        name ='dueDate'
        required='true'
        value={dueDate}
        onChange={(event)=>onInputChange(event)}></input>
      </div>
      <input
        type="Submit"
        className="submit-btn"
        defaultValue="Update Bug"></input> 
      </form>
      </div>
      </div>
  )
}

export default UpdateBug;