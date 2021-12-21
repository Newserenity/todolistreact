import MoviesContents from '../components/MoviesContents'
import React, { useState, useEffect } from 'react'

function home() {
    const [loding, setLoding] = useState(true);
    const [movies, setMovies] = useState([]);
  
    const getMovies = async() => {
      const response = await fetch(
          'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        );
      const json = await response.json();
  
      setMovies(json.data.movies);
      setLoding(false);
    }
  
    useEffect(() => {
      getMovies();
    }, [])
  
    return (
      <div>
        {loding ? (
        <h1>loding</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <MoviesContents coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              key={movie.id}/>
        ))}
        </div>
        )}
      </div>
    );
  }

  export default Home;