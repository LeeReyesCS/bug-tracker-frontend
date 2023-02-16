import React from 'react'
import './StatusBar.css'


export const StatusBar = ({bugs}) => {


  return (
    <div className ='limiter'>
    <div className='container-table100'>
      <div className='wrap-table100'>
        <table class = "scrollable">
          <thead className = "status-headers">
        <tr>
        <th>Priority</th>
          <th>Description</th>
          <th>Status</th>
          <th>Due</th>
        </tr>
        </thead>
        <tbody>
        <div className='table'>
          {
            bugs?.map((bug) => {
              let color = bug.priority;
              console.log("This is the current color :", color, "\n for the bug priority: ", bug.priority)
              return(
                <tr className='row-container'>
                <td className='priority'><div className={color}><p className='word'>{bug.priority}</p></div></td>
                <td className='description'>{bug.description}</td>
                <td className='status'>{bug.status}</td>
                <td className='dueDate'>{bug.dueDate}</td>
                </tr>
              )
            })
          }
          </div>
          </tbody>
          </table>
          </div>
    </div>
    </div>
  )
}
export default StatusBar;