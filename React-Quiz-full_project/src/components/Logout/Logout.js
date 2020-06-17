import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './Logout.module.css'
import {logout} from '../../store/actions/auth'
import {Redirect} from 'react-router-dom'


class Logout extends Component {    
    
    componentDidMount() {
        this.props.logout()
    }
    
    render() {        
        
        return <Redirect to='/' />
    }
}

function mapDispatchToProps (dispatch) {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)