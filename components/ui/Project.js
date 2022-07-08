import React from 'react';

import ProjectImage from './ProjectImage';
import Button from './Button';

const Project = ({
  id,
  url,
  github,
  projectImage,
  name,
  description,
  technologies,
}) => {
  return (
    <div className="w-full GridCenter grid-cols-1 lg:grid-cols-2">
      <section className="justify-self-end mb-5 md:col-start-2">
        <h5 className="text-white text-right">
          {`Project - ${('0' + id).slice(-2)}`}
        </h5>
        <h4 className="text-brown text-right">{name}</h4>
      </section>

      <ProjectImage image={projectImage} style="row-span-full col-start-1" />

      <div className="bg-orange p-5">
        <p className="text-white">{description}</p>
      </div>
      <ul className="FlexJustifyEnd flex-wrap gap-x-1 w-10/12 mr-0 ml-auto my-3">
        {technologies.map((tech, index) => (
          <li key={index}>
            <small className="text-brown">{tech}</small>
          </li>
        ))}
      </ul>
      <div className="FlexCenter gap-3 my-5 mb-5">
        <Button bgColor="bg-pink-dark" textColor="text-white" url={github}>
          view code
        </Button>
        <Button bgColor="bg-pink-dark" textColor="text-white" url={url}>
          visit app
        </Button>
      </div>
    </div>
  );
};

export default Project;
