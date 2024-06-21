import React from 'react';
import Header from './Header';
import GPTSearchBar from './GPTSearchBar';
import GPTSearchResults from './GPTSearchResults';
import {GPT_SEARCH_IMAGE} from '../utils/consants'
const GPTSearch = () => {
  return (
    <div >
      <div
        className="fixed inset-0 z-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${GPT_SEARCH_IMAGE})`,
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
