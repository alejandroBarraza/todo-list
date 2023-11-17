import React from 'react'
import '../../styles/index.css'
export const Footer = ({ todos }) => {
  return (
    <li className='list-task-item footer'>
      {todos.length > 0 ? todos.length : '0'} items
    </li>
  )
}
