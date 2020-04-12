import React from 'react'
import SearchBooksForm from '../../Components/SearchBooksForm/SearchBooksForm';
        


const SearchBooksPage = (props) => {
    return (
        <div>
            <h1>Search Books Page</h1>
            <SearchBooksForm {...props }/> 
        </div>
    );
}

export default SearchBooksPage;