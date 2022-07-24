import React from 'react';
import classes from './Contact.module.css';

import ContactCard from './ui/ContactCard';
import Copyright from './ui/Copyright';

const Contact = ({ data }) => {
  return (
    <section id="contact" className={`${classes.bgHalf} px-5 pt-20 md:px-20`}>
      <ContactCard
        message={data.message}
        phone={data.phone}
        email={data.email}
      />
      <Copyright />
    </section>
  );
};

export default Contact;
