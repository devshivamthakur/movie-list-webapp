import { configureStore } from '@reduxjs/toolkit'
import genresSlice from './redux/genresSlice'
import moviesSlice from './redux/moviesSlice'

export const store = configureStore({
  reducer: {
    genre: genresSlice,
    movie: moviesSlice
  },
})