import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';


function App() {

  const [movieState, setmovieState] = useState([])

  useEffect( () => {
    fetch("http://localhost:8080")
    .then(response => response.json())
    .then(data => {
      setmovieState(data);
    })
    .catch(err => {
      console.error(err.message);
    });
    
  }, []);
    console.log(movieState)

const Search = () => {
  
}

  



  return (
    <div className="App">

    <div id="body">
      <p>You have arrived</p>
      <p> Behold; now -- your data</p>

      <div id='data_container'>
        <ul>
          {movieState.map(movie => {
            return (
            <li key={movie.id}>{movie.title}</li>
            )

          })}
        </ul>
      </div>
    </div>

    </div>
  );
}

export default App;
