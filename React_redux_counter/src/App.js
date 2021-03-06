import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter from './Counter'
import {add, sub, addSomeNumber, subSomeNumber, asyncAdd} from './redux/actions/actions'

class App extends Component {
  
  render() {
     
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
              <button onClick={this.props.onAdd}>Додати 1</button>
              <button onClick={this.props.onSub}>Відняти 1</button>          
        </div>
        
        <div className="Actions">
              <button onClick={() => this.props.onAddSomeNumber(15)}>Додати 15</button>
              <button onClick={() => this.props.onSubSomeNumber(15)}>Відняти 15</button>          
        </div>
        <div className="Actions">          
              <input style={{marginRight: '10px'}} type="number" onChange={event => this.props.onAddSomeNumber(event.target.value)} placeholder="Добавляє введене число"/>
              <input type="number" onChange={event => this.props.onSubSomeNumber(event.target.value)} placeholder="Відніміть введене число"/>
        </div>
        <div className="Actions">          
              <button onClick={() => {
                    let enterNumber = prompt('Введіть число');
                    return this.props.onAddSomeNumber(enterNumber)
              }}>Додайте своє число</button>    
              <button onClick={() => {
                    let enterNumber = prompt('Введіть число');                
                    return this.props.onSubSomeNumber(enterNumber)
              }}>Відніміть своє число</button>   
        </div>
        
        <div className="Actions">              
              <button onClick={() => this.props.onAsyncAdd(100)}>Асинхронно добавити 100</button>          
        </div>
        
        <Counter />
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddSomeNumber: number => dispatch(addSomeNumber(number)),
        onSubSomeNumber: number => dispatch(subSomeNumber(number)),
        onAsyncAdd: number => dispatch(asyncAdd(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
