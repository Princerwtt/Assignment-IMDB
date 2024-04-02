import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Cards = () => {
  const [movies, setMovies] = useState([]); // Stores the movie data
  const [selectedMovie, setSelectedMovie] = useState(null); // Stores the currently selected movie

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=ebab107d0e771faee711646843039664&language=en-US'
    )
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setMovies(data.results)) // Set the movies state with the fetched data
      .catch((error) => console.log(error)); // Log any errors that occur during the fetch
  }, []);

  // Handle click event when a movie is selected
  const handleClick = (movie) => {
    setSelectedMovie(movie);
    console.log(selectedMovie)
  };

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            onClick={() => handleClick(movie)}
            className="cards"
          >
            <div className="movie-overlay">
              <h2 className="info-card-title">{movie.title}</h2>
              <div className="rating">Rating: {movie.vote_average}</div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
