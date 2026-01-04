import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/consants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { addTvTrailerId } from '../utils/tvSlice';
import { useLocation } from 'react-router-dom';

const useMovieTrailer = (movieId) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const tvTrailerId = useSelector((state) => state.tv.tvTrailerId);
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  const getTrailer = async (id, type) => {
    const url = `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`;
    const response = await fetch(url, API_OPTIONS);
    const data = await response.json();

    const trailers = data.results.filter(
      (result) => result.type === 'Trailer' && result.site === 'YouTube'
    );
    let video = trailers.length > 0 ? trailers[0] : null;

    if (!video) {
      const teasers = data.results.filter(
        (result) => result.type === 'Teaser' && result.site === 'YouTube'
      );
      video = teasers.length > 0 ? teasers[0] : null;
    }
    if (!video) video = data.results[0];

    return video ? video : null;
  };

  const fetchTrailer = async () => {
    let video;

    if (location.pathname === '/browse') {
      video = await getTrailer(movieId, 'movie');
      if (video) {
        dispatch(addTrailerVideo(video));
      }
    } else {
      video = await getTrailer(movieId, 'tv');
      if (video) {
        dispatch(addTvTrailerId(video));
      } else {
        const fallbackMovieId = 236033;
        video = await getTrailer(fallbackMovieId, 'tv');
        if (video) {
          dispatch(addTvTrailerId(video));
        }
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/browse' && !trailerVideo) fetchTrailer();
    else if (location.pathname === '/tvshows' && !tvTrailerId) fetchTrailer();
  }, []);

  return null;
};

export default useMovieTrailer;
