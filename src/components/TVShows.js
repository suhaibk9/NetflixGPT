import React, { useEffect } from 'react';
import Header from './Header';
import useAiringToday from '../hooks/useAiringTodayTv';
import useOnTheAirTv from '../hooks/useOnTheAirTv';
import useTopRatedTv from '../hooks/useTopRatedTv';
import usePopularTv from '../hooks/usePopularTv';
import TVShowsContainer from './TVShowsContainer';
import VideoContainer from './VideoContainer';
import MoviesContainer from './MoviesContainer';
const TVShows = () => {
  useAiringToday();
  useOnTheAirTv();
  useTopRatedTv();
  usePopularTv();
  return (
    <div>
      <Header />
      {/* Video Container */}
      <VideoContainer/>
      <TVShowsContainer/>
      {/* Movies Container */}

      
    </div>
  );
};

export default TVShows;

// import React, { useEffect } from 'react';
// import Header from './Header';
// import VideoContainer from './VideoContainer';
// import MoviesContainer from './MoviesContainer';
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
// import useGenresList from '../hooks/useGenresList';
// import usePopularMovies from '../hooks/usePopularMovies';
// import useTopRatedMovies from '../hooks/useTopRatedMovies';
// import useUpcomingMovies from '../hooks/useUpcomingMovies';

// const Browse = () => {
//     useNowPlayingMovies();
//     usePopularMovies();
//     useTopRatedMovies();
//     useUpcomingMovies();
//     useGenresList();
//   return (
    // <div>
    //   <Header />
    //   {/* Video Container */}
    //   <VideoContainer />
    //   {/* Movies Container */}

    //   <MoviesContainer />
    // </div>
//   );
// };

// export default Browse;
