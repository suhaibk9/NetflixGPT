
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedTv } from '../utils/tvSlice';
import { API_OPTIONS } from '../utils/consants';
import { useSelector } from 'react-redux';
const useTopRatedTv = () => {
  const dispatch = useDispatch();
  const topRatedTv = useSelector((state) => state.tv.topRatedTv);
  useEffect(() => {
    const onAir = async () => {
      const air = await fetch(
        'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const airJson = await air.json();
      !topRatedTv && dispatch(addTopRatedTv(airJson.results));
    };
   !topRatedTv && onAir();
  }, []);
};
export default useTopRatedTv;
