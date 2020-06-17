import React, { useState } from 'react'
import classes from './AddTodo.module.css'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {  // self hook chanch value in input
    const [ value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
        
    }
}

function AddTodo ({ onCreate }) {
    
    const input = useInputValue('')
    
    function submitHandler(event) {
        event.preventDefault() // відміняємо дефолтну поведінку, для того щоб сторінка не перезагружалася
        
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }    
        
    return (
        <form className={classes.AddTodo} onSubmit={submitHandler}>            
            <input {...input.bind}/>
            <button type='submit'>Add todo</button>
        </form>
    )
    
    AddTodo.propTypes = {        
        onCreate: PropTypes.func.isRequired
    }
}

export default AddTodo