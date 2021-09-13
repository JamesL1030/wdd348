import React from 'react';
import {useState, useEffect} from 'react';
import WeatherGrid from '../components/WeatherGrid';

function OrmondAPI() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Ormond&appid=108bed69d959699fe0a38d8164dbc3bb&&units=imperial');
            const data = await response.json();
            const currentWeather = data;
            setWeatherData(currentWeather);
        }
        fetchAPI();
    }, []);

    return (
        <div>       
            {weatherData &&<WeatherGrid 
                ormondLocation={weatherData.name}
                ormondTemp={weatherData.main.temp_max}
                ormondMain={weatherData.weather.main}
                ormondDescription={weatherData.weather.description}  
                ormondIcon={weatherData.weather.icon}  
            />}
        </div>
    );
}

export default OrmondAPI;