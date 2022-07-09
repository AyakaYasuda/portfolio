import React from 'react';
import BackgroundBox from './BackgroundBox';

const ProjectImage = ({ image }) => {
  return (
    <section className="relative w-full my-5">
      <BackgroundBox
        bgColor="bg-pink-light"
        width="w-[88%] md:w-full"
        height="h-[50vw] md:h-[30vw]"
        position="z-10"
      />
      <img
        src={image}
        alt="project image"
        className="absolute -top-7 left-1/2 -translate-x-1/2 object-fit w-[83vw] h-[50vw] z-20 md:w-[45vw] md:h-[30vw] md:-top-8 md:translate-x-0 md:left-8"
      />
    </section>
  );
};

export default ProjectImage;
