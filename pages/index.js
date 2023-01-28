import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MainSection from "@/components/Main";
import SideBox from "@/components/SideBox";
import Image from "next/image";

export default function Home() {
  const [weather, setWeather] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [bgImage, setBgImage] = useState(
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  );

  const chooseImage = {
    Clouds:
      "https://images.unsplash.com/photo-1445264618000-f1e069c5920f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    Rain: "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    Thunderstorm:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    Drizzle:
      "https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    Snow: "https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    Clear:
      "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80",
  };

  const getWeather = (input) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setCityError(false);
        setWeather(res.data);
      })
      .catch((error) => {
        if (error.request) {
          setCityError(true);
        } else {
          console.log("Error", error.message);
        }
      });
    setLoading(false);
  };

  useEffect(() => {
    if (weather) {
      Object.entries(chooseImage).forEach(([key, value]) => {
        if (key === weather.weather[0].main) {
          setBgImage(value);
          return;
        }
      });
    }
  }, [weather]);

  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute bg-black/60 top-0 bottom-0 right-0 left-0 z-[1]" />
      <Image
        layout="fill"
        className="object-cover z-0 h-max"
        alt="background image"
        src={bgImage}
      ></Image>
      <div className="flex flex-col-reverse md:flex-row relative z-10 text-white md:h-screen cursor-default">
        <MainSection weather={weather}></MainSection>
        <SideBox
          weather={weather}
          error={cityError}
          fetchFunction={getWeather}
        ></SideBox>
      </div>
    </div>
  );
}
