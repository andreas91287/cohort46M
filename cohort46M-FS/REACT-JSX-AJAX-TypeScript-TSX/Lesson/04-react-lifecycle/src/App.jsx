import { useState, useEffect } from 'react'
import './App.css'

const base_url = 'https://sw-info-api.herokuapp.com';

function App() {
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${base_url}/v1/peoples/1`)
      .then(response => response.json())
      .then(data => {
        setCharacter({
          name: data.name,
          birth_year: data.birth_year,
          img_url: `${base_url}/${data.image}`
        });
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return (
      <div className='spinner-border text-primary'></div>
    )
  } else {
    return (
      <div>
        <h1>Name: {character.name}</h1>
        <h2>Birth year: {character.birth_year}</h2>
        <img src={character.img_url} alt='Hero' />
      </div>
    )
  }
}

export default App
