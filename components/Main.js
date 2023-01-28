import React from "react";

function MainSection({ weather }) {
  return (
    <>
      {weather && (
        <main className="md:w-3/5 h-screen relative">
          <div className="flex px-28 py-12 m-4 gap-2 items-center md:absolute md:bottom-10 md:left-10 rounded-xl align-bottom bg-black/30">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-4xl">{weather.name}</p>
              <img
                className="h-32 w-32"
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              ></img>
            </div>
            <p className="text-8xl p-2">{Math.round(weather.main.temp)}°C</p>
          </div>
        </main>
      )}
    </>
  );
}

export default MainSection;
