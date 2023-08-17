import React, { useEffect } from 'react'
import { getAllTodos } from '../redux/actions/todos'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const Todos = () => {
  const todos = useSelector(state => state?.todos)
  useEffect(() => {
    getAllTodos()
  }, [])

  return (
    <div>
      <article>
        <ul>
          {todos.map(todo => {
            return <Todo key={todo?._id} todo={todo} />
          })}
        </ul>
      </article>
    </div>
  )
}

export default Todos