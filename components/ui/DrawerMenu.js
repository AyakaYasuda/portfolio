import React from 'react';
import { Link as Scroll } from 'react-scroll';

const DrawerMenu = () => {
  return (
    <nav>
      <ul className="GridCenter grid-cols-4 gap-2 bg-green-light opacity-90 py-3 px-16">
        <li className="NavLink text-brown">
          <Scroll to="home" smooth={true} duration={600} offset={-135}>
            HOME
          </Scroll>
        </li>
        <li className="NavLink text-brown">
          <Scroll to="about" smooth={true} duration={600} offset={-130}>
            ABOUT
          </Scroll>
        </li>
        <li className="NavLink text-brown">
          <Scroll to="works" smooth={true} duration={600} offset={-145}>
            WORKS
          </Scroll>
        </li>
        <li className="NavLink text-brown">
          <Scroll to="contact" smooth={true} duration={600} offset={-145}>
            CONTACT
          </Scroll>
        </li>
      </ul>
    </nav>
  );
};

export default DrawerMenu;
