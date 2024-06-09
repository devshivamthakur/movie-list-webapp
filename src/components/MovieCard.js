import React, { useState } from 'react';
import { IMAGE_URL } from '../services/api';
import { useSelector } from 'react-redux';

const MovieCard = React.memo(({ movie }) => {
  const { mappedGenres } = useSelector((state) => state.genre);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleOverview = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="movie-card">
      <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>
          {isExpanded ? movie.overview : `${movie.overview.slice(0, 100)}...`}
        </p>
        <button
            onClick={toggleOverview}
            style={{
              border: 'none',
              background: 'none',
              color: '#fff',
              textDecoration: 'underline',
              cursor: 'pointer',
              marginLeft:"-5px"
            }}
          >
            {isExpanded ? 'See less' : 'See more'}
          </button>
        {mappedGenres && Object.keys(mappedGenres).length > 0 && (
          <p>
            <strong>Genre:</strong>{' '}
            {movie.genre_ids
              .map((item) => {
                return mappedGenres[item] || '';
              })
              .join(', ')}
          </p>
        )}
        <p><strong>Cast:</strong> Not Available</p>
        <p><strong>Director:</strong> Not Available</p>
      </div>
    </div>
  );
});

export default MovieCard;
