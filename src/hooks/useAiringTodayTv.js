import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAiringTodayTv } from '../utils/tvSlice';
import { API_OPTIONS } from '../utils/consants';
import { useSelector } from 'react-redux';
const useAiringToday = () => {
  const dispatch = useDispatch();
  const airingTodayTv = useSelector((state) => state.tv.airingTodayTv);
  useEffect(() => {
    const airToday = async () => {
      const air = await fetch(
        'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const airJson = await air.json();

      dispatch(addAiringTodayTv(airJson.results));
    };
    !airingTodayTv && airToday();
  }, []);
};
export default useAiringToday;
