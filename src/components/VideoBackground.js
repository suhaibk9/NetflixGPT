import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerId = useSelector((state) => state.movies.trailerVideo);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden ">
      {trailerId && trailerId.key && (
        <>
          <iframe
            className="absolute top-0 left-0 w-full h-full "
            src={`https://www.youtube.com/embed/${trailerId.key}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&loop=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          />
         
        </>
      )}
    </div>
  );
};

export default VideoBackground;
