import './BugForm.css';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

export const BugForm = ({toggleForm}) => {

  const cookies = new Cookies();
  const [bug, setBug] = useState ({
    priority:"Low",
    description:"",
    status:"Solved",
    dueDate:"",
  });


  const { priority, description, status, dueDate } = bug;

  const onInputChange = (event) => {
    setBug({ ...bug, [event.target.name]: event.target.value });
  };

  function refreshPage() {
    window.location.reload(false);
  }


  const BACKEND_URL = `https://bug-tracker-backend.herokuapp.com`;


const onSubmit = async () => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${cookies.get("token")}`
  }

  await axios.post(`${BACKEND_URL}/bugs`, bug, {
      headers: headers
    })
    .then((response) => {
      console.log(response);
      if (response.status >= 200) return response.json();})
      .then((bugData) => {
        setBug(bugData);
        console.log(bugData);
        toggleForm();
        alert("Bug submitted!");
        // refreshPage();
      });
}
  return (
    <div className="bug-box">
    <form className="bug-form" onSubmit={(event)=>onSubmit(event)}>
      <h2>SUBMIT BUG</h2>
      <br></br>
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
        defaultValue="Submit Bug"></input> 
      </form>
      </div>
  )
}
export default BugForm;
