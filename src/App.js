import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'


function App() {

  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

    useEffect(()=>{
      
      setSearch("")
      
    }, [setMovie])
 
  const showMovie = () => {


      axios.get(`https://www.omdbapi.com/?t=${search}&apikey=b69a7fbb`)
      .then(response => {

          setMovie(response.data)
     
    })
    }


  return (
    <div className="App">
      
      <div className='searchHeader'>
        <h1>OMDB Movie API 🤑</h1>

        <input type="text" placeholder="Írd be a film címét..." onChange={(e)=> {

            setSearch(e.target.value);
        }} />

        <button onClick={showMovie}>Keresés</button>
      </div>

    
        <div className='movieContainer'>
            
            <div className='movie'>
              <div className="movie-poster">
                  <img src={movie.Poster} alt="poster" />
              </div>

              <div className="movie-info">
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <p>{movie.Actors}</p>
                  <p>{movie.Genre}</p>
                  <p>IMDB: {movie.imdbRating} | Metascore: {movie.Metascore}</p>
              </div>
          </div>
        </div>



    </div>
  );
}

export default App;
