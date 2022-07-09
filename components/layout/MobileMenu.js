import React from 'react';

import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DrawerMenu from '../ui/DrawerMenu';

const MobileMenu = ({ drawerState, onToggle }) => {
  return (
    <>
      <nav className="GridCenter grid-cols-2 bg-green-dark py-2 px-5">
        <ul className="FlexJustifyStart gap-2 justify-self-start">
          <li className="Hover">
            <GitHubIcon sx={{ color: '#FFFFFF', fontSize: 22 }} />
          </li>
          <li className="Hover">
            <LinkedInIcon sx={{ color: '#FFFFFF', fontSize: 22 }} />
          </li>
        </ul>
        <ul className="FlexCenter gap-3 justify-self-end">
          <li className="NavLink col-start-3 lg:col-start-4" onClick={onToggle}>
            MENU
          </li>
          <li className="NavLink col-start-7 FlexCenter gap-1 lg:col-start-8">
            <a href="../../assets/resume/resume-ayakayasuda.pdf" download>
              RESUME
            </a>
            <DownloadIcon sx={{ color: '#FFFFFF', fontSize: 18 }} />
          </li>
        </ul>
      </nav>
      {drawerState && <DrawerMenu />}
    </>
  );
};

export default MobileMenu;
