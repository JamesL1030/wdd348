import React from 'react';
import APIOutput from '../components/APIOutput';
import {useState, useEffect} from 'react';

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
            {weatherData &&<APIOutput 
                locationName={weatherData.name}
                weatherTemp={weatherData.main.temp_max}
                weatherMain={weatherData.weather.main}
                weatherDescription={weatherData.weather.description}  
                weatherIcon={weatherData.weather.icon} 
            />}    
        </div>
    );
}

export default OrmondAPI;