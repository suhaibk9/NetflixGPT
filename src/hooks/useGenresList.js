import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateGenresList } from '../utils/genresSlice';

const useGenresList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        if (data.genres) {
          dispatch(updateGenresList(data.genres));
          console.log('Genres:', data.genres);
        }
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);
};

export default useGenresList;
