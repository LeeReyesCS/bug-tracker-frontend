import React from 'react'
import NavBar from '../NavBar'
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Select from 'react-select'

const UpdateBug = () => {

  const cookies = new Cookies();

  const [bugs, setBugs] = useState()

  const getBugs = async () => {
    fetch("http://127.0.0.1:8080/bugs", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies.get("token")}`,
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


// use state ([bugs]), 
// pass in description and id in selector
// when selecting, loop through state to select bug with that iD

  // const [status, setStatus] = useState ({
  //     status:bugData.status,
  // });
  const [selectedBug, setSelectedBug] = useState({
    bugId: "",
    priority:"",
    description:"",
    status:"",
    dueDate:"",
  });


  const selectBug = (event) => {
    const pickedBug = bugs.filter(bug => bug.bugId === event.value);
  setSelectedBug(pickedBug[0]);
  }
 console.log("This is the current id", selectedBug)
  return (
    <div>
      <NavBar/>
      <Select name = "selectedBug" options={options} value={options?.find(function (option) {
          return option.value === selectedBug;
        })} onChange={(event)=>selectBug(event)}>
      </Select>

{/* if selected bug is defined, add component */}
  {/* <label for="status">Status:</label>
    <select id="status" name="status"
        value={status}
        onChange={(event)=>onInputChange(event)}>

      <option value="Solved">Solved</option>
      <option value="Blocked">Blocked</option>
      <option value="In Progress">In Progress</option>
      <option value="Needs Review">Needs Review</option>
      <option value="Unclaimed">Unclaimed</option>
      <option value="Up Next">Up Next</option>

    </select> */}


    </div>
    )
}

export default UpdateBug;