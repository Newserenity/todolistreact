import React, { useState, useEffect } from 'react'

function App() {
  const [loding, setLoding] = useState(true);
  const [Movies, setMovies] = useState([]);

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


  // const getMovies = async () => {
  //   const json = await(
  //     await fetch(
  //       "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
  //     )
  //   ).json();
  //   setMovies(json.data.movies);
  //   setLoding(false);
  // };

  return (
    <div>
      {
        loding ? <h1>loding</h1> : null
      }
    </div>
  );
}

export default App;
