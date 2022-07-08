import React from 'react';
import BackgroundBox from './BackgroundBox';

const ProjectImage = ({ image }) => {
  return (
    <section className="relative w-full my-5">
      <BackgroundBox
        bgColor="bg-pink-light"
        width="w-11/12"
        height="h-[50vw]"
        position="z-10 mx-auto"
      />
      <img
        src={image}
        alt="project image"
        className="absolute -top-5 left-8 object-fit w-[80vw] h-[50vw] z-20"
      />
    </section>
  );
};

export default ProjectImage;
