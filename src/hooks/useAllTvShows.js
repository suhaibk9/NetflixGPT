import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addAiringTodayTv,
    addOnTheAirTv,
    addTopRatedTv,
    addPopularTv,
} from '../utils/tvSlice';
import { API_OPTIONS } from '../utils/consants';

const useAllTvShows = () => {
    const dispatch = useDispatch();
    const airingTodayTv = useSelector((state) => state.tv.airingTodayTv);
    const onTheAirTv = useSelector((state) => state.tv.onTheAirTv);
    const topRatedTv = useSelector((state) => state.tv.topRatedTv);
    const popularTv = useSelector((state) => state.tv.popularTv);

    const hasAllData = airingTodayTv && onTheAirTv && topRatedTv && popularTv;

    useEffect(() => {
        if (hasAllData) return;

        const fetchAllTvShows = async () => {
            // Fire all API calls simultaneously with Promise.all
            const [airingTodayRes, onTheAirRes, topRatedRes, popularRes] =
                await Promise.all([
                    fetch(
                        'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&region=GB',
                        API_OPTIONS
                    ),
                    fetch(
                        'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&region=GB',
                        API_OPTIONS
                    ),
                    fetch(
                        'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&region=GB',
                        API_OPTIONS
                    ),
                    fetch(
                        'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&region=GB',
                        API_OPTIONS
                    ),
                ]);

            // Parse all responses simultaneously
            const [airingTodayJson, onTheAirJson, topRatedJson, popularJson] =
                await Promise.all([
                    airingTodayRes.json(),
                    onTheAirRes.json(),
                    topRatedRes.json(),
                    popularRes.json(),
                ]);

            // Dispatch all at once
            dispatch(addAiringTodayTv(airingTodayJson.results));
            dispatch(addOnTheAirTv(onTheAirJson.results));
            dispatch(addTopRatedTv(topRatedJson.results));
            dispatch(addPopularTv(popularJson.results));
        };

        fetchAllTvShows();
    }, [dispatch, hasAllData]);
};

export default useAllTvShows;
