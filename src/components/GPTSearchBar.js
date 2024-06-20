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
import React, { useState } from 'react';
import { GPT_SEARCH_IMAGE } from '../utils/consants';
import { useSelector } from 'react-redux';
import { lang } from '../utils/languageConstants';
const GPTSearchBar = () => {
  const [isTyping, setIsTyping] = useState(false);
  const language = useSelector((state) => state.config.lang);

  return (
    <div className="relative min-h-screen bg-black">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-black opacity-50"
        style={{
          backgroundImage: `url(${GPT_SEARCH_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="flex flex-col items-center justify-center min-h-screen relative z-9">
        <h1
          className="text-5xl font-bold text-white mb-8 text-center select-none"
          style={{ userSelect: 'none' }}
        >
          {lang[language].heading}
        </h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder={lang[language].gptSearchPlaceholder}
            className="px-4 py-3 w-[40rem] text-black text-lg rounded-l-md focus:outline-none transition-all duration-300 border-2 border-transparent focus:border-black"
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
          />
          <button className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-r-md hover:bg-red-700 transition duration-300">
            {lang[language].search}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GPTSearchBar;
