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
    <div className=" relative z-11  bg-black opacity-75 mx-5 mb-5">
    
      {gptSearchResults && gptArray ? (
        gptArray.map((gpt, idx) => (
          <MovieList key={idx} title={gpt} movies={gptSearchResults[idx]} />
        ))
      ) : (
        ''
      )}
    </div>
  );
};

export default GPTSearchResults;
