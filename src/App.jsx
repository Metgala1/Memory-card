import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header'
import CardsBox from './component/CardsBox'

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clicked, setClicked] = useState([]);

    useEffect(() => {
    const pokemons = ['pikachu','Charizard','bulbasaur','squirtle','mewtwo','mew','eevee','snorlax','jigglypuff','ditto','charmander','gengar','gyarados','lapras','dragonite','scyther','pidgeot','alakazam','clefairy'];

     async function getData() {
      try {
        const result = await Promise.all(
          pokemons.map( async (pokemon) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
            if(!response.ok) throw new Error(`Failed to fetch ${pokemon}`)
              return await response.json();
          })
        );
        setData(result)
      } catch (error) {
        setError(error)
      }finally {
        setLoading(false)
      }
     }
     getData()
    },[]);

    function handleCardClick(id) {
     if (clicked.includes(id)) {
      if(score > bestScore) {
        setBestScore(score);
        
      }{
        setScore(0);
        setClicked([]);
        setData(shuffleArray(data));
      }
     } else {
      setScore(score + 1);
      setClicked([...clicked, id]);
      setData(shuffleArray(data));
     }
    }

    function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
   
 

  return (
    <div id='app'>
    <Header loading={loading} error={error} bestScore={bestScore} score={score}/>
    <CardsBox data={data} onCardClick={handleCardClick}/>
    </div>
  )
}

export default App
