import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const weatherUrl = "http://api.weatherapi.com/v1/current.json?key=";
const apiKey = process.env.REACT_APP_API_KEY;

const WeatherDetails = ({ weather }) => (
  <>
    <h2>Weather</h2>
    <p>
      <b>Temperature: </b> {weather.temp_c}°C
    </p>
    <p>
      <b>Description: </b> {weather.condition.text}
    </p>
    <div>
      <img
        src={weather.condition.icon}
        alt="weather visualization"
        style={{ width: 70, height: 70, marginLeft: 10 }}
      />
    </div>
    <p>
      <b>Wind: </b> {weather.wind_kph} k/h
    </p>
  </>
);
const Weather = ({ city }) => {
  const [weather, setWeather] = useState(<></>);

  useEffect(() => {
    const completeUrl = weatherUrl + apiKey + "&q=" + city;
    axios.get(completeUrl).then((response) => {
      console.log("promise fulfilled: data->", response.data.current);
      setWeather(<WeatherDetails weather={response.data.current} />);
    });
  }, [city]);
  if (city === undefined) {
    return null;
  }
  return <div>{weather}</div>;
};

const Details = ({ filtered }) => (
  <>
    <h1 key={filtered.name.common}>{filtered.name.common}</h1>
    capital: {filtered.capital[0]} <br />
    area: {filtered.area} <br />
    <h3>languages</h3>
    <ul>
      {Object.values(filtered.languages).map((value, id) => {
        return <li key={id}>{value}</li>;
      })}
    </ul>
    <img
      src={filtered.flags.png}
      alt={filtered.flags.alt}
      style={{ width: 150, height: 100 }}
    />{" "}
    <Weather city={filtered.capital} />
  </>
);

export default Details;
