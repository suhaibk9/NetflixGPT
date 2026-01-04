import React, { useRef, useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import useGenresList from '../hooks/useGenresList';

const SkeletonCard = () => (
  <div className="w-48 h-72 p-1 mx-1 bg-gray-800 rounded animate-pulse flex-shrink-0">
    <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded"
      style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite'
      }}
    />
  </div>
);

const NavButton = ({ direction, onClick, visible }) => {
  const isLeft = direction === 'left';

  return (
    <button
      onClick={onClick}
      className={`
        absolute top-0 ${isLeft ? 'left-0' : 'right-0'} z-30
        h-full w-12 md:w-16
        bg-gradient-to-${isLeft ? 'r' : 'l'} from-black/80 via-black/50 to-transparent
        flex items-center justify-center
        transition-all duration-300
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        hover:from-black/90 hover:via-black/60
        hidden md:flex
      `}
      aria-label={`Scroll ${direction}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className={`w-8 h-8 text-white transition-transform duration-200 hover:scale-125 ${isLeft ? '' : 'rotate-180'}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
};

const MovieList = ({ title, movies }) => {
  useGenresList();
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const filteredMovies = movies.filter((movie) => movie.poster_path);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, [filteredMovies]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200 * 4;
    const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="py-6 pl-6 pr-0 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-3xl mb-2 text-white">{title}</h2>
      <div className="relative">
        <NavButton
          direction="left"
          onClick={() => scroll('left')}
          visible={isHovered && showLeftArrow}
        />

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll overflow-y-hidden scroll-smooth pr-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="flex relative">
            <div className="flex absolute inset-0">
              {filteredMovies.map((_, idx) => (
                <SkeletonCard key={`skeleton-${idx}`} />
              ))}
            </div>
            {filteredMovies.map((movie, idx) => (
              <MovieCard key={idx} movie={movie} />
            ))}
          </div>
        </div>

        <NavButton
          direction="right"
          onClick={() => scroll('right')}
          visible={isHovered && showRightArrow}
        />
      </div>
    </div>
  );
};

export default MovieList;
