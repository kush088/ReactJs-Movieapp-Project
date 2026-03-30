import React, { useState } from 'react';
import axios from 'axios';



const Navbar = ({ setMovies }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=dad7d7e2&s=${query}`)

      console.log(response.data);

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("API error", error);
      setMovies([]);
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">🎬 Movie App</a>
      <form className="d-flex" onSubmit={handleSearch}>
        <input className="form-control me-2"type="search"placeholder="Search movies..."value={query}onChange={(e) => setQuery(e.target.value)}/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
