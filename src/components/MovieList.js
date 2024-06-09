import React, { useState, useEffect, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from './MovieCard';
import { fetchMoviesByYear } from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addMovies, setMovies } from '../redux/moviesSlice';

const intialYear = 2012

const MovieList = React.memo(() => {
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [year, setYear] = useState(intialYear);
  const {
    selectedGenre
  } = useSelector((state) => state.genre);
  
  const  movies = useSelector((state) => state.movie)
  const dispatch = useDispatch();
  
  const loadMovies = async (year) => {
    try {
      setLoading(true);
      const data = await fetchMoviesByYear(year);
      if (year == intialYear) {
        dispatch(setMovies(data.results))
      } else {
        dispatch(addMovies(data.results));

      }
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {

    loadMovies(year);
  }, [year]);

  const fetchMoreMovies = async () => {
    if (!loading) {
      const currentYear = new Date().getFullYear()
      if (year <= currentYear && year >= intialYear) {
        setYear(year + 1)
      }

    }
  };

  const filteredResults = useMemo(() => {
    if (selectedGenre == null || selectedGenre == "ALL") return movies

    return movies.filter(m => {
      return m.genre_ids.includes(Number(selectedGenre))
    })
  }, [selectedGenre, movies])

  if (error) return <p>{error}</p>;

  return (
    <InfiniteScroll
      dataLength={filteredResults.length}
      next={fetchMoreMovies}
      hasMore={hasMore}

    >
      {
        filteredResults.length === 0 ? <p>No movie found from selected Genre</p> : <div className="movie-list">
          {filteredResults.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      }
      {loading && <p>Please wait your movies is Loading......</p>}


    </InfiniteScroll>
  );
});

export default MovieList;
