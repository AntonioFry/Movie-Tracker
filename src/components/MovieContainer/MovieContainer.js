import React from 'react';
import Movie from '../Movie/Movie';
import '../MovieContainer/MovieContainer.css'

const MovieContainer = ({ movies }) => {
  const displayMovies = movies.map(movie => {
    return (
      <Movie
        backDrop={movie.backdrop_path}
        poster={movie.poster_path}
        rating={movie.vote_average}
        id={movie.id}
        key={movie.id}
        title={movie.title}
      />
    )
  })

  return (
    <section className='movie-container'>
      {displayMovies}
    </section>
  )
}

export default MovieContainer;