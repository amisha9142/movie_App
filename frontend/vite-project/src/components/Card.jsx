// import React,{useState} from 'react'
// import CancelIcon from '@mui/icons-material/Cancel';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// function Card() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [value, setValue] = useState(50);

//   const increaseValue = () => {
//     setValue(value + 1);
//   };

//   const decreaseValue = () => {
//       setValue(value - 1);
//     }

//   const handleDelete = () => {
//     setIsVisible(false);
//   };
//   return (
//     <>
//       <div className="flex mt-40 ml-3">
//         <div className='border border-black p-2' style={{width:"130px",height:"130px"}}>
//         <b>06:45AM</b><br/>ends 08:45AM
//         </div>

//         {isVisible && (
//         <div  className='border border-black' style={{width:"130px",height:"130px"}}>
//         <CancelIcon sx={{color:"red",marginLeft: "100px",cursor:"pointer" }} onClick={handleDelete}/>
//         <p className='pl-10'>Min 1</p>
       
//         <p className='font-semibold pl-1 pt-2'>
//         <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue}/>&nbsp; Max {value} &nbsp;
//          <AddIcon  className='bg-blue-100 rounded-xl' onClick={increaseValue}/></p>
//          <p className='pl-6 pt-4'>48 seats left</p>
//         </div>)}

//         {isVisible && (
//         <div className='border border-black' style={{width:"130px",height:"130px"}}>
//         <CancelIcon sx={{color:"red",marginLeft: "100px",cursor:"pointer" }} onClick={handleDelete}/>
//         <p className='pl-10'>Min 1</p>
       
//         <p className='font-semibold pl-1 pt-2'>
//         <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue}/>&nbsp; Max {value} &nbsp;
//          <AddIcon  className='bg-blue-100 rounded-xl' onClick={increaseValue}/></p>
//          <p className='pl-6 pt-4'>48 seats left</p>
//         </div>)}

//         {isVisible && (
//         <div className='border border-black' style={{width:"130px",height:"130px"}}>
//         <CancelIcon sx={{color:"red",marginLeft: "100px",cursor:"pointer" }} onClick={handleDelete}/>
//         <p className='pl-10'>Min 1</p>
       
//         <p className='font-semibold pl-1 pt-2'>
//         <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue}/>&nbsp; Max {value} &nbsp;
//          <AddIcon  className='bg-blue-100 rounded-xl' onClick={increaseValue}/></p>
//          <p className='pl-6 pt-4'>48 seats left</p>
//         </div>)}

//         {isVisible && (
//         <div className='border border-black' style={{width:"130px",height:"130px"}}>
//         <CancelIcon sx={{color:"red",marginLeft: "100px",cursor:"pointer" }} onClick={handleDelete}/>
//         <p className='pl-10'>Min 1</p>
       
//         <p className='font-semibold pl-1 pt-2'>
//         <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue}/>&nbsp; Max {value} &nbsp;
//          <AddIcon  className='bg-blue-100 rounded-xl' onClick={increaseValue}/></p>
//          <p className='pl-6 pt-4'>48 seats left</p>
//         </div>)}

//         {isVisible && (
//         <div className='border border-black' style={{width:"130px",height:"130px"}}>
//         <CancelIcon sx={{color:"red",marginLeft: "100px",cursor:"pointer" }} onClick={handleDelete}/>
//         <p className='pl-10'>Min 1</p>
       
//         <p className='font-semibold pl-1 pt-2'>
//         <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue}/>&nbsp; Max {value}  &nbsp;
//          <AddIcon  className='bg-blue-100 rounded-xl' onClick={increaseValue}/></p>
//          <p className='pl-6 pt-4'>48 seats left</p>
//         </div>)}

//         {isVisible && (
//         <div className='border border-black' style={{width:"130px",height:"130px"}}>
//         <CancelIcon sx={{color:"red",marginLeft: "100px",cursor:"pointer" }} onClick={handleDelete}/>
//         <p className='pl-10'>Min 1</p>
       
//         <p className='font-semibold pl-1 pt-2'>
//         <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue}/> &nbsp;Max {value}  &nbsp;
//          <AddIcon  className='bg-blue-100 rounded-xl' onClick={increaseValue}/></p>
//          <p className='pl-6 pt-4'>48 seats left</p>
//         </div>)}

//         {isVisible && (
//         <div className='border border-black' style={{width:"130px",height:"130px"}}>
//         <CancelIcon sx={{color:"red",marginLeft: "100px",cursor:"pointer" }} onClick={handleDelete}/>
//         <p className='pl-10'>Min 1</p>
       
//         <p className='font-semibold pl-1 pt-2'>
//         <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue}/> &nbsp;Max {value}  &nbsp;
//          <AddIcon  className='bg-blue-100 rounded-xl' onClick={increaseValue}/></p>
//          <p className='pl-6 pt-4'>48 seats left</p>
//         </div>)}
//       </div>
//     </>
//   )
// }

// export default Card


import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Card({ id }) {
  const [isVisible, setIsVisible] = useState(true);
  const [value, setValue] = useState(50);

  const increaseValue = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decreaseValue = () => {
    setValue(prevValue => prevValue - 1);
  };

  const handleDelete = () => {
    setIsVisible(false);
  };

  return (
    <>
   
      {isVisible && (
        <div className='border border-black' style={{ width: "130px", height: "130px" }}>
          <CancelIcon sx={{ color: "red", marginLeft: "100px", cursor: "pointer" }} onClick={handleDelete} />
          <p className='pl-10'>Min 1</p>

          <p className='font-semibold pl-1 pt-2'>
            <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue} />&nbsp; Max {value} &nbsp;
            <AddIcon className='bg-blue-100 rounded-xl' onClick={increaseValue} />
          </p>
          <p className='pl-6 pt-4'>48 seats left</p>
          </div>
      )}
  
    </>
  )
}

export default Card;

