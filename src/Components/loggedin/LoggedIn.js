import React from 'react'
import { NavBar } from '../NavBar';
import StatusBar from '../statusbar/StatusBar';
import Graph from '../Graph';

const LoggedIn = ({bugs}) => {
  return (
    <>
    <NavBar/>
    <Graph bugs = {bugs}/>
    <StatusBar bugs = {bugs}/>
    </>
  )
}

export default LoggedIn;