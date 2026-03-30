import React from 'react';

const Card = ({ movie }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x400'}
          className="card-img-top"
          alt={movie.Title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text"><strong>Year:</strong> {movie.Year}</p>
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">View on IMDb</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
