import React, { useState } from "react";
import axios from "axios";

function WeatherForm({
  onWeatherData,
  weatherData,
  setEnterCity,
  enterCity,
  setDays,
  setRequestCity,
}) {
  const [city, setCity] = useState("");
  const apiKey = "66ef13c788c86f550f6a58268035931f";

  const fetchWeatherData = (event) => {
    event.preventDefault();
    setEnterCity(true);
    setDays("today");

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
      .then((response) => {
        onWeatherData(response.data);
        setRequestCity(false);
      })
      .catch((error) => {
        console.error(error);
        onWeatherData(null);
        setRequestCity(true);
      });
  };

  const handleSetDays = (period) => {
    setDays(period);
  };

  return (
    <div className="form">
      <form
        className="form__search input-group mb-3"
        onSubmit={(event) => fetchWeatherData(event)}
      >
        <input
          type="text"
          className="form__input form-control"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setEnterCity(false);
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary form__button"
            // onClick={fetchWeatherData}
            type="submit"
          >
            Get weather
          </button>
        </div>
      </form>
      {enterCity && weatherData && (
        <fieldset data-toggle="buttons" className="form__radiobuttons">
          <label className="btn btn-secondary active">
            <input
              type="radio"
              className="form__radio"
              name="weather"
              id="today"
              autoComplete="off"
              defaultChecked
              onClick={() => handleSetDays("today")}
            />
            Today's weather
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              className="form__radio"
              name="weather"
              id="tomorrow"
              autoComplete="off"
              onClick={() => handleSetDays("tomorrow")}
            />
            Tomorrow's weather
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              className="form__radio"
              name="weather"
              id="threedays"
              autoComplete="off"
              onClick={() => handleSetDays("threedays")}
            />
            3 days weather
          </label>

          <label className="btn btn-secondary">
            <input
              type="radio"
              className="form__radio"
              name="weather"
              id="fivendays"
              autoComplete="off"
              onClick={() => handleSetDays("fivedays")}
            />
            5 days weather
          </label>
        </fieldset>
      )}
    </div>
  );
}

export default WeatherForm;
