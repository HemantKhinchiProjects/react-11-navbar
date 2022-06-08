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
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">product</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https:www.twitter.com">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https:www.facebook.com">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https:www.twitter.com">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
