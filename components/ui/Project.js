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
  const mobileContent = (
    <div className="w-full GridCenter grid-cols-1">
      <section className="justify-self-end self-end mb-5">
        <h5 className="text-white text-right">
          {`Project - ${('0' + id).slice(-2)}`}
        </h5>
        <h4 className="text-brown text-right">{name}</h4>
      </section>
      <ProjectImage image={projectImage} />
      <div className="bg-orange p-5">
        <p className="text-white">{description}</p>
      </div>
      <ul className="FlexJustifyEnd flex-wrap gap-x-3 w-11/12 mr-0 ml-auto my-3">
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

  const desktopContent = (
    <div className="w-full relative px-3">
      <div className="hover:scale-105 hover:duration-300 drop-shadow-md absolute z-10">
        <ProjectImage image={projectImage} />
      </div>
      <section className="FlexColumn items-end min-h-[33vw]">
        <div className="mb-5">
          <h5 className="text-white text-right">
            {`Project - ${('0' + id).slice(-2)}`}
          </h5>
          <h4 className="text-brown text-right">{name}</h4>
        </div>
        <div className="relative bg-orange p-5 w-1/2 z-20">
          <p className="text-white">{description}</p>
        </div>
        <ul className="FlexJustifyEnd flex-wrap gap-x-3 w-2/5 mr-0 ml-auto my-3">
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
      </section>
    </div>
  );

  return (
    <>
      <div className="block md:hidden">{mobileContent}</div>
      <div className="hidden md:block">{desktopContent}</div>
    </>
  );
};

export default Project;
