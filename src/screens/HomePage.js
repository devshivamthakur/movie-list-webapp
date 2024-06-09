import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import GenreFilter from '../components/GenreFilter';
import Header from '../components/Header';

const HomePage = () => {


  return (
    <div className="homepage">
      <Header/>
      <MovieList />
    </div>
  );
};

export default HomePage;
