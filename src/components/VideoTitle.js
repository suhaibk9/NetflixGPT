
import React from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      style={{ userSelect: 'none' }}
      className="absolute bottom-28 left-16 text-white max-w-xl z-50 "
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-lg md:text-xl mb-6">{overview}</p>
      <div className="flex space-x-4">
        <button
          style={{ borderRadius: '4px' }}
          className="bg-white text-black py-3 px-5  font-semibold flex items-center hover:bg-gray-200 "
        >
          <FaPlay className="w-6 h-6 mr-2" />
          Play
        </button>
        <button
          style={{
            borderRadius: '4px',
          }}
          className="bg-[rgba(109,109,110,0.7)] text-white py-3 px-5 font-semibold flex items-center hover:bg-[rgba(109,109,110,0.4)] "
        >
          <FaInfoCircle className="w-6 h-6 mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
// // transition duration-200
// // transition duration-200
// // [rgba(109,109,110,0.1)]
// import React from 'react';
// import { FaPlay, FaInfoCircle } from 'react-icons/fa';

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div
//       style={{ userSelect: 'none' }}
//       className="w-screen pt-[260px]  ml-[64px] text-white max-w-xl "
//     >
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
//       <p className="text-lg md:text-xl mb-6">{overview}</p>
//       <div className="flex space-x-4">
//         <button
//           style={{ borderRadius: '4px' }}
//           className="bg-white text-black py-3 px-5 font-semibold flex items-center hover:bg-gray-200"
//         >
//           <FaPlay className="w-6 h-6 mr-2" />
//           Play
//         </button>
//         <button
//           style={{ borderRadius: '4px' }}
//           className="bg-[rgba(109,109,110,0.7)] text-white py-3 px-5 font-semibold flex items-center hover:bg-[rgba(109,109,110,0.4)]"
//         >
//           <FaInfoCircle className="w-6 h-6 mr-2" />
//           More Info
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;
