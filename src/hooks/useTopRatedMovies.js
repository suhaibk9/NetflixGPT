import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/consants';
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  useEffect(() => {
    const topMovies = async () => {
      const topRatePromise = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const topRateMovies = await topRatePromise.json();
      dispatch(addTopRatedMovies(topRateMovies.results));
    };
    !topRatedMovies && topMovies();
  }, []);
};
export default useTopRatedMovies;
