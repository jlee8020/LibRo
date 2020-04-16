import React from 'react';
import {Link} from 'react-router-dom';

function BookCard({book, handleDeleteBook, user}){
    return(
        <div className='panel sm panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{book.title}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Type</dt>
                    <dd>{book.type}</dd>
                    <dt>Genre</dt>
                    <dd>{book.genre}</dd>
                    <dt>Author</dt>
                    <dd>{book.author}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
             {book.user === user._id ?
                <Link
                    className='btn btn-xs btn-warning'
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
                className='btn btn-xs btn-danger margin-left-10'
                onClick={() => handleDeleteBook(book._id)}
                >
                DELETE
            </button>
            :
            <></>
             }
        </div>
    </div>
    )
}
export default BookCard;