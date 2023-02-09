import './BugForm.css';
import { useState } from 'react';

export const BugForm = (props) => {
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate,setDueDate] = useState("");

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  }
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const onSubmitBug = (event) => {
    event.preventDefault();
    props.newBug({description,status,dueDate});
    setDescription("");
    setStatus("");
    setDueDate("");
    // props.toggleForm;
  };
  return (
    <form className="bug-form" onSubmit={onSubmitBug}>
      <h2>Submit a new Bug</h2>
      <br></br>
      <div>

       <label for="priority">Priority:</label>
    <select id="priority" name="priority"
      defaultValue={priority}
      onChange={handlePriorityChange}>
    <option value="low">low</option>
    <option value="medium">medium</option>
    <option value="high">high</option>

  </select>
        <textarea 
        placeholder='Description'
        className='description-field'
        defaultValue={description}
        onChange={handleDescriptionChange}></textarea>
      </div>
      <div>
        <label for="status">Status:</label>
    <select id="Status" name="Status"
        defaultValue={status}
        onChange={handleStatusChange}>
      <option value="solved">Solved</option>
      <option value="blocked">Blocked</option>
      <option value="review">Needs Review</option>
      <option value="unclaimed">Unclaimed</option>
      <option value="up-next">Up Next</option>

    </select>
      </div>
      <div>
        <input type="date"
        placeholder='Due Date'
        className='form-field'
        defaultValue={dueDate}
        onChange={handleDueDateChange}></input>
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
