import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

class App extends Component {
    
    state = {
        isLoggedIn: false
    }
    
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'self-active'} >Home</NavLink>
            </li>
            <li>
              <NavLink 
                  to="/about"
                  activeStyle={{
                    color: 'blue'
                  }}
              >About</NavLink>
            </li>
            <li>
              <NavLink to={{
                    pathname: '/cars'
                }}>Cart</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
        <div style={{textAlign: 'center'}}>
            <h3>Is logged in {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
            <button onClick={() => this.setState({isLoggedIn: !this.state.isLoggedIn})}>Login</button>
        </div>
        
        
        <hr/>
        
        {/*localhost:3000*/}
        <Switch>
            <Route path="/" exact render={() => <h1 style={{textAlign: 'center'}}>Home Page</h1>} />
            
            { this.state.isLoggedIn ? <Route path="/about" component={About} /> : null }
            
            <Route path="/cars/:name" component={CarDetail} />
            <Route path="/cars" component={Cars} />  
             
            {/*<Redirect to={'/'} />*/}       
            <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />            
        </Switch>
        {/*<Redirect from={'/about'} to={'/cars'} /> */} 
        
            {/*<About />*/}

            {/*<Cars />*/}
      </div>
    );
  }
}

export default App
