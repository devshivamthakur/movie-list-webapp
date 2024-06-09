import React, { useState, useEffect } from 'react';
import { fetchGenres } from '../services/api';
import './GenreFilter.css';
import { useSelector, useDispatch } from 'react-redux';
import { setGenres, setMappedGenres, setSelectedGenre } from '../redux/genresSlice';

const GenreFilter = React.memo(() => {

  const genres = useSelector((state) => state.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const response = await fetchGenres();
        if (response.genres && Array.isArray(response.genres)) {

          dispatch(setGenres([{
            id: 'ALL',
            name: 'ALL'
          }, ...response.genres
          ]));
        mapGenres(response.genres)
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadGenres();
  }, []);

  const mapGenres = (genres) =>{
    const mappedGenres = genres.reduce((acc,gen)=>{
      acc[gen.id] = gen.name
      return  acc
    },{})
    dispatch(setMappedGenres(mappedGenres || {}))
  }

  const handleGenreChange = async(e) => {
    dispatch(setSelectedGenre(e.target.value))
  };

  return (
    <div className="genre-filter-container">
      <div className="genre-filter">
        {genres.genres.map(genre => (
          <button key={genre.id} value={genre.id} onClick={handleGenreChange}
          style={{
            backgroundColor: genre.id == genres.selectedGenre ? '#f0283c' : "#444"
          }}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
});

export default GenreFilter;
