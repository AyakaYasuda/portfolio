import React from 'react';
import classes from './Contact.module.css';

import ContactCard from './ui/ContactCard';
import Copyright from './ui/Copyright';

const Contact = ({ data }) => {
  console.log(data);
  return (
    <section className={`${classes.bgHalf} px-5 pt-10 md:px-20`}>
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
