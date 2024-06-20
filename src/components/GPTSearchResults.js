// import React from 'react';
// import ShimmerCard from '../utils/shimmer';
// import { useSelector } from 'react-redux';
// import MovieList from './MovieList';
// const GPTSearchResults = () => {
//   const click = useSelector((state) => state.gpt.searchClicked);
//   const gptSearchResults = useSelector((state) => state.gpt.gptSearchResults);
//   const gptArray = useSelector((state) => state.gpt.gptArray);
//   if (click || !gptSearchResults || !gptArray) {
//    return <div className=" w-full bg-black">
//       <div className="flex flex-wrap justify-center p-5">
//         {Array.from({ length: 20 }).map((_, index) => (
//           <ShimmerCard key={index} />
//         ))}
//       </div>
//     </div>;
//   }
//   return (
//     <div className=" w-full bg-black">
//       {gptArray.map((gpt, idx) => {
//         return <MovieList title={gpt} movies={gptSearchResults[idx]} />;
//       })}
//     </div>
//   );
// };

// export default GPTSearchResults;
import React from 'react';
import ShimmerCard from '../utils/shimmer';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
const GPTSearchResults = () => {
  const click = useSelector((state) => state.gpt.searchClicked);
  const gptSearchResults = useSelector((state) => state.gpt.gptSearchResults);
  const gptArray = useSelector((state) => state.gpt.gptArray);

  if (click) {
    return (
      <div className="w-full bg-black">
        <div className="flex flex-wrap justify-center p-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full bg-black">
      {gptSearchResults && gptArray ? (
        gptArray.map((gpt, idx) => (
          <MovieList key={idx} title={gpt} movies={gptSearchResults[idx]} />
        ))
      ) : (
        <div className="w-full bg-black min-h-screen"></div>
      )}
    </div>
  );
};

export default GPTSearchResults;
