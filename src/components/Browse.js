import React, { useEffect } from 'react';
import Header from './Header';
import VideoContainer from './VideoContainer';
import MoviesContainer from './MoviesContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useGenresList from '../hooks/useGenresList';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useClearGPT from '../utils/useClearGPT';
const Browse = () => {
    useClearGPT();
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
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
