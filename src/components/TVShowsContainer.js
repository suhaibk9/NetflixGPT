import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const TVShowsContainer = () => {
  const airingTodayTv = useSelector((state) => state.tv?.airingTodayTv);
  const onTheAirTv = useSelector((state) => state.tv?.onTheAirTv);
  const topRatedTv = useSelector((state) => state.tv?.topRatedTv);
  const popularTv = useSelector((state) => state.tv?.popularTv);

  if (!airingTodayTv || !onTheAirTv || !topRatedTv || !popularTv) return null;

  return (
    <div className="w-full bg-black">
      <div className="-mt-[9rem] z-20 relative">
        <MovieList title={'Airing Today'} movies={airingTodayTv} />
      </div>
      <MovieList title={'On The Air'} movies={onTheAirTv} />
      <MovieList title={'Top Rated Shows'} movies={topRatedTv} />
      <MovieList title={'Popular Shows'} movies={popularTv} />
    </div>
  );
};

export default TVShowsContainer;
