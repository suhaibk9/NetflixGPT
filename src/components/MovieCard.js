// import React from 'react';
// import { POSTER_PATH_ORIGINAL, POSTER_PATH_W500 } from '../utils/consants';

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="w-48  mr-2">
//       <img alt="Movie Poster" src={`${POSTER_PATH_W500}${movie.poster_path}`} />
//     </div>
//   );
// };

// export default MovieCard;

import React, { useState } from 'react';
import {
  POSTER_PATH_ORIGINAL,
  BACKDROP_PATH_ORIGINAL,
} from '../utils/consants';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
const MovieCard = ({ movie }) => {
  const location = useLocation();
  const genres = useSelector((state) => state.genres);
  if (!genres) return null;
  let genreNames = [];
  for (let i = 0; i < movie.genre_ids.length; i++) {
    const match = genres.find((genre) => genre.id === movie.genre_ids[i]);
    if (match) {
      if (match.name === 'Science Fiction') {
        genreNames.push('Sci-Fi');
      } else {
        genreNames.push(match.name);
      }
    }
    if (genreNames.length >= 3) {
      break;
    }
  }
    const isMovie =
      location.pathname.includes('/browse') ||
      location.pathname.includes('/gptsearch');
  return (
     <Link to={`/${isMovie ? 'movie' : 'tv'}/${movie.id}`}>
    <div className="relative group w-48 p-1 mx-1 overflow-hidden  cursor-pointer">
      <img
        alt="Movie Poster"
        src={`${POSTER_PATH_ORIGINAL}${movie.poster_path}`}
        className="w-full h-full object-cover transition-transform duration-300 "
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity group-hover:border-white group-hover:border-[.5px] duration-300">
        <img
          alt="Movie Backdrop"
          src={`${BACKDROP_PATH_ORIGINAL}${movie.backdrop_path}`}
          className="w-full h-[50%] object-cover"
        />
        <div className=" absolute bottom-0 p-1 left-0 w-full h-[50%]  bg-black bg-opacity-80">
          <h3 className="text-white text-lg font-bold">
            {location.pathname === '/browse' ||
            location.pathname === '/gptsearch'
              ? movie.title
              : movie.original_name}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-2">{movie.overview}</p>
          <div className="text-gray-400 text-sm mt-2">
            {genreNames.join(' • ')}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MovieCard;
