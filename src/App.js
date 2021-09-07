// -- React Imports
import React, { useState } from 'react';

// - Local Imports
import './app.css';

// const dotenv = require('dotenv');

const api = {
  key: process.env.REACT_APP_API_WEATHER_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [isQuery, setQuery] = useState('');
  const[isWeather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${isQuery}&units=metric&APPID=${api.key}`)
      .then(result => result.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

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
    <div className={
      (typeof isWeather.main != "undefined") 
      ? ((isWeather.main.temp > 16) 
      ? "app warm" 
      : "app")
    : "app"}>
      <main>
        <div className="search-box">
          <input 
            className="search-bar" 
            type="text" 
            placeholder="Search..."
            onChange={event => setQuery(event.target.value)}
            value={isQuery}
            onKeyPress={search}
          />
        </div>
        {(typeof isWeather.main != "undefined") ? ( 
          <div>
            <div className="location-box">
              <div className="location">{isWeather.name}, {isWeather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(isWeather.main.temp)}°C
              </div>
              <div className="weather">{isWeather.weather[0].main}
              </div>
            </div>
          </div>
        ) : ('')}  
      </main>
    </div>
  );
}

export default App;
