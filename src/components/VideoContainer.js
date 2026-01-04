import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useLocation } from 'react-router-dom';

const VideoContainer = () => {
  const location = useLocation();
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  const tvShow = useSelector((state) => state.tv?.topRatedTv);
  const isLocationBrowse = location.pathname === '/browse';

  const mediaType = isLocationBrowse ? movies : tvShow;

  if (!mediaType) {
    return null;
  }

  const mainType = mediaType[2];

  return (
    <div>
      <VideoTitle
        id={mainType.id}
        title={isLocationBrowse ? mainType.original_title : mainType.original_name}
        overview={mainType.overview}
      />
      <VideoBackground movieId={mainType.id} />
    </div>
  );
};

export default VideoContainer;
