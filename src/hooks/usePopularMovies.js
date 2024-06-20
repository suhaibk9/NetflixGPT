import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/consants';
const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const popularMovies = async () => {
      const popularPromise = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const popularMoviesJson = await popularPromise.json();
    //  console.log('Now Playing Movies', popularMoviesJson.results);
      dispatch(addPopularMovies(popularMoviesJson.results));
    };
    popularMovies();
  }, []);
};
export default usePopularMovies;


