// -- React Imports
import React from 'react';

// - Local Imports
import './app.css';

// const api = {
//   key: process.env.API_WEATHER_KEY,
//   base: "https://api.openweathermap.org/data/2.5/"
// }

function App() {

  const dateBuilder = (day) => {
    let months = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let oneDay = days[day.getDay()];
    let date = day.getDate();
    let month = months[day.getMonth()];
    let year = day.getFullYear();

    return `${oneDay} ${date} ${month} ${year}`;
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            className="search-bar" 
            type="text" 
            placeholder="Search..." 
          />
        </div>
        <div className="location-box">
          <div className="location">Annecy, FR</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15°C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
