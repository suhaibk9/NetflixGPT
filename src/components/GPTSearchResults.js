// // // // import React from 'react';
// // // // import ShimmerCard from '../utils/shimmer';
// // // // import { useSelector } from 'react-redux';
// // // // import MovieList from './MovieList';
// // // // const GPTSearchResults = () => {
// // // //   const click = useSelector((state) => state.gpt.searchClicked);
// // // //   const gptSearchResults = useSelector((state) => state.gpt.gptSearchResults);
// // // //   const gptArray = useSelector((state) => state.gpt.gptArray);
// // // //   if (click || !gptSearchResults || !gptArray) {
// // // //    return <div className="absolute w-full bg-black">
// // // //       <div className="flex flex-wrap justify-center p-5">
// // // //         {Array.from({ length: 20 }).map((_, index) => (
// // // //           <ShimmerCard key={index} />
// // // //         ))}
// // // //       </div>
// // // //     </div>;
// // // //   }
// // // //   return (
// // // //     <div className=" w-full bg-black">
// // // //       {gptArray.map((gpt, idx) => {
// // // //         return <MovieList title={gpt} movies={gptSearchResults[idx]} />;
// // // //       })}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default GPTSearchResults;
// // // // // import React from 'react';
// // // // // import ShimmerCard from '../utils/shimmer';
// // // // // import { useSelector } from 'react-redux';
// // // // // import MovieList from './MovieList';
// // // // // import { useDispatch } from 'react-redux';

// // // // // const GPTSearchResults = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const click = useSelector((state) => state.gpt.searchClicked);
// // // // //   const gptSearchResults = useSelector((state) => state.gpt.gptSearchResults);
// // // // //   const gptArray = useSelector((state) => state.gpt.gptArray);
// // // // //   const actualQuery = useSelector((state) => state.gpt.actualQuery);
// // // // //   if (click) {
// // // // //     return (
// // // // //       <div className="relative z-11  bg-black opacity-75 mx-5 mb-5">
// // // // //         <div className="flex flex-wrap justify-center p-5">
// // // // //           {Array.from({ length: 20 }).map((_, index) => (
// // // // //             <ShimmerCard key={index} />
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }
// // // // //   // bg-black opacity-50
// // // // //   return (
// // // // //     <div className=" relative z-11  bg-black opacity-[.76] mx-5 mb-5">
    
// // // // //       {gptSearchResults && gptArray ? (
// // // // //         gptArray.map((gpt, idx) => (
// // // // //           <MovieList key={idx} title={gpt} movies={gptSearchResults[idx]} />
// // // // //         ))
// // // // //       ) : (
// // // // //         ''
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default GPTSearchResults;
// // // import React from 'react';
// // // import ShimmerCard from '../utils/shimmer';
// // // import { useSelector } from 'react-redux';
// // // import MovieList from './MovieList';
// // // import { useDispatch } from 'react-redux';

// // // const GPTSearchResults = () => {
// // //   const dispatch = useDispatch();
// // //   const click = useSelector((state) => state.gpt.searchClicked);
// // //   const gptSearchResults = useSelector((state) => state.gpt.gptSearchResults);
// // //   const gptArray = useSelector((state) => state.gpt.gptArray);
// // //   const actualQuery = useSelector((state) => state.gpt.actualQuery);
// // //   if (click) {
// // //     return (
// // //       <div className="w-full bg-black">
// // //         <div className="flex flex-wrap justify-center p-5">
// // //           {Array.from({ length: 20 }).map((_, index) => (
// // //             <ShimmerCard key={index} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="w-full bg-black">
// // //       {gptSearchResults && gptArray && (
// // //         <div className="text-white mb-2 py-2 pl-6">
// // //           <h1 className="text-3xl font-bold mb-2">{`Showing Results for: ${actualQuery}`}</h1>
// // //         </div>
// // //       )}
// // //       {gptSearchResults && gptArray ? (
// // //         gptArray.map((gpt, idx) => (
// // //           <MovieList key={idx} title={gpt} movies={gptSearchResults[idx]} />
// // //         ))
// // //       ) : (
// // //         <div className="w-full bg-black min-h-screen"></div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default GPTSearchResults;


