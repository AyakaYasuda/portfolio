import React from 'react';
import Link from 'next/link';

import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const MobileMenu = () => {
  return (
    <nav className="GridCenter grid-cols-2 bg-green-dark py-3 px-5">
      <ul className="FlexJustifyStart gap-2 justify-self-start">
        <li className="Hover">
          <GitHubIcon sx={{ color: '#FFFFFF', fontSize: 22 }} />
        </li>
        <li className="Hover">
          <LinkedInIcon sx={{ color: '#FFFFFF', fontSize: 22 }} />
        </li>
      </ul>
      <ul className="FlexCenter gap-3 justify-self-end">
        <li className="NavLink col-start-3 lg:col-start-4">
          <Link href="/">MENU</Link>
        </li>
        <li className="NavLink col-start-7 FlexCenter gap-1 lg:col-start-8">
          <a href="../../assets/resume/resume-ayakayasuda.pdf" download>
            RESUME
          </a>
          <DownloadIcon sx={{ color: '#FFFFFF', fontSize: 18 }} />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
