import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import tvReducer from './tvSlice.js';
import genresReducer from './genresSlice';
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    genres: genresReducer,
    tv: tvReducer,
  },
});
export default appStore;
