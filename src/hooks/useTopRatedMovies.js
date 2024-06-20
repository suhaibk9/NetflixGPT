// fetch(
//   'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=GB',
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/consants';
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const topMovies = async () => {
      const topRatePromise = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const topRateMovies = await topRatePromise.json();
      dispatch(addTopRatedMovies(topRateMovies.results));
    };
    topMovies();
  }, []);
};
export default useTopRatedMovies;
