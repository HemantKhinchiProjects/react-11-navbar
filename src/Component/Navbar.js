import React from 'react';
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <i class="fa-solid fa-shield-heart logo"></i>
          <button className="nav-toggle">
            <i class="fa-solid fa-sliders"></i>
          </button>
        </div>
        <div className="links-container show-container"></div>
        <ul className="social-icons"></ul>
      </div>
    </nav>
  );
};
export default Navbar;
