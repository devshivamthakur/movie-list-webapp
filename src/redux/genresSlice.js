// genresSlice.js
import { createSlice } from '@reduxjs/toolkit';

const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    genres:[],
    selectedGenre:'ALL',
    mappedGenres:{}
  },
  reducers: {
    setGenres(state, action) {
      state.genres = action.payload
    },
    setSelectedGenre(state, action) {
        state.selectedGenre = action.payload
    },
    setMappedGenres(state, action) {
        state.mappedGenres = action.payload
    }
  },
});

export const { setGenres , setSelectedGenre, setMappedGenres} = genresSlice.actions;
export default genresSlice.reducer;
