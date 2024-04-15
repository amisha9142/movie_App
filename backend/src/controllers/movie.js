const Movie = require("../models/movie")
exports.createMovie  = async(req,res)=>{
    try{
        const{title,timing,seatingCapacity,availability,week,month,year} = req.body
        const movie = await Movie.create({
            title,timing,seatingCapacity,availability,week,month, year
        })
        return res.status(201).json({status:true,message:"movie created successfully",data:movie})
    }
    catch(error){
        return res.status(500).json({status:false,message:"internal server error"})
    }
}


exports.getMovies = async(req,res)=>{
    try{
        const movies = await Movie.find()
        return res.status(200).json({stutus:true,message:"movies fetched successfully",data:movies})
    }
    catch(error){
        return res.status(500).json({status:false,message:"internal server error"})
    }
}


// delete api 
exports.deleteMovie = async(req,res)=>{
    const movieId = req.params.movieId;
    const availabilityId = req.params.availabilityId;
  
    try {
      // Find the movie by ID
      const movie = await Movie.findById(movieId);
  
      // If movie is not found, return error
      if (!movie) {
        return res.status(404).json({ success: false, message: 'Movie not found' });
      }
  
      // Find the index of the availability entry to delete
      const availabilityIndex = movie.availability.findIndex(entry => entry._id.toString() === availabilityId);
  
      // If availability entry is not found, return error
      if (availabilityIndex === -1) {
        return res.status(404).json({ success: false, message: 'Availability entry not found' });
      }
  
      // Remove the availability entry from the array
      movie.availability.splice(availabilityIndex, 1);
  
      // Save the updated movie
      await movie.save();
  
      return res.status(200).json({ success: true, message: 'Availability deleted successfully' });
    } catch (error) {
      console.error('Error deleting availability:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }



  // update api
  exports.updateSeats = async (req, res) => {
    const { movieId, availabilityId } = req.params;
    const { seatsAvailable } = req.body;
  
    try {
      const movie = await Movie.findById(movieId);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
  
      const availability = movie.availability.id(availabilityId);
      if (!availability) {
        return res.status(404).json({ error: 'Availability not found' });
      }
  
      availability.seatsAvailable = seatsAvailable;
      await movie.save();
  
      res.status(200).json({ message: 'Seat availability updated successfully' });
    } catch (error) {
      console.error('Error updating seat availability:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
