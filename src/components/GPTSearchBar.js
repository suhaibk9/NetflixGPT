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
//     <div className="relative h-[60vh] bg-black">
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-black opacity-50"
//         style={{
//           backgroundImage: `url(${GPT_SEARCH_IMAGE})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
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
import React, { useState } from 'react';
import { API_OPTIONS, GPT_SEARCH_IMAGE } from '../utils/consants';
import { useSelector } from 'react-redux';
import { lang } from '../utils/languageConstants';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import openai from '../utils/openai';

import {
  setGptArray,
  setGptSearchClicked,
  setActualQuery,
  setGptSearchResults,
} from '../utils/gptSlice';

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const [isTyping, setIsTyping] = useState(false);
  const language = useSelector((state) => state.config.lang);
  const inputRef = useRef(null);
  const filterExactMatches = (movieDataList, gptResponse) => {
    return movieDataList.map((movieArray, index) => {
      const movieName = gptResponse[index].trim();
      return movieArray.filter(
        (movie) => movie.title.toLowerCase() === movieName.toLowerCase()
      );
    });
  };
  const searchMovieInTMDB = async (movieName) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`,
      API_OPTIONS
    );
    const data = await res.json();
    const results = data.results;
    return results;
  };
  const openAIAPICall = async (query) => {
    const gptQuery = `Act as a recommender system and suggest movies for the query ${query}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: The Shawshank Redemption, The Godfather, The Dark Knight, Schindler's List, The Lord of the Rings: The Return of the King, `;
    const res = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log('Response', res.choices[0].message.content);
    const gptResponse = res.choices[0].message.content.split(',');
    //5 Promises
    const promiseList = gptResponse.map((movie) => {
      return searchMovieInTMDB(movie);
    });
    //Promise.all will resolve all the promises
    const movieDataList = await Promise.all(promiseList);
    console.log('Movie Data List', movieDataList);
    //Filter for exact matches
    const filteredMovieDataList = filterExactMatches(
      movieDataList,
      gptResponse
    );
    console.log('Filtered Movie Data List', filteredMovieDataList);
    dispatch(setGptSearchResults(filteredMovieDataList));
    dispatch(setGptArray(gptResponse));
    if (filteredMovieDataList.length > 0) {
      dispatch(setGptSearchClicked(false));
    }
  };

  const handleGPTExplore = () => {
    dispatch(setGptSearchClicked(true));
    const query = inputRef.current.value;
    dispatch(setActualQuery(query));
    openAIAPICall(query);
  };

  return (
    <div className="h-[60vh]">
      
      <div className="flex flex-col items-center justify-center h-full relative z-9">
        <h1
          className="text-5xl font-bold text-white mb-8 text-center select-none"
          style={{ userSelect: 'none' }}
        >
          {lang[language].heading}
        </h1>
        <div className="flex space-x-4">
          <input
            ref={inputRef}
            type="text"
            placeholder={lang[language].gptSearchPlaceholder}
            className="px-4 py-3 w-[40rem] text-black text-lg rounded-l-md focus:outline-none transition-all duration-300 border-2 border-transparent focus:border-black"
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
          />
          <button
            onClick={handleGPTExplore}
            className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-r-md hover:bg-red-700 transition duration-300"
          >
            {lang[language].search}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GPTSearchBar;