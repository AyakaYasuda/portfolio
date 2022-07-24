import React from 'react';

import Button from './Button';

const ContactCard = ({ message, phone, email }) => {
  return (
    <div className="bg-orange drop-shadow-md w-[95%] md:w-2/3 max-w-screen-md mx-auto px-5 py-20 lg:p-20 FlexColumn gap-y-16 mb-20">
      <h3 className="text-brown text-center">Reach Me Out</h3>
      <p className="text-white text-center px-10 lg:px-28">{message}</p>
      <Button
        bgColor="bg-white"
        textColor="text-orange"
        url={`mailto:${email}`}
      >
        <h5>say hello</h5>
      </Button>
      <div className="FlexColumn">
        <h5 className="text-white">{phone}</h5>
        <h5 className="text-white">{email}</h5>
      </div>
    </div>
  );
};

export default ContactCard;
