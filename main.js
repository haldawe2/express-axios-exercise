const express = require('express');

const app = express();

// Iteration 1
app.get('/pikachu', (req, res, next) => {
  // ...
  // https://pokeapi.co/api/v2/pokemon/pikachu
})

// Iteration 2
// app.get(...)
// https://api.spacexdata.com/v4/rockets


// Iteration 3
// app.get(...)
// https://randomuser.me/api/


// Iteration 4
app.get('/', (req, res) => {
  res.send('<h4>All working here ✅</h4>')
})

app.listen(3000, () => { console.log('Server running on port 3000 🛫') })