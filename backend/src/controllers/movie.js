const Movie = require("../models/movie")
exports.createMovie  = async(req,res)=>{
    try{
        const{title,timing,seatingCapacity,availability,week} = req.body
        const movie = await Movie.create({
            title,timing,seatingCapacity,availability,week
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