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
        <h5 className="text-orange font-normal">Software Developer</h5>
      </header>
      <MobileMenu />
    </>
  );

  const desktopHeader = (
    <>
      <header className="GridCenter grid-cols-3 bg-blue-light px-10 py-6">
        <ul className="FlexJustifyStart gap-2 justify-self-start">
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
      <main className="z-0 h-full w-screen relative top-36 lg:top-44">{children}</main>
    </div>
  );
};

export default Layout;
