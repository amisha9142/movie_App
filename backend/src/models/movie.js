const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    timing: String,
    week:Number,
    month:String,
    year:Number,
    availability: [
        {
            date: Date,
            seatingCapacity: Number,
            seatsAvailable: Number
        }
    ]
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
