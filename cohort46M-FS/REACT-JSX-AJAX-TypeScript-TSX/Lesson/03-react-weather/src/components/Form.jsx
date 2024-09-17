import React, { useState } from 'react'

function Form({ getWeather }) {
    // control component
    const [city, setCity] = useState('');

    const getCity = e => {
        e.preventDefault(); // Homework 02 // prevent(Default) - default Verhalten verhindern
        getWeather(city);
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={e => setCity(e.target.value)} type='text' name='city' />
            <button type='submit'>Get Weather</button>
        </form>
    )
}

export default Form