import React, {Component} from 'react';
// import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';
import SignupPage from '../SignupPage/SignUpPage'
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../Utilities/userService';
// import tokenService from '../../Utilities/tokenService';

class App extends Component {

    state = {
      books: []
    };

    // login functions 

    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }
    handleLogout = () => {
      userService.logout();
      this.setState({ user: null });
    }
  

    /* Lifecycle Methods */
  
    componentDidMount() {
      console.log('App: componentDidMount');
    }
  
    componentDidUpdate() {
      console.log('App: componentDidUpdate');
    }
  
   render () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LibRo</h1>
        <nav>
            <NavLink exact to="/" >Home</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to="/signup" >SignUp</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to="/login" >Log In</NavLink>
          </nav>
      </header>
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
              <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      </Switch>
    </div>
  );
}
}
export default App;
