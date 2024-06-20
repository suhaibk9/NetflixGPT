import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAiringTodayTv } from '../utils/tvSlice';
import { API_OPTIONS } from '../utils/consants';
const useAiringToday = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const airToday = async () => {
      const air = await fetch(
        'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const airJson = await air.json();
      console.log('Airing Today TV', airJson.results);
      dispatch(addAiringTodayTv(airJson.results));
    };
    airToday();
  }, []);
};
export default useAiringToday;
