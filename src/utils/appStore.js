import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import tvReducer from './tvSlice.js';
import genresReducer from './genresSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';
import mediaReducer from './mediaSlice';
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    genres: genresReducer,
    tv: tvReducer,
    gpt: gptReducer,
    config: configReducer,
    media: mediaReducer,
  },
});
export default appStore;
