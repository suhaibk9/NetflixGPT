import React from 'react';
import Header from './Header';
import useAllTvShows from '../hooks/useAllTvShows';
import TVShowsContainer from './TVShowsContainer';
import VideoContainer from './VideoContainer';

const TVShows = () => {
  useAllTvShows();

  return (
    <div>
      <Header />
      <VideoContainer />
      <TVShowsContainer />
    </div>
  );
};

export default TVShows;
