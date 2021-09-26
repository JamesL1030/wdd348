import React from 'react';
import {useState, useEffect} from 'react';
import WeatherGrid from '../components/WeatherGrid';

function GridDenverAPI() {
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
            {arrayData && weatherData &&<WeatherGrid 
                myLocation={weatherData.name}
                myTemp={weatherData.main.temp} 
                myIcon={arrayData.icon}  
            />}
        </div>
    );
}

export default GridDenverAPI;