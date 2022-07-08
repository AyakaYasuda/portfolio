import React from 'react';
import { Link as Scroll } from 'react-scroll';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ScrollButton = ({ className, path }) => {
  return (
    /* FIXME: use Link instead of div tag */
    <Scroll
      to={path}
      smooth={true}
      duration={600}
      offset={-130}
      className={`bg-orange rounded-full animate-bounce cursor-pointer ${className}`}
    >
      <ArrowDropDownIcon
        sx={{
          color: '#FFFFFF',
          fontSize: 40,
        }}
      />
    </Scroll>
  );
};

export default ScrollButton;
