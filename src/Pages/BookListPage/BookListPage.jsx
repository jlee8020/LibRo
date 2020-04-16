import React from 'react';
import './BookListPage.css';
// import {Link} from 'react-router-dom';
import BookCard from '../../Components/BookCard/BookCard';

function BookListPage(props) {
    return (
      <>
        <h3>Book List</h3>
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

// const BookListPage = (props) => {
//     return (
//         <>
//         <header><h2>All Books List</h2></header>
//             <div className='panel panel-default'>
//             { props.books.length !== 0 
//                 ? props.books.map((book, idx) => {
//                    return (
//                        <section key={idx}>
//                        <div className="panel-heading">
//                        <div>userID {book.user}</div>
//                         <h3 className='panel-title'>{book.title}</h3>
//                         <p>Author: {book.author}</p>
//                         </div>
//                         <p>Type: {book.type}</p>
//                         <p>Genre: {book.genre}</p>
//                         <Link
//                                 className="btn sm btn-info"
//                             to={{
//                                 pathname: '/edit',
//                                 state: {book}
//                             }}
//                             >
//                             EDIT
//                         </Link>&nbsp;
//                             <button 
//                                 onClick={() => props.handleDeleteBook(book._id)} 
//                                 className="btn sm btn-danger"
//                                 >
//                                 x
//                             </button>
//                        </section>
//                    ); 
//                 })
//                 : 
//                 <div>
//                     <h3>You don't have any books yet!</h3>
//                     <p>Add a Book</p>
//                 </div>
//             }
//         </div>
//         </>
//     );
// }
                
export default BookListPage; 