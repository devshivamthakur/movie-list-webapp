// moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    setMovies(state, action) {
      return action.payload;
    },
    addMovies(state, action) {
      return [...state, ...action.payload];
    },
  },
});

export const { setMovies, addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
