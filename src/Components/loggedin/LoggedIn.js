import React from 'react'
import { NavBar } from '../NavBar';
import StatusBar from '../statusbar/StatusBar';
import BarChart from '../BarChart';
import Charts from '../charts/Charts';
import './LoggedIn.css'

const LoggedIn = ({bugData}) => {


  return (
    <>
    <NavBar/>
    <div className='box'>
    <BarChart chartData = {bugData}/>
    <StatusBar bugs = {bugData}/>
    </div>
    <Charts chartData={bugData}/>
    </>
  )
}

export default LoggedIn;