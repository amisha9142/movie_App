import React, { useState } from 'react';
import Card from './Card';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { toast } from 'react-hot-toast';

function Parent() {
  const [weekValue, setWeekValue] = useState(1);

  const handleNextWeek = () => {
    setWeekValue(prevWeek => prevWeek + 1);
  };

  const handlePreWeek = () => {
    setWeekValue(prevWeek => prevWeek - 1);
  };

  const showToast = (message) => {
    toast.success(message);
  };

const handleSaveAndContinue = () => {
  showToast("Data updated successfully");
};

  return (
    <>
      <p className='mt-10 text-center text-2xl'>
        <KeyboardArrowLeftIcon className='bg-gray-200 rounded-xl' onClick={handlePreWeek} />
        &nbsp; &nbsp; week {weekValue} - jan 2024 &nbsp; &nbsp;
        <KeyboardArrowRightIcon className='bg-gray-200 rounded-xl' onClick={handleNextWeek} />
      </p>

      <div className="flex mt-28 ml-3">
        <div className="border border-black p-2" style={{ width: "130px", height: "130px" }}>
          <b>06:45AM</b><br />ends 08:45AM </div>

        <Card id={1} weekValue={weekValue} index={0} />
        <Card id={2} weekValue={weekValue} index={1} />
        <Card id={3} weekValue={weekValue} index={2} />
        <Card id={4} weekValue={weekValue} index={3} />
        <Card id={5} weekValue={weekValue} index={4} />
        <Card id={6} weekValue={weekValue} index={5} />
        <Card id={7} weekValue={weekValue} index={6} />
      </div>

      <Button variant="contained" style={{ marginTop: "70px", marginLeft: "450px" }} onClick={handleSaveAndContinue}>
          Save and Continue
      </Button>
    </>
  );
}

export default Parent;
