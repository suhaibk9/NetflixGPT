import React from 'react';
import Header from './Header';
import VideoContainer from './VideoContainer';
import MoviesContainer from './MoviesContainer';
import useAllMovies from '../hooks/useAllMovies';
import useGenresList from '../hooks/useGenresList';
import useClearGPT from '../utils/useClearGPT';

const Browse = () => {
  useClearGPT();
  // Single hook that fetches all movie data simultaneously
  useAllMovies();
  useGenresList();

  return (
    <div className="w-screen ">
      <Header />
      {/* Video Container */}
      <VideoContainer />
      {/* Movies Container */}

      <MoviesContainer />
    </div>
  );
};

export default Browse;
