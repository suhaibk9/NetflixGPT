import React from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import {
  POSTER_PATH_ORIGINAL,
  BACKDROP_PATH_ORIGINAL,
} from '../utils/consants';
import Header from './Header';
import { useLocation } from 'react-router-dom';

import useMediaDetails from '../hooks/useMediaDetails';
import { useSelector } from 'react-redux';
const MediaDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const isMovie = location.pathname.includes('/movie');
  useMediaDetails(id, isMovie);
  const media = useSelector((state) => state.media.media);
  const trailerId = useSelector((state) => state.media.trailerId);
  console.log("Trailer ID OF MOVIE",trailerId);
  if ( !media) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <ClipLoader color="#ffffff" size={50} />
      </div>
    );
  }
  let genreNames = media?.genres?.map((genre) => genre.name);
  return (
    <div>
      <Header />
      <div className="bg-black min-h-screen text-white pt-20">
        <div className="p-6 flex flex-col items-center">
          <div className="flex mb-8 w-full max-w-6xl">
            <img
              src={`${POSTER_PATH_ORIGINAL}${media.poster_path}`}
              alt={isMovie ? media.title : media.name}
              className="w-80 h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="ml-8 flex-1">
              <h1 className="text-4xl font-bold mb-4">
                {isMovie ? media.title : media.name}
              </h1>
              <p className="mb-2 text-xl">
                <strong>Overview:</strong> {media.overview}
              </p>
              <p className="mb-2 text-xl">
                <strong>Original Language:</strong>{' '}
                {media.original_language?.toUpperCase()}
              </p>
              <p className="mb-2 text-xl">
                <strong>Popularity:</strong> {media.popularity}
              </p>
              <p className="mb-2 text-xl">
                <strong>Release Date:</strong>{' '}
                {isMovie ? media.release_date : media.first_air_date}
              </p>
              <p className="mb-2 text-xl">
                <strong>Rating:</strong> {media.vote_average}
              </p>
              {genreNames && (
                <p className="mb-2 text-xl">
                  <strong>Genres:</strong> {genreNames.join(', ')}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col items-center mb-8">
            <h2 className="text-3xl mb-4">Trailer</h2>
            {trailerId ? (
              <iframe
                className="w-3/4 h-96 rounded-lg shadow-lg mb-8"
                src={`https://www.youtube.com/embed/${trailerId}`}
                title={`${isMovie ? media.title : media.name} Trailer`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <p>No trailer available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
