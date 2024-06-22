// import React from 'react';
// import Header from './Header';
// import GPTSearchBar from './GPTSearchBar';
// import GPTSearchResults from './GPTSearchResults';
// import useGenresList from '../hooks/useGenresList';
// const GPTSearch = () => {
//     useGenresList();
//   return (
//     <div>
//       <Header />
//       <GPTSearchBar />
//       <GPTSearchResults />
//     </div>
//   );
// };

// export default GPTSearch;
import React from 'react';
import Header from './Header';
import GPTSearchBar from './GPTSearchBar';
import GPTSearchResults from './GPTSearchResults';
import { GPT_SEARCH_IMAGE } from '../utils/consants';
const GPTSearch = () => {
  return (
    <div>
      <div
        className="fixed inset-0 z-0 bg-cover object-cover bg-center "
        style={{
           backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${GPT_SEARCH_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Header />
      <GPTSearchBar />
      <GPTSearchResults />
    </div>
  );
};

export default GPTSearch;
