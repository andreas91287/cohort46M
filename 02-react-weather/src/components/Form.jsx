import React from 'react'

function Form() {
    const getCity = e => {
        const city = e.target.city.value.trim();
        console.log(city);
    }

    return (
        <form onSubmit={getCity}>
            <input type='text' name='city' />
            <button type='submit'>Get Weather</button>
        </form>
    )
}

export default Form