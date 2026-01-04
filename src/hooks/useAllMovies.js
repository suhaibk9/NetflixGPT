import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNowPlayingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
} from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/consants';

const useAllMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);
    const popularMovies = useSelector((state) => state.movies.popularMovies);
    const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
    const upcomingMovies = useSelector((state) => state.movies.upComingMovies);

    const hasAllData = nowPlayingMovies && popularMovies && topRatedMovies && upcomingMovies;

    useEffect(() => {
        if (hasAllData) return;

        const fetchAllMovies = async () => {
            // Fire all API calls simultaneously with Promise.all
            const [nowPlayingRes, popularRes, topRatedRes, upcomingRes] =
                await Promise.all([
                    fetch(
                        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=GB',
                        API_OPTIONS
                    ),
                    fetch(
                        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=GB',
                        API_OPTIONS
                    ),
                    fetch(
                        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=GB',
                        API_OPTIONS
                    ),
                    fetch(
                        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=GB',
                        API_OPTIONS
                    ),
                ]);

            // Parse all responses simultaneously
            const [nowPlayingJson, popularJson, topRatedJson, upcomingJson] =
                await Promise.all([
                    nowPlayingRes.json(),
                    popularRes.json(),
                    topRatedRes.json(),
                    upcomingRes.json(),
                ]);

            // Dispatch all at once
            dispatch(addNowPlayingMovies(nowPlayingJson.results));
            dispatch(addPopularMovies(popularJson.results));
            dispatch(addTopRatedMovies(topRatedJson.results));
            dispatch(addUpcomingMovies(upcomingJson.results));
        };

        fetchAllMovies();
    }, [dispatch, hasAllData]);
};

export default useAllMovies;
