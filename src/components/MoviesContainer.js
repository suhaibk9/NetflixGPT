// import React from 'react';
// import MovieList from './MovieList';
// import { useSelector } from 'react-redux';
// const MoviesContainer = () => {
//   const movies = useSelector((state) => state.movies.nowPlayingMovies);
//   if(!movies){
//     return null;
//   }
//   console.log("MOVIES LOADING IN CONTAINER", movies);
//   return (
//     <div className=" w-full bg-black ">
//       <div className="relative top-[-200px]  z-20000000">
//         <MovieList title={'Now Playing'} movies={movies} />
//       </div>
//       <div className="relative top-[-200px]  z-20000000">
//         <MovieList title={'Now Playing'} movies={movies} />
//       </div>
//       <div className="relative top-[-200px]  z-20000000">
//         <MovieList title={'Now Playing'} movies={movies} />
//       </div>
//       <div className="relative top-[-200px]  z-20000000">
//         <MovieList title={'Now Playing'} movies={movies} />
//       </div>
//     </div>
//   );
// };

// export default MoviesContainer;

import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
const MoviesContainer = () => {
  const nowPlayingMovies = useSelector( (state) => state.movies?.nowPlayingMovies );
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies?.upcomingMovies);
  if ( !nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies ) {
    return null;
  }
  console.log(
    'NOW PLAYING MOVIES',
    nowPlayingMovies,
    'POPULAR MOVIES',
    popularMovies,
    'TOP RATED MOVIES',
    topRatedMovies,
    'UPCOMING MOVIES',
    upcomingMovies
  );
  
  return (
    <div className=" w-full bg-black ">
      <div className="-mt-52  z-20 relative">
        <MovieList title={'Now Playing'} movies={nowPlayingMovies} />
      </div>
      <MovieList title={'Popular Movies'} movies={popularMovies} />

      <MovieList title={'Top Rated Movies'} movies={topRatedMovies} />

      <MovieList title={'Upcoming Movies'} movies={upcomingMovies} />
    </div>
  );
};

export default MoviesContainer;
