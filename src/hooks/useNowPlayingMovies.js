import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/consants';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector( (state) => state.movies.nowPlayingMovies );
  useEffect(() => {
    const getNowPlaying = async () => {
      const nowPlayingMovies = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const nowPlayingMoviesJson = await nowPlayingMovies.json();
      dispatch(addNowPlayingMovies(nowPlayingMoviesJson.results));
    };
  
   !nowPlayingMovies && getNowPlaying();
  }, []);
};
export default useNowPlayingMovies;