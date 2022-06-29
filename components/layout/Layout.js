import React from 'react';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Layout = ({ children }) => {
  const mobileHeader = (
    <>
      <header className="FlexColumn bg-blue-light px-10 py-6">
        <h1 className="text-orange">Ayaka Yasuda</h1>
        <h4 className="text-orange font-normal">Software Developer</h4>
      </header>
      <MobileMenu />
    </>
  );

  const desktopHeader = (
    <>
      <header className="GridCenter grid-cols-3 bg-blue-light px-10 py-6">
        <ul className="FlexJustifyStart gap-2 justify-self-start">
          <li className="Hover">
            <GitHubIcon sx={{ color: '#FFBF69', fontSize: 35 }} />
          </li>
          <li className="Hover">
            <LinkedInIcon sx={{ color: '#FFBF69', fontSize: 35 }} />
          </li>
        </ul>
        <div className="FlexColumn">
          <h1 className="text-orange">Ayaka Yasuda</h1>
          <h4 className="text-orange font-normal">Software Developer</h4>
        </div>
      </header>
      <DesktopMenu />
    </>
  );

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 block md:hidden">
        {mobileHeader}
      </div>
      <div className="fixed top-0 left-0 right-0 hidden md:block">
        {desktopHeader}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
