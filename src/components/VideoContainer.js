import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const VideoContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  // console.log('Movies', movies);
  if (!movies) {
    return;
  }
  const mainMovie = movies[5];
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
