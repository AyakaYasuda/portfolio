import React from 'react';

const ProjectImage = ({ image }) => {
  return (
    <img
      src={image}
      alt="project image"
      className="rounded object-fit w-full h-[58vw] mb-8 md:w-[46vw] md:h-[28vw] md:my-8 md:mx-2"
    />
  );
};

export default ProjectImage;
