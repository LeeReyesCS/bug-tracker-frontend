import './App.css';
import { BugForm } from './Components/bugform/BugForm';
import { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import Layout from './Components/Layout';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import SignIn from './Components/signin/SignIn';
import LoggedIn from './Components/loggedin/LoggedIn';
import UpdateBug from './Components/updatebug/UpdateBug';
import { NavBar } from './Components/NavBar';



function App() {

  const [bugs, setBugs] = useState();

  const getBugs = async () => {
    try {
      const response = await api.get("/bugs");
      console.log(response.data);
      setBugs(response.data);
    } catch(error) {
      console.log(error);
    }


  }

  useEffect (() => {
    getBugs();
  },[])

  return (
    <Routes>
      <Route path ="/" element = {<Layout/>}>
        <Route path ="/signin" element={<SignIn/>}></Route>
        <Route path="/" element={<LoggedIn bugs={bugs}/>}></Route>
        <Route path ="/updatebug" element={<UpdateBug/>}></Route>
      </Route>
    </Routes>);
}

export default App;
