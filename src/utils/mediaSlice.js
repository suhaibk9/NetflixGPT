import { createSlice } from '@reduxjs/toolkit';
const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    media: null,
    trailerId: null,
  },
  reducers: {
    addMedia: (state, action) => {
      state.media = action.payload;
    },
    addTrailerId: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});
export const { addMedia, addTrailerId } = mediaSlice.actions;
export default mediaSlice.reducer;
