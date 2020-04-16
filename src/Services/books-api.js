import tokenService from '../Utilities/tokenService'
const BASE_URL = '/api/books';

// export function getAll() {
//     return fetch(BASE_URL)
//     .then(res => res.json());
// }

export function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options, {mode: "cors"})
  .then(res => res.json());
}

export function create(book){
    return fetch(BASE_URL, {
        method:'POST',
        headers:{
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()

    },
        body: JSON.stringify(book)
    }, {mode: "cors"}).then(res => res.json());
  }
  

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    }, {mode: "cors"}).then(res => res.json());
  }

  export function update(book) {
    return fetch(`${BASE_URL}/${book._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
    },
      body: JSON.stringify(book)
    }, {mode: "cors"}).then(res => res.json());
  }