// // // SEARCH BAR

// // // import React, { useState } from 'react';
// // // import { API_OPTIONS, GPT_SEARCH_IMAGE } from '../utils/consants';
// // // import { useSelector } from 'react-redux';
// // // import { lang } from '../utils/languageConstants';
// // // import { useRef } from 'react';
// // // import { useDispatch } from 'react-redux';
// // // import openai from '../utils/openai';

// // // import {
// // //   setGptArray,
// // //   setGptSearchClicked,
// // //   setActualQuery,
// // //   setGptSearchResults,
// // // } from '../utils/gptSlice';

// // // const GPTSearchBar = () => {
// // //   const dispatch = useDispatch();
// // //   const [isTyping, setIsTyping] = useState(false);
// // //   const language = useSelector((state) => state.config.lang);
// // //   const inputRef = useRef(null);
// // //   const filterExactMatches = (movieDataList, gptResponse) => {
// // //     return movieDataList.map((movieArray, index) => {
// // //       const movieName = gptResponse[index].trim();
// // //       return movieArray.filter(
// // //         (movie) => movie.title.toLowerCase() === movieName.toLowerCase()
// // //       );
// // //     });
// // //   };
// // //   const searchMovieInTMDB = async (movieName) => {
// // //     const res = await fetch(
// // //       `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`,
// // //       API_OPTIONS
// // //     );
// // //     const data = await res.json();
// // //     const results = data.results;
// // //     return results;
// // //   };
// // //   const openAIAPICall = async (query) => {
// // //     const gptQuery = `Act as a recommender system and suggest movies for the query ${query}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: The Shawshank Redemption, The Godfather, The Dark Knight, Schindler's List, The Lord of the Rings: The Return of the King, `;
// // //     const res = await openai.chat.completions.create({
// // //       messages: [{ role: 'user', content: gptQuery }],
// // //       model: 'gpt-3.5-turbo',
// // //     });
// // //     console.log('Response', res.choices[0].message.content);
// // //     const gptResponse = res.choices[0].message.content.split(',');
// // //     //5 Promises
// // //     const promiseList = gptResponse.map((movie) => {
// // //       return searchMovieInTMDB(movie);
// // //     });
// // //     //Promise.all will resolve all the promises
// // //     const movieDataList = await Promise.all(promiseList);
// // //     console.log('Movie Data List', movieDataList);
// // //     //Filter for exact matches
// // //     const filteredMovieDataList = filterExactMatches(
// // //       movieDataList,
// // //       gptResponse
// // //     );
// // //     console.log('Filtered Movie Data List', filteredMovieDataList);
// // //     dispatch(setGptSearchResults(filteredMovieDataList));
// // //     dispatch(setGptArray(gptResponse));
// // //     if (filteredMovieDataList.length > 0) {
// // //       dispatch(setGptSearchClicked(false));
// // //     }
// // //   };

// // //   const handleGPTExplore = () => {
// // //     dispatch(setGptSearchClicked(true));
// // //     const query = inputRef.current.value;
// // //     dispatch(setActualQuery(query));
// // //     openAIAPICall(query);
// // //   };

