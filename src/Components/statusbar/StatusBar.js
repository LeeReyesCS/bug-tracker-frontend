import React from 'react'
import './StatusBar.css'


export const StatusBar = ({bugs}) => {


  return (
    <div className ='spacing'>
    <div className='container'>
      <table>
      <header>
        <tr>
        <th>Priority</th>
          <th>Description</th>
          <th>Status</th>
          <th>Due</th>
          {/* <th>Developer(s)</th> */}
        </tr>
      </header>
          {
            bugs?.map((bug) => {
              return(
                <tr className='row-container'>
                <td className='priority'>{bug.priority}</td>
                <td className='description'>{bug.description}</td>
                <td className='status'>{bug.status}</td>
                <td className='dueDate'>{bug.dueDate}</td>
                </tr>
              )
            })
          };
          </table>
    </div>
    </div>
  )
}
export default StatusBar;