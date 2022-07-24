import React, { useState } from 'react';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Layout = ({ children }) => {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setIsDrawerMenuOpen((prev) => !prev);
  };

  const closeDrawerHandler = () => {
    setIsDrawerMenuOpen(false);
  };

  const mobileHeader = (
    <>
      <header
        className="FlexColumn bg-blue-light px-10 py-2"
        onClick={closeDrawerHandler}
      >
        <h1 className="text-orange">Ayaka Yasuda</h1>
        <h5 className="text-orange font-normal">Software Developer</h5>
      </header>
      <MobileMenu
        drawerState={isDrawerMenuOpen}
        onToggle={toggleDrawerHandler}
      />
    </>
  );

  const desktopHeader = (
    <>
      <header className="GridCenter grid-cols-3 bg-blue-light px-10 py-2">
        <ul className="FlexJustifyStart gap-2 justify-self-start max-w-screen-xl mx-auto">
          <li className="Hover">
            <a
              href="https://github.com/AyakaYasuda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ color: '#FFBF69', fontSize: 35 }} />
            </a>
          </li>
          <li className="Hover">
            <a
              href="https://www.linkedin.com/in/ayaka-yasuda-7ab597197"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ color: '#FFBF69', fontSize: 35 }} />
            </a>
          </li>
        </ul>
        <div className="FlexColumn">
          <h1 className="text-orange">Ayaka Yasuda</h1>
          <h5 className="text-orange font-normal">Software Developer</h5>
        </div>
      </header>
      <DesktopMenu />
    </>
  );

  return (
    <div className="relative h-screen w-screen">
      <div className="fixed top-0 left-0 right-0 block md:hidden z-10">
        {mobileHeader}
      </div>
      <div className="fixed top-0 left-0 right-0 hidden md:block z-10">
        {desktopHeader}
      </div>
      <main
        className="z-0 h-full w-screen relative top-28 lg:top-36"
        onClick={closeDrawerHandler}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
