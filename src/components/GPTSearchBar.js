// import React,{useState} from 'react'
// import Header from './Header';
// import { GPT_SEARCH_IMAGE } from '../utils/consants';
// const GPTSearchBar = () => {
//   const [isTyping, setIsTyping] = useState(false);

//   return (
//     <div className="relative min-h-screen bg-black">
//       <Header />
//       <div
//         className="absolute inset-0 z-[0] bg-cover bg-center bg-black opacity-50"
//         style={{
//           backgroundImage: `url(${GPT_SEARCH_IMAGE})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
//       <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
//         <h1
//           className="text-5xl font-bold text-white mb-8 text-center select-none"
//           style={{ userSelect: 'none' }}
//         >
//           Stargaze the Best Films and Series with AI Navigation
//         </h1>
//         <div className="flex space-x-4">
//           <input
//             type="text"
//             placeholder="Find your next adventure in film or TV..."
//             className={`px-4 py-3 w-[40rem] text-black text-lg rounded-l-md focus:outline-none transition-all duration-300 ${
//               isTyping ? 'border-2 border-black' : ''
//             }`}
//             onFocus={() => setIsTyping(true)}
//             onBlur={() => setIsTyping(false)}
//           />
//           <button className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-r-md hover:bg-red-700 transition duration-300">
//             Explore
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GPTSearchBar
// import React, { useState } from 'react';
// import { GPT_SEARCH_IMAGE } from '../utils/consants';
// import { useSelector } from 'react-redux';
// import { lang } from '../utils/languageConstants';
// import { useRef } from 'react';
// import openai from '../utils/openai';

// const GPTSearchBar = () => {
//   const [isTyping, setIsTyping] = useState(false);
//   const language = useSelector((state) => state.config.lang);
//   const inputRef = useRef(null);
//   const openAIAPICall = async (query) => {
//     const gptQuery = `Act as a recommender system and suggest movies for the query ${query}.Only Give me names of 10 movies, comma separated like the Example result given ahead. Example Result: The Shawshank Redemption, The Godfather, The Dark Knight, Schindler's List, The Lord of the Rings: The Return of the King, Pulp Fiction, The Lord of the Rings: The Fellowship of the Ring, Fight Club, Forrest Gump, Inception`;
//     const res = await openai.chat.completions.create({
//       messages: [{ role: 'user', content: gptQuery }],
//       model: 'gpt-3.5-turbo',
//     });
//     console.log('Response', res.choices);
//   };

//     const handleGPTExplore = () => {
//       const query = inputRef.current.value;
//       openAIAPICall(query);
//     };

//   return (
//     <div className="relative min-h-screen bg-black">
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-black opacity-50"
//         style={{
//           backgroundImage: `url(${GPT_SEARCH_IMAGE})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
//       <div className="flex flex-col items-center justify-center min-h-screen relative z-9">
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
import openai from '../utils/openai';

const GPTSearchBar = () => {
  const [isTyping, setIsTyping] = useState(false);
  const language = useSelector((state) => state.config.lang);
  const inputRef = useRef(null);
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
  };

  const handleGPTExplore = () => {
    const query = inputRef.current.value;
    openAIAPICall(query);
  };

  return (
    <div className="relative h-[60vh] bg-black">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-black opacity-50"
        style={{
          backgroundImage: `url(${GPT_SEARCH_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
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
