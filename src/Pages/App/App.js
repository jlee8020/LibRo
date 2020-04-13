import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignupPage from '../SignupPage/SignUpPage'
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../Utilities/userService';
// import SearchBooksPage from '../SearchBooksPage/SearchBooksPage';
import * as bookAPI from '../../Services/books-api'
import BookListPage from '../BookListPage/BookListPage';
import AddBookPage from '../../Pages/AddBookPage/AddBookPage';


import HomePage from '../HomePage/HomePage'
import NavBar from '../../Components/NavBar/NavBar'

// import {getAllList} from '../../Services/books-api';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     books: [],
  //     user: userService.getUser()
  //   };
  // }

  state = {
      books: [],
      user: userService.getUser()
    };
  
    // login functions 

    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }
    handleLogout = () => {
      userService.logout();
      this.setState({ user: null });
    };
  
  
    handleAddBook = async newBookData => {
      const newBook = await bookAPI.create(newBookData);
      console.log(this.state)
      this.setState(state => ({
        books: [...state.books, newBook]
      }), () => 
      this.props.history.push('/'));
    }

    handleDeleteBook= async id => {
      await bookAPI.deleteOne(id);
      this.setState(state => ({
        books: state.books.filter(b => b._id !== id)
      }), () => this.props.history.push('/'));
    }
    
    /* Lifecycle Methods */
    async componentDidMount() {
      const books = await bookAPI.getAll();
      console.log(books.books)
      this.setState({books: books.books});
    }
    // componentDidMount() {
    //   console.log('App: componentDidMount');
    // }

    // componentDidUpdate() {
    //   console.log('App: componentDidUpdate');
    // }

  
  
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
            <Route exact path='/allbooks' render={({history}) =>
            <BookListPage
              books={this.state.books}
              handleAddBook={this.handleAddBook}
              user={this.state.user}
              handleDeleteBook={this.handleDeleteBook}
              history={history}
              /> 
            } />
            <Route exact path='/add' render={() =>
            <AddBookPage
              handleAddBook = {this.handleAddBook}
              user={this.state.user}
              // history={history}
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
}}

export default App;
