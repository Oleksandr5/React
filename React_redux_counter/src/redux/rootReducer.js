import {combineReducers} from 'redux'

import counter1 from './redusers/counter1'
import counter2 from './redusers/counter2'


export default combineReducers({
    counter1, counter2
})