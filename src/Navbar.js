import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <a href="/" className="logo">
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram Logo" /> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="Instagram Logo" />
          
        </a>
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="icons">
        <i class="bi bi-heart-fill"></i>
          {/* <i class="bi bi-heart"></i> */}
          <i class="bi bi-messenger"></i>
          <i class="bi bi-house-door-fill"></i>
          <i class="bi bi-compass-fill"></i>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
