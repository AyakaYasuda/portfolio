import React from 'react';
import classes from './Works.module.css';

import Project from './ui/Project';
import ScrollButton from './ui/ScrollButton';

const Works = ({ data }) => {
  
  const scrollToNext = () => {
    const element = document.getElementById('projectsWindow');
    if (element) {
      element.scrollTo({ top: 1000, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="works"
      className={`${classes.bgHalf} py-10 lg:py-20 px-5 h-full md:px-10 lg:px-20`}
    >
      <h3 className="text-brown text-center mb-8 md:mb-16">
        Things I have been working on
      </h3>
      <div id="projectsWindow" className="h-[92%] md:h-[90%] overflow-y-auto">
        {data.map((work, index) => (
          <div
            id={`project-${work.id}`}
            key={work.id}
            className="mb-10 md:mb-32"
          >
            <Project
              id={work.id}
              url={work.url}
              github={work.github}
              projectImage={work.projectImage}
              name={work.name}
              description={work.description}
              technologies={work.technologies}
            />
            {index !== data.length - 1 && (
              <div className="FlexColumn gap-5 mt-3">
                <h5 className="text-brown">Next Project</h5>
                <ScrollButton onClick={scrollToNext} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
