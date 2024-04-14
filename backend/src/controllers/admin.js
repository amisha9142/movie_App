const { validateEmail, validatePassword } = require("../utilis/validation");

// login
exports.loginAdmin = async(req,res)=>{
    try{
        const{email , password} = req.body;

        if(!email){
            return res.status(400).json({status:false,message:"email is required"})
        }
        if(!password){
            return res.status(400).json({status:false,message:"password is required"})
        }

        if(!validateEmail(email)){
            return res.status(400).json({status:false,message:"email is invalid"})
        }
        if(!validatePassword(password)){
            return res.status(400).json({status:false,message:"password is invalid"})
        }
        return res.status(200).json({status:true,message:"login successfully"})

    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({status:false,message:"internal server error"})
    }
}
