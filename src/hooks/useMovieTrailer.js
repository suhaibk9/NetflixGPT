import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/consants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const trailer = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const trailerJson = await trailer.json();
    const trailers = trailerJson.results.filter((result) => {
      return result.type === 'Trailer' && result.site === 'YouTube';
    });
    let teaser;
    //No Trailer Found Check for Teaser
    if (!trailers) {
      teaser = trailerJson.results.filter((result) => {
        return result.type === 'Teaser' && result.site === 'YouTube';
      });
    }
    const ele = trailers.length > 0 ? trailers[0] : teaser[0];
    dispatch(addTrailerVideo(ele));
  };
  useEffect(() => {
    getTrailer();
  }, []);

  return null;
};

export default useMovieTrailer;
