import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
export const UpdateBugForm = ({bugData}) => {
  console.log("This is the current bug id: ", bugData.bugId)
  const cookies = new Cookies();

  const [priority, setPriority] = useState(bugData.priority);
  const [description, setDescription] = useState(bugData.description);
  const [status, setStatus] = useState(bugData.status);
  const [dueDate, setDueDate] = useState(bugData.dueDate);

  const originalDescription = bugData.description;

  const onInputPriorityChange = (event) => {
    setPriority(event.value);
  };

  const onInputStatusChange = (event) => {
    setStatus(event.value);
  };
  const onInputDueDateChange = (event) => {
    setDueDate(event.value);
  };


  const onInputDescriptionChange =(event) => {
   
    setDescription(event.value)
  }

  function refreshPage() {
    window.location.reload(false);
  };

  

const onSubmit = async (event) => {
  event.preventDefault();
  const time = new Date();
  const date = `${time.getFullYear()} - ${time.getMonth()} - ${time.getDate()}`;
  setDescription(`${originalDescription} \n[UPDATED ON ${date}]: ${description}`);

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${cookies.get("token")}`,
    'Access-Control-Allow-Origin': '*',

  }

  const updatedBug = {
    "priority":priority,
    "description": description,
    "status":status,
    "dueDate":dueDate,
  }
  console.log("This is before axios request",bugData.bugId);

  await axios.put(`http://127.0.0.1:8080/bugs/${bugData.bugId}`, updatedBug, {
      headers: headers
    })
    .then((response) => {

      setDescription(response.data.description);
      setDueDate(response.data.dueDate);
      setPriority(response.data.priority);
      setStatus(response.data.status);
      alert("Bug Updated!");
      // refreshPage();
      });
}

  useEffect (()=>onSubmit,[])
  return (
    <form className="update-form" onSubmit={(event)=>onSubmit(event)}>
      <h2>Submit a new Bug</h2>
      <br></br>
      <div>

      <label for="priority">Priority:</label>
    <select id="priority" name="priority" required="true"
      value={priority}
      onChange={(event)=>onInputPriorityChange(event)}>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
<br></br>
  </select>
        <textarea 
        placeholder='Description'
        className='description-field'
        name='description'
        required='true'
        value={description}
        onChange={(event)=>onInputDescriptionChange(event)}>
        </textarea>
      </div>
      <div>
        <label for="status">Status:</label>
    <select id="status" name="status" required ="true"
        value={status}
        onChange={(event)=>onInputStatusChange(event)}>

      <option value="Solved">Solved</option>
      <option value="Blocked">Blocked</option>
      <option value="In Progress">In Progress</option>
      <option value="Needs Review">Needs Review</option>
      <option value="Unclaimed">Unclaimed</option>
      <option value="Up Next">Up Next</option>

    </select>
      </div>
      <div>
        <input type="Date"
        placeholder='Due Date'
        className='form-field'
        name ='dueDate'
        required='true'
        value={dueDate}
        onChange={(event)=>onInputDueDateChange(event)}></input>
      </div>
      <input
        type="Submit"
        className="submit-btn"
        defaultValue="Submit Bug"></input> 
      </form>
  )
}

export default UpdateBugForm;