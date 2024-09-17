import React from 'react'

function Weather({ weather, message }) {
    if (message) {
        return (
            <div>{message}</div>
        )
    } else {
        return (
            <div>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp} °C</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Weather