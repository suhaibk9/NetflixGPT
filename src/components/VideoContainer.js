import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const VideoContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) {
    return;
  }
  const mainMovie = movies[1];
  console.log('Main Movie', mainMovie);
  return (
    <div>
      <VideoTitle
        title={mainMovie.original_title}
        overview={mainMovie.overview}
      />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default VideoContainer;
