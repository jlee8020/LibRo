const baseURL = 'https://api.nytimes.com/svc/books/v3/';
const apiKey = process.env.NY_KEY;

// Find Books page
export function searchBooksByListData(list) {
    return fetch(`${baseURL}lists/current/${list}.json?api-key=${apiKey}`)
    .then(response => response.json());
}

export function getAllList() {
    return fetch(`${baseURL}lists/names.json?api-key=${apiKey}`)
    .then(response => response.json());
}
