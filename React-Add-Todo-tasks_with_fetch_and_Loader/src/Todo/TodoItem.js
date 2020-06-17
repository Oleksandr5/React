import React, { useContext } from 'react'
import classes from './TodoItem.module.css'
import PropTypes from 'prop-types'
import Context from '../context';

function TodoItem({ todo, index, onChange }) {
    
    const { removeTodo } = useContext(Context)
    
    const cls = []
    
    if(todo.completed) {
        cls.push('done')
    }
    return (
        <li className={classes.TodoItem}>  
           <span className={cls.join(' ')}>
               <input 
                   type="checkbox" 
                   onChange={() => onChange(todo.id)}
                   checked={todo.completed}
               />
               <strong>{index + 1}</strong>
               &nbsp;
               {todo.title} 
           </span>    
                      
           <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>      
                       
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem