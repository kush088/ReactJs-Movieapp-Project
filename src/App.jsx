import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);

  // 🔽 Load default movies when page loads
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=dad7d7e2&s=avengers`);
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
        }
      } catch (error) {
        console.error("Default movie load error:", error);
      }
    };

    fetchDefaultMovies();
  }, []);

  return (
    <div>
      <Navbar setMovies={setMovies} />
      <div className="container mt-4">
        <div className="row">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Card key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <h4 className="text-center text-muted mt-5">No movies found.</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
