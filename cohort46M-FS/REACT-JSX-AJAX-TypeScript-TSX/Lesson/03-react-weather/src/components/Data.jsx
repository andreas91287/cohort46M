import React, { useState } from 'react'
import Form from './Form'
import Weather from './Weather'
import { base_url, api_key } from '../utils/constant';

function Data() {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState('Enter City');

    const getWeather = async city => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            const info = {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }
            setWeatherInfo(info);
            setMessage('');
        } catch (e) {
            setMessage('Enter correct City');
        }
    }

    // const getWeather = city => {
    //     fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setWeatherInfo({
    //                 country: data.sys.country,
    //                 city: data.name,
    //                 temp: data.main.temp,
    //                 pressure: data.main.pressure,
    //                 sunset: data.sys.sunset
    //             })
    //             setMessage('');
    //         })
    //         .catch(e => setMessage('Enter correct City'));
    // };

    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather weather={weatherInfo} message={message} />
        </div>
    )
}

export default Data