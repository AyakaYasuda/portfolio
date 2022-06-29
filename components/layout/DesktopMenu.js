import React from 'react';
import Link from 'next/link';

import DownloadIcon from '@mui/icons-material/Download';

const DesktopMenu = () => {
  return (
    <nav>
      <ul className="GridCenter grid-cols-9 lg:grid-cols-11 gap-2 bg-green-dark py-3">
        <li className="NavLink col-start-3 lg:col-start-4">
          <Link href="/">HOME</Link>
        </li>
        <li className="NavLink col-start-4 lg:col-start-5">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className="NavLink col-start-5 lg:col-start-6">
          <Link href="/works">WORKS</Link>
        </li>
        <li className="NavLink col-start-6 lg:col-start-7">
          <Link href="/contact">CONTACT</Link>
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
