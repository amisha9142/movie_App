const express = require("express");
const {createMovie, getMovies} = require("../controllers/movie")
const route = express.Router();

route.post("/create-movie",createMovie);
route.get("/fetch-movies",getMovies);

module.exports = route;
