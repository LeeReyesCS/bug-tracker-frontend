import React from 'react'
import { NavBar } from '../NavBar';
import StatusBar from '../statusbar/StatusBar';
import BarChart from '../BarChart';
import Charts from '../charts/Charts';
import './LoggedIn.css'

const LoggedIn = ({bugData}) => {



  return (
    <>
    <div className='page-container'>
    <NavBar/>
    <div className='box'>
    <StatusBar bugs = {bugData}/>
    
    <div className='charts'>
      <div className='bar-graph'>
    <BarChart chartData = {bugData}/>
    </div>
    <Charts chartData={bugData}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default LoggedIn;