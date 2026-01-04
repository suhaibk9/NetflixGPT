import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useLocation } from 'react-router-dom';

const VideoBackground = ({ movieId }) => {
  const location = useLocation();
  useMovieTrailer(movieId);
  const movieTrailer = useSelector((state) => state.movies.trailerVideo);
  const showTrailer = useSelector((state) => state.tv.tvTrailerId);

  let trailerId;
  if (location.pathname === '/browse') {
    trailerId = movieTrailer;
  } else {
    trailerId = showTrailer;
  }

  return (
    <div className="w-full overflow-hidden">
      {trailerId && trailerId.key && (
        <>
          <iframe
            className="scale-150 h-[110vh] w-full aspect-video"
            src={`https://www.youtube.com/embed/${trailerId.key}?autoplay=1&mute=1&controls=0&loop=1&iv_load_policy=3&rel=0&playsinline=1&fs=1&disablekb=1&playlist=${trailerId.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            autoPlay
          />
          <div className="absolute top-0 left-0 w-full h-[110vh] bg-gradient-to-r from-black to-transparent opacity-75"></div>
        </>
      )}
    </div>
  );
};

export default VideoBackground;