import { v4 as uuidv4 } from 'uuid'

export function craeteTodo(body) {
  const todo = {}
  todo.id = uuidv4()
  todo.body = body
  return todo
}
