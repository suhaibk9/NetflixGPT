
import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
const MoviesContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies?.upComingMovies);
  if (
    !nowPlayingMovies ||
    !popularMovies ||
    !topRatedMovies ||
    !upcomingMovies
  ) {
    return null;
  }
  return (
    <div className=" w-full bg-black ">
      {/* <div className="-mt-52  z-20 relative">
        <MovieList title={'Now Playing'} movies={nowPlayingMovies} />
      </div> */}
      <div className="-mt-[9rem]  z-20 relative">
        <MovieList title={'Now Playing'} movies={nowPlayingMovies} />
      </div>
      <MovieList title={'Popular Movies'} movies={popularMovies} />

      <MovieList title={'Top Rated Movies'} movies={topRatedMovies} />

      <MovieList title={'Upcoming Movies'} movies={upcomingMovies} />
    </div>
  );
};

export default MoviesContainer;
