import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Card({ id, weekValue, index }) {
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

  const handleDelete = async (movieId, availabilityId) => {
    try {
      // Delete the data on the server
      await axios.delete(`http://localhost:3000/api/movie/${movieId}/${availabilityId}`);
      
      // Update the local state to remove the deleted card
      setWeekData(prevWeekData => prevWeekData.filter(movie => movie._id !== movieId));
    } catch (error) {
      console.error('Error deleting availability:', error);
    }
  };

  const getDayOfWeek = (dateString) => {
    if (!dateString) return ''; // Return empty string if dateString is falsy
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    return `${dayOfWeek}  ${dayOfMonth}`;
  };
  
  return (
    <div className="flex">
      <div className="flex flex-wrap">
        {weekData.map((movie, idx) => (
          <div key={movie._id} className='border border-black ' style={{ width: "130px", height: "130px"}}>
            {isVisible && movie.availability[index] && (
              <>
                <p className='relative bottom-6'>{getDayOfWeek(movie.availability[index].date)}</p> 

                <CancelIcon
                  sx={{ color: "red", marginLeft: "100px", cursor: "pointer", position: "relative", bottom: "18px" }}
                  onClick={() => handleDelete(movie._id, movie.availability[index]._id)}
                />
                <p className='pl-7 font-semibold' style={{position:"relative",bottom:"21px"}}>{movie.timing}</p>
                <p className='font-semibold pl-1' style={{position:"relative",bottom:"11px"}}>
                  <RemoveIcon className='bg-blue-100 rounded-xl' onClick={decreaseValue} />&nbsp; Max {movie.seatingCapacity} &nbsp;
                  <AddIcon className='bg-blue-100 rounded-xl' onClick={increaseValue} />
                </p>
                <p className='pl-6 pt-1'>{movie.availability[index].seatsAvailable} seats left</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Card;
