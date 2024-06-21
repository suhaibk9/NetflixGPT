
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularTv } from '../utils/tvSlice';
import { API_OPTIONS } from '../utils/consants';
import { useSelector } from 'react-redux';
const usePopularTv = () => {
  const popularTv = useSelector((state) => state.tv.popularTv);
  const dispatch = useDispatch();
  useEffect(() => {
    const onAir = async () => {
      const air = await fetch(
        'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const airJson = await air.json();

       dispatch(addPopularTv(airJson.results));
    };
  !popularTv && onAir();
  }, []);
};
export default usePopularTv;
