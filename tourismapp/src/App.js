import React, { useState } from 'react';
import './App.css';
import data from './components/data';
import Tourism from './components/Tourism';


const App = () => {

  const[tours, setTours] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0){
    return(
      <div className='refresh-page'>
        <h2>No Tours Left</h2>
         <button className='whiteBtn' onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
    
  }

  return (
    <div className="App">
      <Tourism tours ={tours} removeTour={removeTour}></Tourism>
    </div>
  );
}

export default App;
