import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignupPage from '../SignupPage/SignUpPage'
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../Utilities/userService';
import SearchBooksPage from '../SearchBooksPage/SearchBooksPage';

import HomePage from '../HomePage/HomePage'
import NavBar from '../../Components/NavBar/NavBar'

import {getAllList} from '../../Services/books-api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      user: userService.getUser()
    };
  }


 
    // login functions 

    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }
    handleLogout = () => {
      userService.logout();
      this.setState({ user: null });
    };
  
  
 
    /* Lifecycle Methods */
    async componentDidMount() {
      const book = await getAllList();
      console.log(book.results);
      this.setState({ book: book.results })
    }
    // componentDidMount() {
    //   console.log('App: componentDidMount');
    // }
  
    componentDidUpdate() {
      console.log('App: componentDidUpdate');
    }
  
    //books data
    handleGetBooks = () => {
      userService.getBooks(this.state.user._id).then(data => {
        this.setState({ books: data });
      });
    }

    handleClickSearchBook = ({ title, author }) => {
      userService.addBook(this.state.user._id, {
        title: title,
        author: author
      }).then(data => {
         this.setState({ books: data }, () => {
           return this.props.history.push('/my-booklist-page')
         })
      })
    }
  
  
   render () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LibRo</h1>
        <NavBar 
          user={this.state.user}
              handleLogout={this.handleLogout}
        />    
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={(props) => 
              <HomePage {...props} />
              }
            />
          <Route exact path="/search-books-page" render={(props) => 
              <SearchBooksPage {...props} 
                handleClickSearchBook={this.handleClickSearchBook}
              />
              } />
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
  </main> 
        <footer className="footer">
          Copyright &copy; JanLee 2020
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </footer>
  </div>
);
}
}
export default App;
