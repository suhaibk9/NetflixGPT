import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { FaPlay, FaStar, FaCalendar, FaGlobe, FaArrowLeft } from 'react-icons/fa';
import { POSTER_PATH_ORIGINAL, BACKDROP_PATH_ORIGINAL } from '../utils/consants';
import Header from './Header';
import useMediaDetails from '../hooks/useMediaDetails';
import { useSelector } from 'react-redux';

const MediaDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isMovie = location.pathname.includes('/movie');
  useMediaDetails(id, isMovie);
  const media = useSelector((state) => state.media.media);
  const trailerId = useSelector((state) => state.media.trailerId);

  if (!media) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <ClipLoader color="#E50914" size={60} />
        <p className="mt-4 text-gray-400">Loading...</p>
      </div>
    );
  }

  const title = isMovie ? media.title : media.name;
  const releaseDate = isMovie ? media.release_date : media.first_air_date;
  const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
  const runtime = media.runtime || (media.episode_run_time?.[0]) || null;
  const ratingPercent = Math.round((media.vote_average / 10) * 100);

  const formatRuntime = (minutes) => {
    if (!minutes) return null;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const handlePlayTrailer = () => {
    if (trailerId) {
      window.open(`https://www.youtube.com/watch?v=${trailerId}`, '_blank');
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      {/* Hero Section with Backdrop */}
      <div className="relative">
        {/* Backdrop Image */}
        <div className="absolute inset-0 h-[70vh] md:h-[80vh]">
          <img
            src={`${BACKDROP_PATH_ORIGINAL}${media.backdrop_path || media.poster_path}`}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 md:pt-32 px-4 md:px-12 lg:px-20">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Poster */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative group">
                <img
                  src={`${POSTER_PATH_ORIGINAL}${media.poster_path}`}
                  alt={title}
                  className="w-64 md:w-80 rounded-xl shadow-2xl shadow-black/50 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                {/* Rating Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-black font-bold text-lg">{ratingPercent}%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 max-w-3xl">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">{media.vote_average?.toFixed(1)}</span>
                  <span className="text-gray-500">({media.vote_count} votes)</span>
                </span>
                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                <span className="flex items-center gap-2">
                  <FaCalendar className="text-gray-400" />
                  {year}
                </span>
                {runtime && (
                  <>
                    <span className="w-1 h-1 bg-gray-500 rounded-full" />
                    <span>{formatRuntime(runtime)}</span>
                  </>
                )}
                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                <span className="flex items-center gap-2">
                  <FaGlobe className="text-gray-400" />
                  {media.original_language?.toUpperCase()}
                </span>
              </div>

              {/* Genres */}
              {media.genres && media.genres.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {media.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Tagline */}
              {media.tagline && (
                <p className="text-xl italic text-gray-400 mb-4">"{media.tagline}"</p>
              )}

              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-white">Overview</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {media.overview || 'No overview available.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {trailerId && (
                  <button
                    onClick={handlePlayTrailer}
                    className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
                  >
                    <FaPlay />
                    Play Trailer
                  </button>
                )}
                <button
                  onClick={() => navigate(isMovie ? '/browse' : '/tvshows')}
                  className="flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border border-white/30 hover:bg-white/30 transition-all"
                >
                  Browse {isMovie ? 'Movies' : 'TV Shows'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="relative z-10 px-4 md:px-12 lg:px-20 py-12 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Popularity</p>
              <p className="text-2xl font-bold text-white">{Math.round(media.popularity)}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Vote Count</p>
              <p className="text-2xl font-bold text-white">{media.vote_count?.toLocaleString()}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Status</p>
              <p className="text-2xl font-bold text-white">{media.status || 'N/A'}</p>
            </div>
            {isMovie && media.budget > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Budget</p>
                <p className="text-2xl font-bold text-white">${(media.budget / 1000000).toFixed(0)}M</p>
              </div>
            )}
            {isMovie && media.revenue > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Revenue</p>
                <p className="text-2xl font-bold text-white">${(media.revenue / 1000000).toFixed(0)}M</p>
              </div>
            )}
            {!isMovie && media.number_of_seasons && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Seasons</p>
                <p className="text-2xl font-bold text-white">{media.number_of_seasons}</p>
              </div>
            )}
            {!isMovie && media.number_of_episodes && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Episodes</p>
                <p className="text-2xl font-bold text-white">{media.number_of_episodes}</p>
              </div>
            )}
          </div>

          {/* Trailer Section */}
          {trailerId && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FaPlay className="text-red-500" />
                Watch Trailer
              </h2>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-video max-w-4xl">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${trailerId}`}
                  title={`${title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Production Companies */}
          {media.production_companies && media.production_companies.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Production Companies</h3>
              <div className="flex flex-wrap gap-6">
                {media.production_companies
                  .filter((company) => company.logo_path)
                  .slice(0, 5)
                  .map((company) => (
                    <div
                      key={company.id}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center min-w-[120px]"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={company.name}
                        className="h-8 object-contain filter brightness-0 invert"
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
