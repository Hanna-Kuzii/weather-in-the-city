import React, { useState } from "react";
import "./style/App.css";
import WeatherForm from "./componets/WeatherForm/WeatherForm";
import WeatherDisplay from "./componets/WeatherDisplay/WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [enterCity, setEnterCity] = useState("false");
  const [requestCity, setRequestCity] = useState(false);
  const [days, setDays] = useState("today");
console.log(enterCity)
  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="app">
      <h1 className="app__header">Weather in your city</h1>
      <WeatherForm
        onWeatherData={handleWeatherData}
        weatherData={weatherData}
        setEnterCity={setEnterCity}
        enterCity={enterCity}
        setDays={setDays}
        setRequestCity={setRequestCity}
      />
      {enterCity &&
        (!requestCity ? (
          <WeatherDisplay data={weatherData} days={days} />
        ) : (
          <div>Try other city</div>
        ))}
    </div>
  );
}

export default App;
