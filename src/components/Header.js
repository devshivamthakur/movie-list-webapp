import React from 'react';
import GenreFilter from './GenreFilter';

const Header = React.memo(() => {
  return (
    <header
    style={{
      position: "sticky",
      top: 0,
      zIndex: 1000, // Ensure the header is above other content
      background:"#333"
    }}

    >
        <div style={{
            display:"flex"
        }}>
      <h1 
      style={{
        color:"#f0283c"
      }}
      >MOVIEFIX</h1>

        </div>
      <GenreFilter />

    </header>
  );
});

export default Header;
