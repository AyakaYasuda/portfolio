import React from 'react';
import { Link as Scroll } from 'react-scroll';

import DownloadIcon from '@mui/icons-material/Download';

const DesktopMenu = () => {
  return (
    <nav className="bg-green-dark py-3 px-32">
      <ul className="GridCenter grid-cols-5 gap-2 max-w-screen-xl mx-auto lg:grid-cols-7">
        <li className="NavLink lg:col-start-2">
          <Scroll to="home" smooth={true} duration={600} offset={-135}>
            HOME
          </Scroll>
        </li>
        <li className="NavLink lg:col-start-3">
          <Scroll to="about" smooth={true} duration={600} offset={-130}>
            ABOUT
          </Scroll>
        </li>
        <li className="NavLink lg:col-start-4">
          <Scroll to="works" smooth={true} duration={600} offset={-130}>
            WORKS
          </Scroll>
        </li>
        <li className="NavLink lg:col-start-5">
          <Scroll to="contact" smooth={true} duration={600} offset={-130}>
            CONTACT
          </Scroll>
        </li>
        <li className="NavLink FlexCenter gap-1 lg:col-start-6">
          <a
            href="https://drive.google.com/uc?export=download&1uY4ToNH3-cbSI85G6fUVpyoxbuKGkOI7zRNqZpyegdQ"
            download
          >
            RESUME
          </a>
          <DownloadIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
