import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Card({ weekValue, index }) {
  const [isVisible, setIsVisible] = useState(true);
  const [weekData, setWeekData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/movie/fetch-movies");
      const moviesData = response.data.data;
      const weekOneData = moviesData.filter(movie => movie.week === weekValue); 
      setWeekData(weekOneData);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [weekValue]);


   
  const updateSeats = async (movieId, availabilityId, newSeatingCapacity) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/movie/update-seats/${movieId}/${availabilityId}`, {
        seatingCapacity: newSeatingCapacity
      });
      console.log(response.data.message);
      // Refresh data after successful update
      fetchData();
    } catch (error) {
      console.error('Error updating seat availability:', error);
    }
  }

  const increaseValue = async (movieId, availabilityId, currentSeatingCapacity) => {
    if (currentSeatingCapacity < 50) {
      const newSeatingCapacity = currentSeatingCapacity + 1;
      updateSeats(movieId, availabilityId, newSeatingCapacity);
    }
  };
  
  const decreaseValue = async (movieId, availabilityId, currentSeatingCapacity) => {
    if (currentSeatingCapacity > 0) {
      const newSeatingCapacity = currentSeatingCapacity - 1;
      updateSeats(movieId, availabilityId, newSeatingCapacity);
    }
  };

  const handleDelete = async (movieId, availabilityId) => {
    try {
      await axios.delete(`http://localhost:3000/api/movie/deleteMovie/${movieId}/${availabilityId}`);
      // Update the local state to remove the deleted card
      setWeekData(prevWeekData => prevWeekData.filter(movie => movie._id !== movieId));
    } catch (error) {
      console.error('Error deleting availability:', error);
    }
  };

  const getDayOfWeek = (dateString) => {
    if (!dateString) return ''; 
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
                  <RemoveIcon className='bg-blue-100 rounded-xl' onClick={() => decreaseValue(movie._id, movie.availability[index]._id, movie.availability[index].seatingCapacity)} />
                  &nbsp; Max {movie.availability[index].seatingCapacity} &nbsp;
                  <AddIcon className='bg-blue-100 rounded-xl' onClick={() => increaseValue(movie._id, movie.availability[index]._id, movie.availability[index].seatingCapacity)} />
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
