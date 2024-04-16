const express = require("express");
const {createMovie, getMovies, deleteMovie, updateSeats} = require("../controllers/movie")
const route = express.Router();

route.post("/create-movie",createMovie);
route.get("/fetch-movies",getMovies);
route.delete('/:movieId/:availabilityId',deleteMovie)
route.put('/update-seats/:movieId/:availabilityId',updateSeats)

module.exports = route;
