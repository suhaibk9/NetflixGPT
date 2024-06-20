

//  import { useEffect } from 'react';
// import { API_OPTIONS } from '../utils/consants';
// import { useDispatch } from 'react-redux';
// import { addTrailerVideo } from '../utils/moviesSlice';
// import { addTvTrailerId } from '../utils/tvSlice';
// import { useLocation } from 'react-router-dom';
// const useMovieTrailer = (movieId) => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const getTrailer = async () => {
//     let url = '';
//     if (location.pathname === '/browse')
//       url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
//     else
//       url = `https://api.themoviedb.org/3/tv/${movieId}/videos?language=en-US`;

//     const trailer = await fetch(url, API_OPTIONS);
//     const trailerJson = await trailer.json();
//     if(loctaion.pathname==='/tvShows')console.log(trailerJson);

//     const trailers = trailerJson.results.filter((result) => {
//       return result.type === 'Trailer' && result.site === 'YouTube';
//     });
//     let teaser;
//     //No Trailer Found Check for Teaser
//     if (!trailers) {
//       teaser = trailerJson.results.filter((result) => {
//         return result.type === 'Teaser' && result.site === 'YouTube';
//       });
//     }
//     const ele = trailers ? trailers[0] : teaser[0];
//     console.log('PathName', location.pathname, ele);
//     if (location.pathname === '/browse') dispatch(addTrailerVideo(ele));
//     else dispatch(addTvTrailerId(ele));
//   };
//   useEffect(() => {
//     getTrailer();
//   }, []);

//   return null;
// };

// export default useMovieTrailer;
// //236033
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/consants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { addTvTrailerId } from '../utils/tvSlice';
import { useLocation } from 'react-router-dom';

const useMovieTrailer = (movieId) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const getTrailer = async (id, type) => {
    const url = `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`;

    const response = await fetch(url, API_OPTIONS);
    const data = await response.json();

    const trailers = data.results.filter(
      (result) => result.type === 'Trailer' && result.site === 'YouTube'
    );
    let video = trailers.length > 0 ? trailers[0] : null;

    if (!video) {
      const teasers = data.results.filter(
        (result) => result.type === 'Teaser' && result.site === 'YouTube'
      );
      video = teasers.length > 0 ? teasers[0] : null;
    }

    return video;
  };

  const fetchTrailer = async () => {
    let video;

    if (location.pathname === '/browse') {
      video = await getTrailer(movieId, 'movie');
      if (video) {
        dispatch(addTrailerVideo(video));
      }
    } else {
      video = await getTrailer(movieId, 'tv');
      if (video) {
        dispatch(addTvTrailerId(video));
      } else {
        // If no TV trailer found, fetch trailer for fallback movie ID 236033
        const fallbackMovieId = 236033;
        video = await getTrailer(fallbackMovieId, 'tv');
        if (video) {
          dispatch(addTvTrailerId(video));
        }
      }
    }
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return null;
};

export default useMovieTrailer;
