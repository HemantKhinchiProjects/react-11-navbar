import React, { useState, useRef, useEffect } from 'react';
import { links, social } from './data';
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // for getting link height dynamic
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);
  //every time we change
  useEffect(
    () => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = `0px`;
      }
    } /*call back function for check height*/,
    [showLinks]
  );

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

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
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
