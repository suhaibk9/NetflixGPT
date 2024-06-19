import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoContainer from './VideoContainer';
import MoviesContainer from './MoviesContainer';
import { useSelector } from 'react-redux';
import useGenresList from '../hooks/useGenresList';
const Browse = () => {
  useNowPlayingMovies();
  useGenresList();

  return (
    <div >
      <Header />
      {/* Video Container */}
      <VideoContainer />
      {/* Movies Container */}
      <MoviesContainer />
    </div>
  );
};

export default Browse;