// // //   return (
// // //     <div className="relative h-[60vh] bg-black">
// // //       <div
// // //         className="absolute inset-0 z-0 bg-cover bg-center bg-black opacity-50"
// // //         style={{
// // //           backgroundImage: `url(${GPT_SEARCH_IMAGE})`,
// // //           backgroundSize: 'cover',
// // //           backgroundPosition: 'center',
// // //         }}
// // //       />
// // //       <div className="flex flex-col items-center justify-center h-full relative z-9">
// // //         <h1
// // //           className="text-5xl font-bold text-white mb-8 text-center select-none"
// // //           style={{ userSelect: 'none' }}
// // //         >
// // //           {lang[language].heading}
// // //         </h1>
// // //         <div className="flex space-x-4">
// // //           <input
// // //             ref={inputRef}
// // //             type="text"
// // //             placeholder={lang[language].gptSearchPlaceholder}
// // //             className="px-4 py-3 w-[40rem] text-black text-lg rounded-l-md focus:outline-none transition-all duration-300 border-2 border-transparent focus:border-black"
// // //             onFocus={() => setIsTyping(true)}
// // //             onBlur={() => setIsTyping(false)}
// // //           />
// // //           <button
// // //             onClick={handleGPTExplore}
// // //             className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-r-md hover:bg-red-700 transition duration-300"
// // //           >
// // //             {lang[language].search}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default GPTSearchBar;


// // // GPT RESULTS

// // // import React from 'react';
// // // import ShimmerCard from '../utils/shimmer';
// // // import { useSelector } from 'react-redux';
// // // import MovieList from './MovieList';
// // // const GPTSearchResults = () => {
// // //   const click = useSelector((state) => state.gpt.searchClicked);
// // //   const gptSearchResults = useSelector((state) => state.gpt.gptSearchResults);
// // //   const gptArray = useSelector((state) => state.gpt.gptArray);
// // //   if (click || !gptSearchResults || !gptArray) {
// // //    return <div className=" w-full bg-black">
// // //       <div className="flex flex-wrap justify-center p-5">
// // //         {Array.from({ length: 20 }).map((_, index) => (
// // //           <ShimmerCard key={index} />
// // //         ))}
// // //       </div>
// // //     </div>;
// // //   }
// // //   return (
// // //     <div className=" w-full bg-black">
// // //       {gptArray.map((gpt, idx) => {
// // //         return <MovieList title={gpt} movies={gptSearchResults[idx]} />;
// // //       })}
// // //     </div>
// // //   );
// // // };

// // // export default GPTSearchResults;
// // import React from 'react';
// // import ShimmerCard from '../utils/shimmer';
// // import { useSelector } from 'react-redux';
// // import MovieList from './MovieList';
// // import { useDispatch } from 'react-redux';

// // const GPTSearchResults = () => {
// //   const dispatch = useDispatch();
// //   const click = useSelector((state) => state.gpt.searchClicked);
// //   const gptSearchResults = useSelector((state) => state.gpt.gptSearchResults);
// //   const gptArray = useSelector((state) => state.gpt.gptArray);
// //   const actualQuery= useSelector((state) => state.gpt.actualQuery);
// //   if (click) {
// //     return (
// //       <div className="w-full bg-black">
// //         <div className="flex flex-wrap justify-center p-5">
// //           {Array.from({ length: 8 }).map((_, index) => (
// //             <ShimmerCard key={index} />
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="w-full bg-black">
  
// //       {gptSearchResults && gptArray ? (
// //         gptArray.map((gpt, idx) => (
// //           <MovieList key={idx} title={gpt} movies={gptSearchResults[idx]} />
// //         ))
// //       ) : (
// //         <div className="w-full bg-black min-h-screen"></div>
// //       )}
// //     </div>
// //   );
// // };

// // export default GPTSearchResults;


// import React, { useState } from 'react';
// import { API_OPTIONS, GPT_SEARCH_IMAGE } from '../utils/consants';
// import { useSelector } from 'react-redux';
// import { lang } from '../utils/languageConstants';
// import { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import openai from '../utils/openai';

// import {
//   setGptArray,
//   setGptSearchClicked,
//   setActualQuery,
//   setGptSearchResults,
// } from '../utils/gptSlice';

