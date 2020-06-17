import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos_1}) {
  return (
    <ul>
      {todos_1.map(item => <TodoItem key={item.id} {...item} />)}
    </ul>
  )
}