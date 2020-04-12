import React, {Component} from 'react';
// import './App.css';
import {Switch, Route, NavLink, Link} from 'react-router-dom';
import SignupPage from '../SignupPage/SignUpPage'
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../Utilities/userService';
import BooklistPage from '../BookListPage/BookList'
import SearchBooksPage from '../SearchBooksPage/SearchBooksPage';

import BookPage from '../BookPage/BookPage'
import {getAllBook} from '../../Services/books-api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      book: [],
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
  
    getBook = (idx) => {
      return this.state.book[idx];
    }
 
    /* Lifecycle Methods */
    async componentDidMount() {
      const book = await getAllBook();
      console.log(book.results);
      this.setState({ book: book.results })
    }
    // componentDidMount() {
    //   console.log('App: componentDidMount');
    // }
  
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
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to="/booklist" >Book List</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to="/searchbooks" >Search Books</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to="/bookpage" >Book Page</NavLink>
            &nbsp;&nbsp;&nbsp;
          </nav>
      </header>
        <Switch>
          <Route exact path="/bookpage" render={() => 
            <section>
            {this.state.book.map((book, idx) =>
             <Link
              key={book.title}
              to={`/book/${idx}`}
              >
              {book.title}
              </Link>
              )}
            </section>
            } />
            <Route path='/book/:idx' render={(props) => 
              <BookPage 
                {...props}
              />
            }></Route>
           <Route exact path="/searchbooks" render={() => 
            <SearchBooksPage />
            }
          />
          <Route exact path="/booklist" render={() => 
            <BooklistPage />
            }
          />
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
