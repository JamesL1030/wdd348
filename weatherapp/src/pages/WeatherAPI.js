import React from 'react';
import APIOutput from '../components/APIOutput';
import {useState, useEffect} from 'react';

function WeatherAPI() {
    const [weatherData, setuserData] = useState(null);
    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Florida&appid=108bed69d959699fe0a38d8164dbc3bb');
            const data = await response.json();
            const [currentWeather] = data.weather;
            setuserData(currentWeather);
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

export default WeatherAPI;
