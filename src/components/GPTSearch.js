import React from 'react';
import Header from './Header';
import GPTSearchBar from './GPTSearchBar';
import GPTSearchResults from './GPTSearchResults';

const GPTSearch = () => {
  return (
    <div>
      <Header />
      <GPTSearchBar />
      <GPTSearchResults />
    </div>
  );
};

export default GPTSearch;
