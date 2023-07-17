const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors());
// app.use(express.json());


app.get('/', async function(request, response) {
    let data = await knex('movies').select('*')
    response.send((data))
    
});

//prepared for later
// app.get('/', async function(request, response) {
//     let data = await knex('movies').select('*')
//     response.send(JSON.Strinify(data))
    
// });










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