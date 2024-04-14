import React,{useState} from 'react';
import Card from './Card';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

function Parent() {
  const [weekValue, setWeekValue] = useState(1);
  const handleNextWeek = () => {
    setWeekValue(prevWeek => prevWeek + 1);
  };
  const handlePreWeek = () => {
    setWeekValue(prevWeek => prevWeek - 1);
  };
  return (
  <>

  <p> <KeyboardArrowLeftIcon onClick={ handlePreWeek}/> week {weekValue} - jan 2024 <KeyboardArrowRightIcon onClick={handleNextWeek}/> </p>

    <div className="flex mt-40 ml-3">
    <div className="border border-black p-2" style={{ width: "130px", height: "130px" }}>
    <b>06:45AM</b><br/>ends 08:45AM  </div>
    
      <Card id={1}  weekValue={weekValue}/>
      <Card id={2}  weekValue={weekValue}/>
      <Card id={3}  weekValue={weekValue}/>
      <Card id={4}  weekValue={weekValue}/>
      <Card id={5}  weekValue={weekValue}/>
      <Card id={6}  weekValue={weekValue}/>
      <Card id={7}  weekValue={weekValue}/>
    </div>

    <Button variant="contained" style={{marginTop:"100px"}}>Save and Continue</Button>

    </>
  );
}

export default Parent;
