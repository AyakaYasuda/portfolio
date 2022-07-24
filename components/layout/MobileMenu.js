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
            <a href="https://github.com/AyakaYasuda">
              <GitHubIcon sx={{ color: '#FFFFFF', fontSize: 22 }} />
            </a>
          </li>
          <li className="Hover">
            <a href="https://www.linkedin.com/in/ayaka-yasuda-7ab597197">
              <LinkedInIcon sx={{ color: '#FFFFFF', fontSize: 22 }} />
            </a>
          </li>
        </ul>
        <ul className="FlexCenter gap-3 justify-self-end">
          <li className="NavLink col-start-3 lg:col-start-4" onClick={onToggle}>
            MENU
          </li>
          <li className="NavLink col-start-7 FlexCenter gap-1 lg:col-start-8">
            <a href="https://drive.google.com/uc?export=download&1kCn__2QkSfMs2St_aEJk83plAlOCuNEM" download>
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
