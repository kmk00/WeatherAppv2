import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SideBox({ fetchFunction, weather, error }) {
  const [cityInput, setCityInput] = useState("");

  const handleInput = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <div className="md:w-2/5 relative p-4">
      <form className="flex px-8 py-2 mx-auto justify-evenly justify-self-center border-b rounded-lg border-stone-100 w-min">
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
      {error && (
        <p className="text-sm a text-center text-red-500">Try different city</p>
      )}
      {weather && (
        <div className="mt-12 bg-black/30 p-8 rounded-lg">
          <h2 className="font-bold md:text-3xl border-b-2 pb-3">
            Weather details
          </h2>
          <div className="mt-4 flex flex-col gap-4 text-sm md:text-2xl">
            <div className="flex justify-between">
              <p className="opacity-80">Cloudy</p>
              <p className="font-bold">{`${weather.clouds.all} %`}</p>
            </div>
            <div className="flex justify-between">
              <p className="opacity-80">Humidity </p>
              <p className="font-bold">{`${weather.main.humidity} %`}</p>
            </div>
            <div className="flex justify-between">
              <p className="opacity-80">Wind</p>
              <p className="font-bold">{`${weather.wind.speed} m/s`}</p>
            </div>
            <div className="flex justify-between">
              <p className="opacity-80">Pressure</p>
              <p className="font-bold">{`${weather.main.pressure} hpa`}</p>
            </div>
            <div className="flex justify-between">
              <p className="opacity-80">Max Temperature</p>
              <p className="font-bold">{`${weather.main.temp_max} °C`}</p>
            </div>
            <div className="flex justify-between">
              <p className="opacity-80">Min Temperature</p>
              <p className="font-bold">{`${weather.main.temp_min} °C`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBox;
