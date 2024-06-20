// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzhlOTZkZTZjYTAwNjAwOTI5ODA2NzFiNmUyZmJjYiIsInN1YiI6IjY2NzJiOGMwYmI4ZjVmNGQzNjkwZGM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aA8hS7Ylo8GkhBIhu58L4CxQzAxO7VD-a_6DM7RuVs8',
//   },
// };

// fetch(
//   'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1',
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOnTheAirTv } from '../utils/tvSlice';
import { API_OPTIONS } from '../utils/consants';
const useOnTheAirTv = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const onAir = async () => {
      const air = await fetch(
        'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&region=GB',
        API_OPTIONS
      );
      const airJson = await air.json();
      console.log("On Air TV",airJson.results);
      dispatch(addOnTheAirTv(airJson.results));
    };
    onAir();
  }, []);
};
export default useOnTheAirTv;
