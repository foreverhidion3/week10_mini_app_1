const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors());
// app.use(express.json());


// app.get('/', function(req, res) {
//     res.send(`Welcome to mini_app server on port ${port}`);
// })

app.get('/', async function(request, response) {
    let data = await knex('movies').select('*')
    response.send((data))
    // res.send('Welcome to Awesome Apps Home!!');
});

// app.get('/', (req, res) => {
//     knex('/').select('*')
//     .then(data => {
//         res.status(200).json(data);
//     })
// })
// app.get('/', async function(req, res) {
//     let data = await knex('movies').select('*')
//     (data => {
//         res.status(200).json(data);
//     })
// })






app.listen(port, () => {
    console.log(`Paul's mini_app server is running on port ${port}`);
  });