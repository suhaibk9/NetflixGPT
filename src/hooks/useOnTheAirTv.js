
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOnTheAirTv } from '../utils/tvSlice';
import { API_OPTIONS } from '../utils/consants';
import { useSelector } from 'react-redux';
const useOnTheAirTv = () => {
  const dispatch = useDispatch();
  const onTheAirTv = useSelector((s) => s.tv.onTheAirTv);
  useEffect(() => {
    const onAir = async () => {
      const air = await fetch(
        'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const airJson = await air.json();
      
      dispatch(addOnTheAirTv(airJson.results));
    };
  !onTheAirTv &&  onAir();
  }, []);
};
export default useOnTheAirTv;
