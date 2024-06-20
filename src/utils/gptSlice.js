import { createSlice } from '@reduxjs/toolkit';
const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    isGptSearch: false,
  },
  reducers: {
    setGptSearch: (state, action) => {
      state.isGptSearch = action.payload;
    },
  },
});

export const { setGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
