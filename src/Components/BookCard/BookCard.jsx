import React from 'react';
import {Link} from 'react-router-dom';

function BookCard({book, handleDeleteBook, user}){
    return(
        <div className='panel'>
            <div className="panel-heading">
                <h4 className='panel-title2'>{book.title}</h4>
            </div>
            <div className='panel-body'>
                <dl className="book-content">
                    <dd>Type</dd>
                    <dt>{book.type}</dt>
                    <dd>Genre</dd>
                    <dt>{book.genre}</dt>
                    <dd>Author</dd>
                    <dt>{book.author}</dt>
                </dl>
            </div><br />
            <div className='panel-footer'>
             {book.user === user._id ?
                <Link
                    className='btn xs btn-info'
                    to={{
                        pathname: '/edit',
                        state: {book}
                    }}
                    >
                    EDIT
                    </Link>
                    :
                    <></>
             }
             {book.user === user._id ?
                <button
                className='btn xs btn-danger margin-left-10'
                onClick={() => handleDeleteBook(book._id)}
                >
                DELETE
            </button>
            :
            <></>
             }
        </div><br/>
    </div>
    )
}
export default BookCard;
