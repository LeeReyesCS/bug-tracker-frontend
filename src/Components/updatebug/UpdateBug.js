import React from 'react'
import NavBar from '../NavBar'
import { useState } from 'react';

const UpdateBug = ({bugData}) => {


  const [status, setStatus] = useState ({
      status:bugData.status,
  });

  // const { priority, description, dueDate } = bug;

  const onInputChange = (event) => {
    setStatus({ ...status, [event.target.name]: event.target.value });
  };

 
  return (
    <div>
      <NavBar/>
      <select name = "description" value="description">
      {bugData?.map((bug)=> {
    return( <option value = "description">{bug.status} {bug.description}</option>)
  })}
  </select>

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

  )
}

export default UpdateBug;