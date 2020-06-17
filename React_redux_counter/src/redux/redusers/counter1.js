import {ADD, SUB, AddSomeNumber, SubSomeNumber} from '../actions/actionTypes'

const initialState = {
    counter: 0
}

export default function counter1 (state = initialState, action) {
    
    switch(action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        case AddSomeNumber:
            return {                
                counter: state.counter + (+action.payload)
            }
        case SUB:
            return {
                counter: state.counter - 1
            }
        case SubSomeNumber:
            return {                
                counter: state.counter - (+action.payload)
            }
        default:
            return state
    }
    
}