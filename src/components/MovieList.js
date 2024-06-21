// import React from 'react';
// import MovieCard from './MovieCard';
// import useGenresList from '../hooks/useGenresList';
// const MovieList = ({ title, movies }) => {
//   useGenresList();
//   return (
//     <div className="py-6 pl-6  ">
//       <h2 className=" text-3xl mb-2 text-white">{title}</h2>
//       <div className="flex no-scrollbar overflow-scroll">
//         <div className="flex  ">
//           {movies.map((movie,idx) => (
//             <MovieCard key={idx} movie={movie} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;

import React from 'react';
import MovieCard from './MovieCard';
import useGenresList from '../hooks/useGenresList';

const MovieList = ({ title, movies }) => {
  useGenresList();
  return (
    <div className="py-6 pl-6  ">
      <h2 className=" text-3xl mb-2 text-white">{title}</h2>
      <div className="flex no-scrollbar overflow-scroll">
        <div className="flex  ">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie, idx) => (
              <MovieCard key={idx} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
