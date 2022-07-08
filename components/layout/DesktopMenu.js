import React from 'react';
import { Link as Scroll } from 'react-scroll';

import DownloadIcon from '@mui/icons-material/Download';

const DesktopMenu = () => {
  return (
    <nav>
      <ul className="GridCenter grid-cols-9 lg:grid-cols-11 gap-2 bg-green-dark py-3">
        <li className="NavLink col-start-3 lg:col-start-4">
          <Scroll to="home" smooth={true} duration={600} offset={-135}>
            HOME
          </Scroll>
        </li>
        <li className="NavLink col-start-4 lg:col-start-5">
          <Scroll to="about" smooth={true} duration={600} offset={-130}>
            ABOUT
          </Scroll>
        </li>
        <li className="NavLink col-start-5 lg:col-start-6">
          <Scroll to="works" smooth={true} duration={600} offset={-130}>
            WORKS
          </Scroll>
        </li>
        <li className="NavLink col-start-6 lg:col-start-7">
          <Scroll to="contact" smooth={true} duration={600} offset={-130}>
            CONTACT
          </Scroll>
        </li>
        <li className="NavLink col-start-7 FlexCenter gap-1 lg:col-start-8">
          <a href="../../assets/resume/resume-ayakayasuda.pdf" download>
            RESUME
          </a>
          <DownloadIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
