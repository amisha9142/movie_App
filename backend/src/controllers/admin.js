const {  validatePassword } = require("../utilis/validation");
const Admin = require("../models/admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// login
exports.loginAdmin = async(req,res)=>{
    try{
        const{userId , password} = req.body;

        if(!userId){
            return res.status(400).json({status:false,message:"userId is required"})
        }
        if(!password){
            return res.status(400).json({status:false,message:"password is required"})
        }

        
        if(!validatePassword(password)){
            return res.status(400).json({status:false,message:"password is invalid"})
        }

        const existingUserid = await Admin.findOne({userId})
        if(existingUserid){
            return res.status(409).json({status:false,message:"userId already exist."})
        }
        
        const bcryptPassword = await bcrypt.hash(password,10);
        const admin = await Admin.create({userId:userId , password : bcryptPassword})
        const token = jwt.sign({userId:admin.userId},process.env.JWT_SECRET,{
            expiresIn : "9d"
        })
        
        return res.status(200).json({status:true,message:"login successfully",token,data:admin})

    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({status:false,message:"internal server error"})
    }
}
