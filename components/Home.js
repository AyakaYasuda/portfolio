import React from 'react';
import classes from './Home.module.css';

const Home = ({ data }) => {
  return (
    <>
      <div className="relative mt-36 z-0 w-full h-full md:GridCenter md:grid-cols-2 lg:mt-48">
        <img
          src={data.topImage}
          alt="top image"
          className="object-cover w-full h-full opacity-80"
        />
        <section className="absolute bg-green-light z-10 top-3/4 right-0 my-12 w-11/12 h-80 md:top-0 md:my-0 md:w-1/2 md:h-[92%]">
          <div className="absolute top-[20%] -left-5 mx-2 w-max md:-left-12 z-20">
            <h2 className={classes.underline}>{data.greeting}</h2>
            <div className="my-8">
              <h3 className={classes.underline}>{data.aboutLine1}</h3>
              <h3 className={classes.underline}>{data.aboutLine2}</h3>
            </div>
          </div>
          <h5 className="absolute z-20 bottom-5 right-1/2 translate-x-1/2 text-white text-center w-max md:bottom-16">
            Check out what I've been working on
          </h5>
          <button className="absolute z-20">
            <div className="Triangle" />
          </button>
        </section>
      </div>
    </>
  );
};

export default Home;
