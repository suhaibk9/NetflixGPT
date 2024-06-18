import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <header className="flex justify-between items-center p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="h-12"
        />
        <nav>
          <ul className="flex space-x-4">
            <li> <a href="#home" className="hover:underline"> Home </a> </li>
            <li> <a href="#tv-shows" className="hover:underline"> TV Shows </a> </li>
            <li> <a href="#movies" className="hover:underline"> Movies </a> </li>
            <li> <a href="#latest" className="hover:underline"> Latest </a> </li>
            <li> <a href="#my-list" className="hover:underline"> My List </a> </li>
          </ul>
        </nav>
      </header>

      <main className="p-4">
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Popular on Netflix</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Placeholder for movie/TV show thumbnails */}
            <div className="bg-gray-800 h-48"></div>
            <div className="bg-gray-800 h-48"></div>
            <div className="bg-gray-800 h-48"></div>
            <div className="bg-gray-800 h-48"></div>
            <div className="bg-gray-800 h-48"></div>
            {/* Add more thumbnails as needed */}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Placeholder for movie/TV show thumbnails */}
            <div className="bg-gray-800 h-48"></div>
            <div className="bg-gray-800 h-48"></div>
            <div className="bg-gray-800 h-48"></div>
            <div className="bg-gray-800 h-48"></div>
            <div className="bg-gray-800 h-48"></div>
            {/* Add more thumbnails as needed */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
