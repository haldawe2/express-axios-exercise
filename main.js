const express = require('express');
const axios = require('axios');

const app = express();

// Iteration 1
app.get('/pikachu', (req, res, next) => {
  // https://pokeapi.co/api/v2/pokemon/pikachu

})

// Iteration 2
app.get('/rockets', (req, res, next) => {
  // https://api.spacexdata.com/v4/rockets

})

// Iteration 3
app.get('/randomuser', (req, res, next) => {
  // https://randomuser.me/api/

})

// Iteration 4
// app.get...

app.listen(3000, () => { console.log('Server running on port 3000 🛫') })