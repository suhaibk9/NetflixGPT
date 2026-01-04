import React from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const VideoTitle = ({ id, title, overview }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const movieTrailer = useSelector((state) => state.movies.trailerVideo);
  const tvTrailer = useSelector((state) => state.tv.tvTrailerId);
  const isMovie = location.pathname.includes('/browse');

  let trailerId;
  if (location.pathname === '/browse') {
    trailerId = movieTrailer;
  } else {
    trailerId = tvTrailer;
  }

  const handlePlayTrailer = () => {
    if (trailerId && trailerId.key) {
      window.location.href = `https://www.youtube.com/embed/${trailerId.key}?autoplay=1&controls=1`;
    }
  };

  const handleMoreInfo = () => {
    navigate(`/${isMovie ? 'movie' : 'tv'}/${id}`);
  };

  return (
    <div
      style={{ userSelect: 'none' }}
      className="absolute translate-y-[260px] md:translate-y-[200px] -translate-x-[15px] md:translate-x-0 left-16 text-white max-w-xl z-50"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-lg md:text-xl mb-6 line-clamp-3 md:line-clamp-5">{overview}</p>
      <div className="flex space-x-4">
        <button
          onClick={handlePlayTrailer}
          style={{ borderRadius: '4px' }}
          className="bg-white text-black py-3 px-5 font-semibold flex items-center hover:bg-gray-200"
        >
          <FaPlay className="w-6 h-6 mr-2" />
          Play
        </button>
        <button
          onClick={handleMoreInfo}
          style={{ borderRadius: '4px' }}
          className="bg-[rgba(109,109,110,0.7)] text-white py-3 px-5 font-semibold flex items-center hover:bg-[rgba(109,109,110,0.4)]"
        >
          <FaInfoCircle className="w-6 h-6 mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
