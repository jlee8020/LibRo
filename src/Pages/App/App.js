import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignupPage from '../SignupPage/SignUpPage'
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../Utilities/userService';

import * as bookAPI from '../../Services/books-api'
import BookListPage from '../BookListPage/BookListPage';
import AddBookPage from '../../Pages/AddBookPage/AddBookPage';
import EditBookPage from '../../Pages/EditBookPage/EditBookPage';

import HomePage from '../HomePage/HomePage'
import NavBar from '../../Components/NavBar/NavBar'


class App extends Component {
  
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
    
  

    handleUpdateBook = async updatedBookData => {
      const updatedBook = await bookAPI.update(updatedBookData);
      const newBooksArray = this.state.books.map(b => 
        b._id === updatedBook._id ? updatedBook : b
      );
      this.setState(
        {books: newBooksArray},
        () => this.props.history.push('/')
      );
    }
    /* Lifecycle Methods */

    // async componentDidMount() {
    //   const books = await bookService.index();
    //   this.setState({books: books.books});
    //         // this.setState({books});
    // }
  
    async componentDidMount() {
      const books = await bookAPI.getAll();
      // this.setState({books: books.books});
      this.setState({books});
    }
 
  
  render () {
  return (
    <div className="App">
      <header className="App-header">
       <i className="fas fa-book fa-3x"></i>&nbsp;
        <h1 className="h1-main">LibRo</h1>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <NavBar 
          user={this.state.user}
              handleLogout={this.handleLogout}
        />    
      </header>
      <main>
        <Switch> 
           <Route exact path="/" render={({props}) => 
              <HomePage {...props}
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
      {this.state.user ? 
            <Route exact path='/allbooks' render={({history}) =>
            // userService.getUser() ? 
            <BookListPage
              books={this.state.books}
              handleAddBook={this.handleAddBook}
              user={this.state.user}
              handleDeleteBook={this.handleDeleteBook}
              // history={history}
              /> 
            }/>
            :
              <Redirect to='/login' />
           }
            <Route exact path='/add' render={() =>
            <AddBookPage
              handleAddBook = {this.handleAddBook}
              user={this.state.user}
              // history={history}
              />
            } />
            <Route exact path='/edit' render={({history, location}) => 
            <EditBookPage
              handleUpdateBook={this.handleUpdateBook}
              location={location}
            />
          } />
            
      </Switch>
   </main> 
        <footer className="footer">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Copyright &copy; JanLee 2020
        </footer>
    </div>
    )
  }
}

export default App;
