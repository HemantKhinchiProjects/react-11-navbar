import React from 'react';
import { links, social } from './data';
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
        <div className="links-container show-container">
          <ul className="links">
            {links.map((links) => {
              const { id, url, text } = links;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((sociallinks) => {
            const { id, url, icon } = sociallinks;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