// const GPTSearchBar = () => {
//   const dispatch = useDispatch();
//   const [isTyping, setIsTyping] = useState(false);
//   const language = useSelector((state) => state.config.lang);
//   const inputRef = useRef(null);
//   const filterExactMatches = (movieDataList, gptResponse) => {
//     return movieDataList.map((movieArray, index) => {
//       const movieName = gptResponse[index].trim();
//       return movieArray.filter(
//         (movie) => movie.title.toLowerCase() === movieName.toLowerCase()
//       );
//     });
//   };
//   const searchMovieInTMDB = async (movieName) => {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`,
//       API_OPTIONS
//     );
//     const data = await res.json();
//     const results = data.results;
//     return results;
//   };
//   const openAIAPICall = async (query) => {
//     const gptQuery = `Act as a recommender system and suggest movies for the query ${query}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: The Shawshank Redemption, The Godfather, The Dark Knight, Schindler's List, The Lord of the Rings: The Return of the King, `;
//     const res = await openai.chat.completions.create({
//       messages: [{ role: 'user', content: gptQuery }],
//       model: 'gpt-3.5-turbo',
//     });
//     console.log('Response', res.choices[0].message.content);
//     const gptResponse = res.choices[0].message.content.split(',');
//     //5 Promises
//     const promiseList = gptResponse.map((movie) => {
//       return searchMovieInTMDB(movie);
//     });
//     //Promise.all will resolve all the promises
//     const movieDataList = await Promise.all(promiseList);
//     console.log('Movie Data List', movieDataList);
//     //Filter for exact matches
//     const filteredMovieDataList = filterExactMatches(
//       movieDataList,
//       gptResponse
//     );
//     console.log('Filtered Movie Data List', filteredMovieDataList);
//     dispatch(setGptSearchResults(filteredMovieDataList));
//     dispatch(setGptArray(gptResponse));
//     if (filteredMovieDataList.length > 0) {
//       dispatch(setGptSearchClicked(false));
//     }
//   };

//   const handleGPTExplore = () => {
//     dispatch(setGptSearchClicked(true));
//     const query = inputRef.current.value;
//     dispatch(setActualQuery(query));
//     openAIAPICall(query);
//   };

//   return (
//     <div className="h-[60vh]">
//       <div className="flex flex-col items-center justify-center h-full relative z-9">
//         <h1
//           className="text-5xl font-bold text-white mb-8 text-center select-none"
//           style={{ userSelect: 'none' }}
//         >
//           {lang[language].heading}
//         </h1>
//         <div className="flex space-x-4">
//           <input
//             ref={inputRef}
//             type="text"
//             placeholder={lang[language].gptSearchPlaceholder}
//             className="px-4 py-3 w-[40rem] text-black text-lg rounded-l-md focus:outline-none transition-all duration-300 border-2 border-transparent focus:border-black"
//             onFocus={() => setIsTyping(true)}
//             onBlur={() => setIsTyping(false)}
//           />
//           <button
//             onClick={handleGPTExplore}
//             className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-r-md hover:bg-red-700 transition duration-300"
//           >
//             {lang[language].search}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GPTSearchBar;
import React from 'react';
import ShimmerCard from '../utils/shimmer';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { useDispatch } from 'react-redux';

const GPTSearchResults = () => {
  const dispatch = useDispatch();
  const click = useSelector((state) => state.gpt.searchClicked);
  const gptSearchResults = useSelector((state) => state.gpt.gptSearchResults);
  const gptArray = useSelector((state) => state.gpt.gptArray);
  const actualQuery = useSelector((state) => state.gpt.actualQuery);
  if (click) {
    return (
      <div className="relative z-11  bg-black opacity-75 mx-5 mb-5">
        <div className="flex flex-wrap justify-center p-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      </div>
    );
  }
  // bg-black opacity-50
  return (
    <div className=" relative z-110000  bg-black opacity-91 mx-4 md:mx-5 mb-5">
      {gptSearchResults && gptArray
        ? gptArray.map((gpt, idx) => (
            <MovieList key={idx} title={gpt} movies={gptSearchResults[idx]} />
          ))
        : ''}
    </div>
  );
};

export default GPTSearchResults;