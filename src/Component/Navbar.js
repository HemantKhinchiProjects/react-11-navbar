import React from 'react';
import Sidebar from './Sidebar';
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <i class="fa-solid fa-shield-heart logo"></i>
          <button className="nav-toggle">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <Sidebar />
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
