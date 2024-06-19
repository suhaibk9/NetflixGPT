import { createSlice } from '@reduxjs/toolkit';
const genresSlice = createSlice({
  name: 'genres',
  initialState: null,
  reducers: {
    updateGenresList: (state, action) => {
      return action.payload;
    },
  },
});
export const { updateGenresList } = genresSlice.actions;
export default genresSlice.reducer;
