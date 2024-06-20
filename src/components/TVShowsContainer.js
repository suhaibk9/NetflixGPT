import React,{useEffect} from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
const TVShowsContainer = () => {
    const airingTodayTv = useSelector((state) => state.tv?.airingTodayTv);
    const onTheAirTv = useSelector((state) => state.tv?.onTheAirTv);
    const topRatedTv = useSelector((state) => state.tv?.topRatedTv);
    const popularTv= useSelector((state) => state.tv?.popularTv);
    if(!airingTodayTv || !onTheAirTv || !topRatedTv || !popularTv)return null;

  return (
    <div className=" w-full bg-black ">
      <div className="-mt-52  z-20 relative">
        <MovieList title={'Airing Today'} movies={airingTodayTv} />
      </div>
      <MovieList title={'On The Air'} movies={onTheAirTv} />

      <MovieList title={'Top Rated Shows'} movies={topRatedTv} />

      <MovieList title={'Popular Shows'} movies={popularTv} />
    </div>
  );
};


export default TVShowsContainer;


// import React from 'react';
// import MovieList from './MovieList';
// import { useSelector } from 'react-redux';
// const MoviesContainer = () => {
//   const nowPlayingMovies = useSelector(
//     (state) => state.movies?.nowPlayingMovies
//   );
//   const popularMovies = useSelector((state) => state.movies?.popularMovies);
//   const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
//   const upcomingMovies = useSelector((state) => state.movies?.upComingMovies);
//   if (
//     !nowPlayingMovies ||
//     !popularMovies ||
//     !topRatedMovies ||
//     !upcomingMovies
//   ) {
//     return null;
//   }
//   return (
//     <div className=" w-full bg-black ">
//       <div className="-mt-52  z-20 relative">
//         <MovieList title={'Now Playing'} movies={nowPlayingMovies} />
//       </div>
//       <MovieList title={'Popular Movies'} movies={popularMovies} />

//       <MovieList title={'Top Rated Movies'} movies={topRatedMovies} />

//       <MovieList title={'Upcoming Movies'} movies={upcomingMovies} />
//     </div>
//   );
// };

// export default MoviesContainer;
