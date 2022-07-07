import React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ScrollButton = ({ className, path }) => {
  return (
    /* FIXME: use Link instead of div tag */
    <div className={`bg-orange rounded-full animate-bounce ${className}`}>
      <ArrowDropDownIcon
        sx={{
          color: '#FFFFFF',
          fontSize: 40,
        }}
      />
    </div>
  );
};

export default ScrollButton;
