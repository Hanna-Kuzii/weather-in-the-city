import React from "react";
import moment from "moment";

function WeatherDisplay({ data, days }) {
  if (!data) return null;

  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");

  const todayData = data.list.filter((item) => item.dt_txt.includes(today));
  const tomorrowData = data.list.filter((item) =>
    item.dt_txt.includes(tomorrow)
  );

  const nextFewDaysData = data.list.filter((item, index) => {
    if ((index === 0) | item.dt_txt.includes("12:00")) {
      return true;
    }
  });

  const getHours = (date) => {
    return date.substring(10, 16);
  };

  console.log(nextFewDaysData);

  const getDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${date.substring(8, 10)} ${months[date.substring(5, 7) - 1]}`;
  };

  return (
    <div className="display">
      <div className="display__weather">
        {days === "today" && (
          <>
            <h2 className="display__day">{getDate(today)}</h2>
            <div className="display__weathers">
              {todayData.length !== 0
                ? todayData.map((item) => (
                    <div key={item.dt} className="day card bg-light mb-3">
                      <div className="day__date card-header">
                        {getHours(item.dt_txt)}
                      </div>
                      <div className="day__body card-body">
                        <div className="day__weather card-title">
                          <p>{item.weather[0].description} </p>
                          <img
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt={item.weather[0].description}
                            className="day__img"
                          />
                        </div>
                        <div className="card-text">
                          Temperature: {Math.round(item.main.temp - 273.15)}°C
                        </div>
                        <div className="card-text">
                          Wind: {item.wind.speed} metre/sec
                        </div>
                      </div>
                    </div>
                  ))
                : nextFewDaysData.map((item, index) => {
                    if (index === 0) {
                      return (
                        <div key={item.dt} className="day card bg-light mb-3">
                          <div className="day__body card-body">
                            <div className="day__weather card-title">
                              <p>{item.weather[0].description} </p>
                              <img
                                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                alt={item.weather[0].description}
                                className="day__img"
                              />
                            </div>
                            <div className="card-text">
                              Temperature: {Math.round(item.main.temp - 273.15)}
                              °C
                            </div>
                            <div className="card-text">
                              Wind: {item.wind.speed} metre/sec
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
            </div>

            {}
          </>
        )}

        {days === "tomorrow" && (
          <>
            <h2 className="display__day">{getDate(tomorrow)}</h2>
            <div className="display__weathers">
              {tomorrowData.map((item) => (
                <div key={item.dt} className="day card bg-light mb-3">
                  <div className="day__date card-header">
                    <p>{getHours(item.dt_txt)}</p>
                    {/* <p></p> */}
                  </div>
                  <div className="day__body card-body">
                    <div className="day__weather card-title">
                      <p>{item.weather[0].description} </p>
                      <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt={item.weather[0].description}
                        className="day__img"
                      />
                    </div>
                    <div className="card-text">
                      Temperature: {Math.round(item.main.temp - 273.15)}°C
                    </div>
                    <div className="card-text">
                      Wind: {item.wind.speed} metre/sec
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {days === "threedays" && (
          <>
            <h2 className="display__day">Next 3 Days Weather</h2>
            <div className="display__weathers">
              {nextFewDaysData.map((item, index) => {
                if (index < 3) {
                  return (
                    <div key={item.dt} className="day card bg-light mb-3">
                      <div className="day__date card-header">
                        <p>
                          {index === 0 ? getDate(today) : getDate(item.dt_txt)}
                        </p>
                        {/* <p></p> */}
                      </div>
                      <div className="day__body card-body">
                        <div className="day__weather card-title">
                          <p>{item.weather[0].description} </p>
                          <img
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt={item.weather[0].description}
                            className="day__img"
                          />
                        </div>
                        <div className="card-text">
                          Temperature: {Math.round(item.main.temp - 273.15)}°C
                        </div>
                        <div className="card-text">
                          Wind: {item.wind.speed} metre/sec
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </>
        )}
      </div>

      {days === "fivedays" && (
        <>
          <h2 className="display__day">Next 5 Days Weather</h2>
          <div className="display__weathers">
            {nextFewDaysData.map((item, index) => (
              <div key={item.dt} className="day card bg-light mb-3">
                <div className="day__date card-header">
                  {index === 0 ? getDate(today) : getDate(item.dt_txt)}
                  {/* <p></p> */}
                </div>
                <div className="day__body card-body">
                  <div className="day__weather card-title">
                    <p>{item.weather[0].description} </p>
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt={item.weather[0].description}
                      className="day__img"
                    />
                  </div>
                  <div className="card-text">
                    Temperature: {Math.round(item.main.temp - 273.15)}°C
                  </div>
                  <div className="card-text">
                    Wind: {item.wind.speed} metre/sec
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherDisplay;
