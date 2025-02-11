import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f2c11c2f4db414343ba524361986371b`;

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setdata(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <input type="text"
           placeholder="Enter Location"
           value={location}
           onChange={e =>setLocation(e.target.value)} 
           onKeyPress={search}/>
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
            { data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
            <div className="right">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          <div className="bottom">
            <div className="feels">
              <p className="bold">Feel_like</p>
              {data.main ? <p className="value"> {data.main.feels_like}°C</p> : null}
            </div>
            <div className="humidity">
              <p className="bold">Humidity</p>
              {data.main ? <p className="value"> {data.main.humidity} g/m3</p> : null}
            </div>
            <div className="windspd">
              <p className="bold">Wind_speed</p>
              {data.wind ? <p className="value"> {data.wind.speed} m/s</p> : null}
            </div>
         </div>
          <div className="botto">
            <div className="feels">
              <p className="bold">Min Temperature</p>
              {data.main ? <p className="value"> {data.main.temp_min}°C</p> : null}
            </div>
            <div className="humidity">
              <p className="bold">Max Temperature</p>
              {data.main ? <p className="value"> {data.main.temp_max}°C</p> : null}
            </div>
            <div className="windspd">
              <p className="bold">Sea Level</p>
              {data.main ? <p className="value"> {data.main.sea_level} millibars</p> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
