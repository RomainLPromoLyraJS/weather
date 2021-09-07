// -- React Imports
import React from 'react';

// - Local Imports
import './app.css';

const api = {
  key: process.env.API_WEATHER_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
