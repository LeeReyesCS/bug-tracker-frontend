import './BugForm.css';
import { useEffect, useState } from 'react';
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


const onSubmit = async () => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${cookies.get("token")}`
  }

  await axios.post("http://127.0.0.1:8080/bugs", bug, {
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
        refreshPage();
      });
}

  useEffect (()=>onSubmit,[])
  return (
    <form className="bug-form" onSubmit={(event)=>onSubmit(event)}>
      <h2>Submit a new Bug</h2>
      <br></br>
      <div>

       <label for="priority">Priority:</label>
    <select id="priority" name="priority" required="true"
      value={priority}
      onChange={(event)=>onInputChange(event)}>
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
        onChange={(event)=>onInputChange(event)}>
        </textarea>
      </div>
      <div>
        <label for="status">Status:</label>
    <select id="status" name="status" required ="true"
        value={status}
        onChange={(event)=>onInputChange(event)}>

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
        onChange={(event)=>onInputChange(event)}></input>
      </div>
      <input
        type="Submit"
        className="submit-btn"
        defaultValue="Submit Bug"></input> 
      </form>
  )
}
export default BugForm;
