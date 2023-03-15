import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [movies, setMovies]= useState([])
  useEffect(()=>{
    fetch('/movies')
    .then(r=> r.json())
    .then(movies=> setMovies(movies))
  },[])
  console.log(movies)
  return (
    <>
      <h1> Hello from React</h1>
      <h2>Movie title list</h2>
      {movies.map(movie=> <li>{movie.title}</li>)}
    </>
  );
}

export default App;
