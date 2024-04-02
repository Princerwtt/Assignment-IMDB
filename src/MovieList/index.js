import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./style.css"

const MovieList = () => {
  const [movie, setMovie] = useState();
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ebab107d0e771faee711646843039664&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ebab107d0e771faee711646843039664&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setCast(data.cast);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className='movie-list-item'>
      <div className='movie-intro'>
        <img
          src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ''}`}
          alt=''
        />
      </div>
      
      <div className='movie-detail'>
        <img
          src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ''}`}
          alt=''
        />
      </div>
      <div className='movie-name'>{movie ? movie.original_title : ''}</div>
      <div className='vote'>Vote: {movie ? movie.vote_average : ''}</div>
      <div className='tag'>{movie ? movie.tagline : ''}</div>
      <div className='releaseDate'>Release Date: {movie ? movie.release_date : ''}</div>
      <div>{movie ? movie.overview : ''}</div>

      <div className="cast">
        <h3>Cast</h3>
        <div className="cast-list">
          {cast.map(actor => (
            <div key={actor.id} className="actor">
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
