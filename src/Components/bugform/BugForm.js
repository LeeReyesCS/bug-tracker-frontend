import './BugForm.css';
import { useState } from 'react';
import api from '../../api/axiosConfig';

export const BugForm = ({toggleForm}) => {
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

  const onSubmit = async (event) => {
    event.preventDefault();
    await api.post("/bugs", bug);
    toggleForm();
    alert("Bug submitted!");
    refreshPage();
  };
  return (
    <form className="bug-form" onSubmit={(event)=>onSubmit(event)}>
      <h2>Submit a new Bug</h2>
      <br></br>
      <div>

       <label for="priority">Priority:</label>
    <select id="priority" name="priority" required="true"
      value={priority}
      onChange={(event)=>onInputChange(event)}>
    <option value="low">low</option>
    <option value="medium">medium</option>
    <option value="high">high</option>
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
        defaultValue="Submit Bug"
      ></input> 
      </form>
  )
}
export default BugForm;
