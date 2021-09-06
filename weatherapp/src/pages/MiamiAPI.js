import React from 'react';
import APIOutput from '../components/APIOutput';
import {useState, useEffect} from 'react';

function MiamiAPI() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=108bed69d959699fe0a38d8164dbc3bb');
            const data = await response.json();
            const [currentWeather] = data.weather;
            setWeatherData(currentWeather);
        }
        fetchAPI();
    }, []);

    return (
        <div>         
            {weatherData &&<APIOutput 
                weatherMain={weatherData.main}
                weatherDescription={weatherData.description}  
                weatherIcon={weatherData.icon}                   
            />}
        </div>
    );
}

export default MiamiAPI;
