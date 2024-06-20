import { createSlice } from '@reduxjs/toolkit';
const tvSlice = createSlice({
  name: 'tv',
  initialState: {
    airingTodayTv: null,
    onTheAirTv: null,
    topRatedTv: null,
    popularTv: null,
    tvTrailerId: null,
  },
  reducers: {
    addAiringTodayTv: (state, action) => {
      state.airingTodayTv = action.payload;
    },
    addOnTheAirTv: (state, action) => {
      state.onTheAirTv = action.payload;
    },
    addTopRatedTv: (state, action) => {
      state.topRatedTv = action.payload;
    },
    addPopularTv: (state, action) => {
      state.popularTv = action.payload;
    },
    addTvTrailerId: (state, action) => {
      state.tvTrailerId = action.payload;
    },
  },
});
export const {addAiringTodayTv, addOnTheAirTv, addTopRatedTv, addPopularTv,addTvTrailerId} = tvSlice.actions;
export default tvSlice.reducer;