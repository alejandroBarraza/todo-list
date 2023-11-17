import React from 'react'
import '../../styles/index.css'

export const Task = ({ children }) => {
  return (
    <div className='list-task-item'>
      <li>{children}</li>
      <span>X</span>
    </div>
  )
}
