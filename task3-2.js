let fetch = require('node-fetch');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(res => res.json())
    .then(data => data.map(e => console.log(e.name)))
    .catch(error => console.log(error));