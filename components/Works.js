import React from 'react';
import classes from './Works.module.css';

import ProjectImage from './ui/ProjectImage';
import Button from './ui/Button';

const Works = ({ data }) => {
  return (
    <div className={`${classes.bgHalf} py-10 px-5 h-full`}>
      <h3 className="text-brown text-center mb-8">
        Things I've been working on
      </h3>
      <div className="h-4/5 overflow-y-auto">
        {data.map((work) => (
          <div
            key={work.id}
            className="w-full GridCenter grid-cols-1 md:grid-cols-2"
          >
            <section className="justify-self-end mb-5">
              <h5 className="text-white text-right">
                {`Project - ${('0' + work.id).slice(-2)}`}
              </h5>
              <h4 className="text-brown text-right">{work.name}</h4>
            </section>

            <ProjectImage image={work.projectImage} />

            <section className="mb-5">
              <div className="bg-orange p-5">
                <p className="text-white">{work.description}</p>
              </div>
              <div className="FlexJustifyEnd flex-wrap gap-1 w-10/12 mr-0 ml-auto my-3">
                {work.technologies.map((tech) => (
                  <small className="text-brown">{tech}</small>
                ))}
              </div>
              <div className="FlexCenter gap-3 my-5">
                <Button
                  bgColor="bg-pink-dark"
                  textColor="text-white"
                  url={work.github}
                >
                  view code
                </Button>
                <Button
                  bgColor="bg-pink-dark"
                  textColor="text-white"
                  url={work.url}
                >
                  visit app
                </Button>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
