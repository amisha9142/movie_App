const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path : "./.env"})
const adminRoute = require("./src/routes/admin")
const cors = require("cors")

const app = express()
app.use(cors());  
app.use(express.json());
app.use("/api/admin",adminRoute)

mongoose.connect(process.env.DB).then(()=>{
    console.log("mogoDb is connected")
}).catch((error)=>{
    console.log(error)
})

port = process.env.PORT
app.listen(port,function(){
    console.log(`app is listening on port ${port}`)
})


