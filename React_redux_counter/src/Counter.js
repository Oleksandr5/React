import React from 'react'
import {connect} from 'react-redux'
import {add2, sub2} from './redux/actions/actions'

class Counter extends React.Component {
    render() {        
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1> 
                <hr/>
                <div>
                    <button  style={{marginRight: '10px'}} onClick={() => this.props.onAdd(1)}>Add 1</button>
                    <button onClick={() => this.props.onSub(1)}>Sub 1</button>
                </div>        
            </div>            
        )
    }
}

function mapStateToProps (state) {
    return {
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onAdd: number => dispatch(add2(number)),
        onSub: number => dispatch(sub2(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)