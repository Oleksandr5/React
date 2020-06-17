import React from 'react'
//import Radium from 'radium'
//import './Car.module.css'
import classes from './Car.module.css'
import willClass from '../hoc/willClass'
import PropTypes from 'prop-types'

class Car extends React.Component {  
    
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()
    }
    
    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }         
    }
   
    render() {
        
        console.log('Car render');
        
        //    const inputClasses = ['input']
        const inputClasses = [classes.input]

        if (this.props.name !== '') {
    //        inputClasses.push('green')
            inputClasses.push(classes.green)
        } else {
    //        inputClasses.push('red')
            inputClasses.push(classes.red)
        }

        if (this.props.name.length > 5) {
    //        inputClasses.push('bold')
            inputClasses.push(classes.bold)
        }
        
        return (        
            <React.Fragment>
               {/*<div className="Car" style={style}>*/}
                <h3>Car name: {this.props.name}</h3> 
                <p>Year: <strong>{this.props.year}</strong></p>  
                <input 
                    ref={this.inputRef}
                    type="text" 
                    onChange={this.props.onChangeName} 
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                /> 
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment> 
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

//export default Car
//export default Radium(Car)
export default willClass(Car, classes.Car)
