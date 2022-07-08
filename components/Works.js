import React from 'react';
import classes from './Works.module.css';

import Project from './ui/Project';

const Works = ({ data }) => {
  return (
    <div
      className={`${classes.bgHalf} py-10 lg:py-20 px-5 h-full md:px-10 lg:px-20`}
    >
      <h3 className="text-brown text-center mb-8">
        Things I've been working on
      </h3>
      <div className="h-4/5 overflow-y-auto">
        {data.map((work) => (
          <Project
            key={work.id}
            id={work.id}
            url={work.url}
            github={work.github}
            projectImage={work.projectImage}
            name={work.name}
            description={work.description}
            technologies={work.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
