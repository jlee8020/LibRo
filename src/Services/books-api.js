
const BASE_URL = '/api/books';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(book){
    return fetch(BASE_URL, {
        method:'POST',
        headers:{'content-type': 'application/json',
    },
        body: JSON.stringify(book)
    }).then(res => res.json());
}


// const baseURL = 'https://api.nytimes.com/svc/books/v3/';
// const apiKey = process.env.API_KEY;

// // Find Books page
// export function searchBooksByListData(list) {
//     return fetch(`${baseURL}lists/current/${list}.json?api-key=${apiKey}`)
//     .then(response => response.json());
// }

// export function getAllList() {
//     return fetch(`${baseURL}lists/names.json?api-key=${apiKey}`)
//     .then(response => response.json());
// }
