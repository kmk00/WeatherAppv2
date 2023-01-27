import React, { useState } from "react";

function SideBox({ fetchFunction, weather }) {
  const [cityInput, setCityInput] = useState("");

  const handleInput = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <div className="sm:w-2/5">
      <form>
        <input
          placeholder="Give location"
          onChange={handleInput}
          value={cityInput}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchFunction(cityInput);
          }}
        >
          Get Weather
        </button>
      </form>
      <hr></hr>
      {weather && (
        <div>
          <h2>Weather details</h2>
          <p>{`Cloudy | ${weather.clouds.all}`}</p>
          <p>{`Humidity | ${weather.main.humidity}`}</p>
          <p>{`Wind | ${weather.wind.speed}m/s`}</p>
          <p>{`Pressure | ${weather.main.pressure}m/s`}</p>
          <p>{`Max Temperature | ${weather.main.temp_max}m/s`}</p>
          <p>{`Min Temperature | ${weather.main.temp_min}m/s`}</p>
        </div>
      )}
    </div>
  );
}

export default SideBox;
