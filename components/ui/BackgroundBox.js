import React from 'react';

const BackgroundBox = ({ bgColor, width, height, position }) => {
  return <div className={`${bgColor} ${width} ${height} ${position}`} />;
};

export default BackgroundBox;
