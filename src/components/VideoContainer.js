// import React from 'react';
// import { useSelector } from 'react-redux';
// import VideoBackground from './VideoBackground';
// import VideoTitle from './VideoTitle';
// const VideoContainer = () => {
//   const movies = useSelector((state) => state.movies?.nowPlayingMovies);
//   // console.log('Movies', movies);
//   if (!movies) {
//     return;
//   }
//   const mainMovie = movies[5];
//   console.log('Main Movie', mainMovie);
//   return (
//     <div>
//       <VideoTitle
//         title={mainMovie.original_title}
//         overview={mainMovie.overview}
//       />
//       <VideoBackground movieId={mainMovie.id} />
//     </div>
//   );
// };

// export default VideoContainer;
// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import VideoBackground from './VideoBackground';
// import VideoTitle from './VideoTitle';
// import { useLocation } from 'react-router-dom';
// const VideoContainer = () => {
//   const location = useLocation();
//   const movies = useSelector((state) => state.movies?.nowPlayingMovies);
//   const tvShow = useSelector((state) => state.tv?.airingTodayTv);
//   const isLocationBrowse = location.pathname === '/browse';
//   if (isLocationBrowse) {
//     if (!movies) {
//       return null;
//     }
//   } else {
//     if (!tvShow) {
//       return null;
//     }
//   }
//   const mediaType = isLocationBrowse ? movies : tvShow;
//   let mainType;
//   useEffect(() => {
//     if (isLocationBrowse) {
//       mainType = movies[0];
//     } else {
//       mainType = tvShow[0];
//     }
//   }, [mediaType]);
//   if (!mainType) {
//     return;
//   }
//   // const mainMovie = movies[5];
//   // console.log('Main Movie', mainMovie);
//   return (
//     <div>
//       <VideoTitle
//         title={
//           isLocationBrowse ? mainType.original_title : mainType.original_name
//         }
//         overview={mainType.overview}
//       />
//       <VideoBackground movieId={mainType.id} />
//     </div>
//   );
// };

// export default VideoContainer;
import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useLocation } from 'react-router-dom';

const VideoContainer = () => {
  const location = useLocation();
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  const tvShow = useSelector((state) => state.tv?.airingTodayTv);
  const isLocationBrowse = location.pathname === '/browse';

  const mediaType = isLocationBrowse ? movies : tvShow;

  if (!mediaType) {
    return null;
  }

  const mainType = mediaType[1];

  return (
    <div>
      <VideoTitle
        title={
          isLocationBrowse ? mainType.original_title : mainType.original_name
        }
        overview={mainType.overview}
      />
      <VideoBackground movieId={mainType.id} />
    </div>
  );
};

export default VideoContainer;
