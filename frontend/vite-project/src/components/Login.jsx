import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import download from '../components/download1.jpg';
import {  useNavigate } from 'react-router-dom';


import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate =  useNavigate();

  const handleLogin = async()=>{
    try{
        const response = await axios.post(
            "http://localhost:3000/api/admin/loginAdmin",
            {email,password}
        )
       
        toast.success(response.data.message)
        navigate('/card'); 

        setEmail("")
        setPassword("")
    }
    catch(error){
        console.log(error.message)
        toast.error(error.response.data.message)
    }
}
 
  return (
    <>
     <img src={download} alt="Example" className="inset-0 bg-gray bg-opacity-50" style={{width:"1100px",position:"absolute",height:"500px"}}/>
     <div className='border shadow-xl border-black text-center m-auto rounded-2xl relative bg-white bg-opacity-90' 
     style={{height:"350px" , width:"450px",top:"50px",paddingTop:"20px"}}>
       
         <h1 className='text-4xl font-bold'>Sign in to Portal</h1><br/>

        
<TextField
  id="outlined-basic"
  label="Email"
  variant="outlined"
  style={{ width: "320px" }}
  InputProps={{
    className: 'px-3 mt-2 mb-5'
  }}
  value={email} onChange={(e)=>setEmail(e.target.value)}
/>

    <TextField
      id="outlined-basic"
      label="Password"
      variant="outlined"
      style={{ width: "320px" }}
      type={password ? "text" : "password"}
      InputProps={{
        className: 'px-3 mt-1',
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setPassword(!password)}
              edge="end"
            >
              {password ? <VisibilityIcon/> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        )
      }}
      value={password} onChange={(e)=>setPassword(e.target.value)}
    />

       
        <button className='bg-black font-bold text-white rounded-2xl
        hover:bg-gray-800 mt-5'
        style={{width:"330px",height:"50px"}}
        onClick={handleLogin}
        >Login</button><br/><br/>

       
     </div>
    </>
  )
}

export default Login
