const BASE_URL = 'https://www.googleapis.com/books/v1/volumes/';

export function getAllPokemon() {
    return fetch(`${BASE_URL}`, {mode: "cors"})
    .then(res => res.json());
} 