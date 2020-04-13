
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

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }


