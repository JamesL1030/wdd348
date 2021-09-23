import React from 'react';
import {useState, useEffect} from 'react';
import WeatherGrid from '../components/WeatherGrid';

function GridMiamiAPI() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=108bed69d959699fe0a38d8164dbc3bb&&units=imperial');
            const data = await response.json();
            const currentWeather = data;
            setWeatherData(currentWeather);
        }
        fetchAPI();
    }, []);

    return (
        <div>          
            {weatherData &&<WeatherGrid
                miamiLocation={weatherData.name}
                miamiTemp={weatherData.main.temp_max}
                miamiMain={weatherData.weather.main}
                miamiDescription={weatherData.weather.description}  
                miamiIcon={weatherData.weather.icon} 
            />}
        </div>
    );
}

export default GridMiamiAPI;