import './App.css';
import { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import { Routes, Route} from 'react-router-dom';
import SignIn from './Components/signin/SignIn';
import LoggedIn from './Components/loggedin/LoggedIn';
import UpdateBug from './Components/updatebug/UpdateBug';
import Register from './Components/register/Register';
import About from './Components/about/About';
import PrivateRoute from './Components/privateroute/PrivateRoute';
import Cookies from 'universal-cookie';



function App() {

  const cookies = new Cookies();

  const BACKEND_URL = `https://bug-tracker-backend.herokuapp.com`;
  const [bugs, setBugs] = useState();

  const getBugs = async () => {
    fetch(`${BACKEND_URL}/bugs`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies.get("token")}`,
      },
      method: "GET",
    }).then((response) => {
      if (response.status=== 200) return response.json();})
      .then((bugData) => {
        setBugs(bugData);
        console.log(bugData);
      });

  }
 
  useEffect (() => {
    getBugs();
  },[])

  return (
    <Routes>
      <Route path ="/" element = {<Layout/>}>
        <Route path ="/signin" element={<SignIn/>}></Route>
        <Route path ="/register" element ={<Register/>}></Route>
        <Route path ="/home" element={<PrivateRoute jwt = {cookies.get("token")}><LoggedIn bugData={bugs} /></PrivateRoute>}></Route>
        <Route path ="/updatebug" element={<PrivateRoute jwt = {cookies.get("token")}><UpdateBug bugData={bugs}/></PrivateRoute>}></Route>

        <Route path ="/about" element={<PrivateRoute jwt = {cookies.get("token")}><About/></PrivateRoute>}></Route>

      </Route>
    </Routes>);
}

export default App;
