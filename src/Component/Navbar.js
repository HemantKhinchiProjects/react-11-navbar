import React, { useState } from 'react';
import { links, social } from './data';
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <i class="fa-solid fa-shield-heart logo"></i>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>

        <div
          className={`${
            showLinks ? 'links-container show-container' : 'links-container'
          }`}
        >
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
