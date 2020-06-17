import React from 'react'
import classes from './TodoList.module.css'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function TodoList(props) {    
    
    return (
        <ul className={classes.TodoList}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/> 
            })}
                                   
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList