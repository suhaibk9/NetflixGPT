import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    
  return (
    <div className="py-6 pl-6  ">
      <h2 className=" text-3xl mb-2 text-white">{title}</h2>
      <div className="flex no-scrollbar overflow-scroll">
        <div className="flex  ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
