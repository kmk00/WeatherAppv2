import React from "react";

function MainSection({ weather }) {
  return (
    <main className="sm:w-3/5">
      {weather && (
        <div>
          <p>{Math.round(weather.main.temp)}°C</p>
          <p>{weather.name}</p>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            ></img>
            <p>{weather.weather[0].main}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default MainSection;
