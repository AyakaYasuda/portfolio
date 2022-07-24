import React from 'react';

const ProjectImage = ({ image }) => {
  return (
    <section className="relative w-full mb-8">
      <img
        src={image}
        alt="project image"
        className="object-fit w-full h-[58vw] z-20 md:w-[50vw] md:h-[30vw]"
      />
    </section>
  );
};

export default ProjectImage;
