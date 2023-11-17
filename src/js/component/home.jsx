import React from 'react'

//include images into your bundle
import { ListTask } from './ListTask'
import '../../styles/index.css'
import { Input } from './Input'
import { Footer } from './Footer'
import { craeteTodo } from '../utils/util'
import { Error } from './Error'
//create your first component

const Home = () => {
  const [text, setText] = React.useState('')
  const [todos, setTodos] = React.useState([])
  console.log(todos)

  function handleKeydown(e) {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  function addTodo() {
    const todo = craeteTodo(text)
    setTodos([...todos, todo])
    setText('')
  }

  function handleChange(event) {
    setText(event.target.value)
  }
  console.log(todos)

  return (
    <div className='text-center'>
      <h1 className='ms-2 text'>Todos</h1>
      <div className='container'>
        <div className='shadow'>
          <Input
            text={text}
            handleChange={handleChange}
            handleKeyDown={handleKeydown}
          />

          {todos.length === 0 ? (
            <Error message='Add a todo' />
          ) : (
            <>
              <ListTask todos={todos} />
              <Footer todos={todos} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
