import React from 'react';

const Button = ({ children, bgColor, textColor, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className={`${bgColor} ${textColor} Button Hover uppercase`}>
        {children}
      </button>
    </a>
  );
};

export default Button;
