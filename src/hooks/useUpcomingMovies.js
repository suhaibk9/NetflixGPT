
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/consants';
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const upComingCall = async () => {
      const upcomingPromise = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const upComingMoviesJSON = await upcomingPromise.json();
    //   console.log('Upcoming Movies', upComingMoviesJSON.results);
      dispatch(addUpcomingMovies(upComingMoviesJSON.results));
    };
    upComingCall();
  }, []);
};
export default useUpcomingMovies;


