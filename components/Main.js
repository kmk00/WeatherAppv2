import React from "react";

function MainSection({ weather }) {
  return (
    <>
      <main className="md:w-3/5 md:h-screen h-full relative flex justify-center">
        {weather && (
          <div className="flex flex-col w-max px-8 py-2 m-4 gap-2 items-center justify-center md:absolute md:bottom-10 md:left-10 md:px-32 rounded-xl align-bottom bg-black/30">
            <p className="md:text-4xl text-lg font-bold">{weather.name}</p>
            <img
              className="h-16 w-16 md:h-32 md:w-32"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            ></img>
            <p className="md:text-8xl text-2xl font-bold p-2">
              {Math.round(weather.main.temp)}°C
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default MainSection;
