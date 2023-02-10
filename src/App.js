import './App.css';
import { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import Layout from './Components/Layout';
import { Routes, Route} from 'react-router-dom';
import SignIn from './Components/signin/SignIn';
import LoggedIn from './Components/loggedin/LoggedIn';
import UpdateBug from './Components/updatebug/UpdateBug';
import Register from './Components/register/Register';



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
        <Route path ="/register" element ={<Register/>}></Route>
        <Route path="/" element={<LoggedIn bugData={bugs}/>}></Route>
        <Route path ="/updatebug" element={<UpdateBug bugData={bugs}/>}></Route>
      </Route>
    </Routes>);
}

export default App;
