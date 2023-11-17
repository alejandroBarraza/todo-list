import React from 'react'
import '../../styles/index.css'
import { Task } from './Task'
export const ListTask = ({ todos }) => {
  return (
    <ul className='list-task'>
      {todos.map((todo) => (
        <Task key={todo.id}>{todo.body}</Task>
      ))}
    </ul>
  )
}
