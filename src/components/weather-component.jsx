
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=57.15&longitude=24.86&hourly=temperature_2m&models=best_match&current_weather=true');
      const data = await res.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {weatherData.current_weather && (
        <div className='text-xs lg:text-sm float-right px-3 m-3 text-gray-300'>
          <p>Temperatūra Siguldā: <b className=''>{weatherData.current_weather.temperature}°C</b></p>
        </div>
      )}
    </div>
  );
};

export default Weather;