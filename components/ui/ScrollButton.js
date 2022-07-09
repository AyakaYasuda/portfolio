import React from 'react';
import { Link as Scroll } from 'react-scroll';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ScrollButton = ({ className, path, offSet, onClick }) => {
  console.log(path)
  return (
    <Scroll
      to={path ? path : ""}
      smooth={true}
      duration={600}
      offset={offSet ? offSet : null}
      className={`bg-orange rounded-full animate-bounce cursor-pointer ${
        className ? className : ''
      }`}
      onClick={onClick ? onClick : null}
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
