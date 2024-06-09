import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

export const fetchMoviesByYear = async (year, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        sort_by: 'popularity.desc',
        primary_release_year: year,
        vote_count_gte: 100
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
