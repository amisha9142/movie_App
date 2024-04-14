import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Card({ id , weekValue }) {
  const [isVisible, setIsVisible] = useState(true);
  const [value, setValue] = useState(50);
  const [weekData, setWeekData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/movie/fetch-movies");
      const moviesData = response.data.data;
      const weekOneData = moviesData.filter(movie => movie.week === weekValue); // Filter data for week 1 
      setWeekData(weekOneData);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [weekValue]);

  const increaseValue = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decreaseValue = () => {
    setValue(prevValue => prevValue - 1);
  };

  const handleDelete = () => {
    setIsVisible(false);
  };

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };
  
  // // Example usage:
  // const dayOfWeek = getDayOfWeek();
  // console.log(dayOfWeek); // Output: "Tuesday"
  
  return (
    <div className="flex ml-3">
      <div className="flex flex-wrap">
       
        {weekData.map(movie => (
          <div key={movie._id} className='border border-black p-2' style={{ width: "130px", height: "130px" }}>
            {/* <h2 className="text-xl font-bold mb-4">{movie.availability.map(date => date.date)}</h2> */}
            <p>{getDayOfWeek(movie.availability[0].date)}</p> 
            <CancelIcon sx={{ color: "red", marginLeft: "100px", cursor: "pointer" }} onClick={handleDelete} />
            <p className='pl-10'><b>{movie.timing}</b><br/>ends {movie.endTime}</p>
            <p className='font-semibold pl-1 pt-2'>
              <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue} />&nbsp; Max {movie.seatingCapacity} &nbsp;
              <AddIcon className='bg-blue-100 rounded-xl' onClick={increaseValue} />
            </p>
            <p className='pl-6 pt-4'>{movie.availability[0].seatsAvailable} seats left</p>
          </div>
        ))}
      </div>
    </div>
  );
        }

export default Card;
