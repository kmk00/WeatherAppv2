import React from "react";

function MainSection({ weather }) {
  return (
    <>
      <main className="md:w-3/5 md:h-screen relative">
        {weather && (
          <div className="flex flex-col px-1 py-4 m-4 gap-2 items-center justify-center md:absolute md:bottom-10 md:left-10 md:px-32 rounded-xl align-bottom bg-black/30">
            <p className="md:text-4xl text-3xl">{weather.name}</p>
            <img
              className="h-32 w-32"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            ></img>
            <p className="md:text-8xl text-5xl p-2">
              {Math.round(weather.main.temp)}°C
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default MainSection;
