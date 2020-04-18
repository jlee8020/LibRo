import React from 'react';
import './BookListPage.css';
// import {Link} from 'react-router-dom';
import BookCard from '../../Components/BookCard/BookCard';

function BookListPage(props) {
    return (
      <>
        <h3 className="bl">Book List</h3>
        <div className='BookListPage-grid'>
          {props.books.map(book =>
              <BookCard
                  key={book._id}
                  book={book}
                  user={props.user}
                  handleDeleteBook={props.handleDeleteBook}
              />
          )}
        </div>
      </>
    );
  }
                
export default BookListPage; 