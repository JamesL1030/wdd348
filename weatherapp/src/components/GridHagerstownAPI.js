import React from 'react';
import {useState, useEffect} from 'react';
import WeatherGrid from '../components/WeatherGrid';

function GridHagerstownAPI() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Hagerstown&appid=108bed69d959699fe0a38d8164dbc3bb&&units=imperial');
            const data = await response.json();
            const currentWeather = data;
            setWeatherData(currentWeather);
        }
        fetchAPI();
    }, []);

    return (
        <div>          
            {weatherData &&<WeatherGrid
                hagerstownLocation={weatherData.name}
                hagerstownTemp={weatherData.main.temp_max}
                hagerstownMain={weatherData.weather.main}
                hagerstownDescription={weatherData.weather.description}  
                hagerstownIcon={weatherData.weather.icon} 
            />}
        </div>
    );
}

export default GridHagerstownAPI;