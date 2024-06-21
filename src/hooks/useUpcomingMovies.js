import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/consants';
import { useSelector } from 'react-redux';
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((state) => state.movies.upcomingMovies);
  useEffect(() => {
    const upComingCall = async () => {
      const upcomingPromise = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const upComingMoviesJSON = await upcomingPromise.json();
      dispatch(addUpcomingMovies(upComingMoviesJSON.results));
    };
    !upComingMovies && upComingCall();
  }, []);
};
export default useUpcomingMovies;
