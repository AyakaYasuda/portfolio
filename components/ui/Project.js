import React from 'react';

import ProjectImage from './ProjectImage';
import Button from './Button';

const Project = ({project}) => {
  return (
    <div
      className="w-full GridCenter grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 lg:auto-rows-min"
    >
      <section className="justify-self-end mb-5 md:col-start-2">
        <h5 className="text-white text-right">
          {`Project - ${('0' + project.id).slice(-2)}`}
        </h5>
        <h4 className="text-brown text-right">{project.name}</h4>
      </section>

      <ProjectImage
        image={project.projectImage}
        style="row-span-full col-start-1"
      />

      <div className="bg-orange p-5">
        <p className="text-white">{project.description}</p>
      </div>
      <ul className="FlexJustifyEnd flex-wrap gap-1 w-10/12 mr-0 ml-auto my-3">
        {project.technologies.map((tech, index) => (
          <li key={index}>
            <small className="text-brown">{tech}</small>
          </li>
        ))}
      </ul>
      <div className="FlexCenter gap-3 my-5 mb-5">
        <Button bgColor="bg-pink-dark" textColor="text-white" url={project.github}>
          view code
        </Button>
        <Button bgColor="bg-pink-dark" textColor="text-white" url={project.url}>
          visit app
        </Button>
      </div>
    </div>
  );
};

export default Project;
