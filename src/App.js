import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';


function App() {

  const[films,setFilms] = useState([]);

  useEffect(()=>{
    fetchMoviesHandler();
  },[]);

  

  function fetchMoviesHandler (){
  fetch ('https://swapi.dev/api/films').then(
    response =>{
      return response.json();
    }).then(data=>{
      console.log(data.results);
      setFilms(data.results);

    })
    .catch(error=>{
      console.log(error);
    });
    
  }

  return (
    <div className="App">
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      {
        films && films.map(film=>
          <div key={films.title}>
            <h2>{film.title}</h2>
            <h2>{film.created}</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
