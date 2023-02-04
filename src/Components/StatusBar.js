import React from 'react'
import './StatusBar.css'

export const StatusBar = () => {
  return (
    <div className ='spacing'>
    <div className='container'>
      <header>
        <ul className='headers'>
          <li>Priority</li>
          <li>Description</li>
          <li>Status</li>
          <li>Due By</li>
          <li>Developer(s)</li>
        </ul>
      </header>
    </div>
    </div>
  )
}
