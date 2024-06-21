import { createSlice } from '@reduxjs/toolkit';
const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    isGptSearch: false,
    gptArray: null,
    searchClicked: false,
    gptSearchResults: null,
    actualQuery: null,
  },
  reducers: {
    setGptSearch: (state, action) => {
      state.isGptSearch = action.payload;
    },
    setGptArray: (state, action) => {
      state.gptArray = action.payload;
    },
    setGptSearchClicked: (state, action) => {
      state.searchClicked = action.payload;
    },
    setGptSearchResults: (state, action) => {
      state.gptSearchResults = action.payload;
    },
    setGptArray: (state, action) => {
      state.gptArray = action.payload;
    },
    setActualQuery: (state, action) => {
      state.actualQuery = action.payload;
    },
  },
});

export const {
  setGptSearch,
  setGptSearchResults,
  setGptArray,
  setGptSearchClicked,
    setActualQuery,
} = gptSlice.actions;
export default gptSlice.reducer;
