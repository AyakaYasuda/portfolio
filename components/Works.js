import React from 'react';
import classes from './Works.module.css';

import Project from './ui/Project';
import ScrollButton from './ui/ScrollButton';

const scrollToNext = (id) => {
  const element = document.getElementById('projectsWindow');
  const nextElement = document.getElementById(`project-${id + 1}`);
  const rect = nextElement.getBoundingClientRect();
  const position = rect.top;
  console.log(position);

  element.scrollBy(0, position);
};

const Works = ({ data }) => {
  const scrollHandler = (id) => {
    scrollToNext(id);
  };

  return (
    <div
      id="works"
      className={`${classes.bgHalf} py-10 lg:py-20 px-5 h-full md:px-10 lg:px-20`}
    >
      <h3 className="text-brown text-center mb-8 md:mb-16">
        Things I have been working on
      </h3>
      <div id="projectsWindow" className="h-[92%] md:h-[92%] overflow-y-auto max-w-screen-lg mx-auto">
        {data.map((work, index) => (
          <div
            id={`project-${work.id}`}
            key={work.id}
            className="mb-10 md:mb-20"
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
              <div className="FlexColumn gap-5 my-16">
                <h5 className="text-brown">Next Project</h5>
                <ScrollButton onClick={() => scrollHandler(work.id)} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
