import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SideBox({ fetchFunction, weather }) {
  const [cityInput, setCityInput] = useState("");

  const handleInput = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <div className="md:w-2/5 relative p-4">
      <form className="flex px-8 py-2 mx-auto justify-evenly justify-self-center border-b rounded-lg border-stone-100 w-fit">
        <input
          placeholder="Give location"
          className="bg-transparent border-none placeholder:text-white focus:outline-none text-lg"
          onChange={handleInput}
          value={cityInput}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchFunction(cityInput);
          }}
        >
          <BsSearch />
        </button>
      </form>
      {weather && (
        <div className="mt-12 bg-black/30 p-8 rounded-lg">
          <h2 className="font-bold text-3xl">Weather details</h2>
          <div className="mt-4 flex flex-col">
            <div className="flex justify-between">
              <p>Cloudy</p>
              <p>{`${weather.clouds.all} %`}</p>
            </div>
            <div className="flex justify-between">
              <p>Humidity </p>
              <p>{`${weather.main.humidity} %`}</p>
            </div>
            <div className="flex justify-between">
              <p>Wind</p>
              <p>{`${weather.wind.speed}m/s`}</p>
            </div>
            <div className="flex justify-between">
              <p>Pressure</p>
              <p>{`${weather.main.pressure}hpa`}</p>
            </div>
            <div className="flex justify-between">
              <p>Max Temperature</p>
              <p>{`${weather.main.temp_max}°C`}</p>
            </div>
            <div className="flex justify-between">
              <p>Min Temperature</p>
              <p>{`${weather.main.temp_min}°C`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBox;
