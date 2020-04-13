import React from 'react';
import './BookListPage.css';

const BooklistPage = (props) => {

    return (
        <>
        <header>My Book List</header>
        <main>
            { props.books.length !== 0 
                ? props.books.map((book, idx) => {
                   return (
                       <section key={idx}>
                        <h4>Title: {book.title}</h4>
                        <p>Author: {book.author}</p>
                        <p>Type: {book.type}</p>
                        <p>Genre: {book.genre}</p>

                        <button onClick={() => props.handleDeleteBook(book._id)} className="btn btn-default">Remove Book</button>
                       </section>
                   ); 
                })
                : 
                <div>
                    <h3>You don't have any books yet!</h3>
                    <p>Add a Book</p>
                </div>
            }
        </main>
        </>
    );
}

// const BooklistPage = (props) => {
//     return (
//         <>
//             <h1>List of My Books</h1>
//         </>
//     );
// }


export default BooklistPage; 