import React from 'react';
import APIOutput from '../components/APIOutput';
import {useState, useEffect} from 'react';

function DenverAPI() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=108bed69d959699fe0a38d8164dbc3bb&&units=imperial');
            const data = await response.json();
            const currentWeather = data;
            setWeatherData(currentWeather);
        }
        fetchAPI();
    }, []);

    const [arrayData, setuserData] = useState(null);
    useEffect(() => {
        async function fetchArrayAPI(){
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=108bed69d959699fe0a38d8164dbc3bb');
            const data = await response.json();
            const [myArray] = data.weather;
            setuserData(myArray);
        }
        fetchArrayAPI();
    }, []);

    return (
        <div>          
            {arrayData && weatherData &&<APIOutput 
                locationName={weatherData.name}
                currentTemp={weatherData.main.temp}
                maxTemp={weatherData.main.temp_max}
                lowTemp={weatherData.main.temp_min}
                humidity={weatherData.main.humidity}
                wind={weatherData.wind.speed}
                sunrise={weatherData.sys.sunrise}
                sunset={weatherData.sys.sunset}
                weatherMain={weatherData.weather.main}
                weatherDescription={arrayData.description}
                weatherIcon={arrayData.icon}  
            />}
        </div>
    );
}

export default DenverAPI;