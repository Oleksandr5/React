import React, { useState, useEffect, useReducer } from 'react'
import TodoList from './TodoList'
import Context from './context'
import reducer from './reducer'

export default function App() {
    
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos_1')) || [
      {id: 1, title: 'First todo', completed: false},
      {id: 2, title: 'Second todo', completed: true},
    ])       
    const [todoTitle, setTodoTitle] = useState('')    
    
    useEffect(() => {        
        localStorage.setItem('todos_1', JSON.stringify(state))        
    }, [state])
    
    const addTodo = event => {
        if (event.key === 'Enter') {
            dispatch({
                type: 'add',
                payload: todoTitle
            })
            setTodoTitle('')
        }
    }    
  
    return (
        <Context.Provider value={{
                dispatch
            }}>
              <div className="container">
                <h1>Todo app</h1>

                  <div className="input-field">
                    <input 
                        type="text" 
                        value={todoTitle}
                        onChange={event => setTodoTitle(event.target.value)}
                        onKeyPress={addTodo}
                    />
                    <label>Todo name</label>
                  </div>

                  <TodoList todos_1={ state } />
              </div>
        </Context.Provider>
    );  
}