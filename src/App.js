
import { NavBar } from './Components/NavBar';
import './App.css';
import { StatusBar } from './Components/StatusBar';
import { BugForm } from './Components/BugForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_URL ="http://127.0.0.1:8080";

function App() {

  const [listofBugs, setListofBugs] = useState([]);
  const addNewBug = (newBug) => {
    axios
    .post(`${BACKEND_URL}/bugs`, newBug)
    .then((response) => {
      getBugList();
    })
    .catch((error) => {
      console.log("error", error);
      alert("Couldn't create new bug.");
    });
  };

  const getBugList = () => {
    axios
    .get(`${BACKEND_URL}/bugs`).then((result) => {
      setListofBugs(result.data);
    });
  };

  useEffect (() => getBugList,[]);

  const [currentBug, setCurrentBug] = useState(null);
  const updateCurrentBug = (id) => {
    setCurrentBug (id ? parseInt(id):null);
  };

  const getCurrentBugName = () => {
    if(currentBug) {
      const current = listofBugs.find((element)=>
      parseInt(element.id) === currentBug);
      return current.name;
    } else {
      return null;
    }
  }
  return (<>
<NavBar/>
<StatusBar/>
</>
  );
}

export default App;
