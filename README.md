# Axios hello world & asynchronous data fetching ⏲

This repository is for my students to practise on express routes, API calls and promise handling.

## Instructions

Everything is already installed and the scripts are ready. To install dependencies, type the following command on console:

```bash
npm install
```

To run the development mode, run:

```bash
npm run dev
```

Write the code in the <code>main.js</code> file.

---

## Iteration 1 🫧

Write a GET route to the path '/pikachu' that will:

- connect with the PokeAPI (URL is provided in main.js) using axios
- handle the returned promise with then().catch().
- provide a JSON response with all the data fetched by the API

## Iteration 2 🛸

Write a GET route to the path '/rockets' that will:

- connect with the SpaceX API (URL is provided in main.js) using axios
- handle the returned promise with try/catch and async/await
- provide a JSON response with all the data fetched by the API

## Iteration 3 👜

Write a GET route to the path '/randomuser' that will:

- connect with the Random User API (URL is provided in main.js) using axios
- handle the returned promise with try/catch and async/await
- provide a JSON response with all the data fetched by the API

## Iteration 4 👓

Modify the GET route to the path '/' to provide an HTML response containing links to all the 3 previous routes.
