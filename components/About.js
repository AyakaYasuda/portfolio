import React from 'react';
import BackgroundBox from './ui/BackgroundBox';

const About = ({ data }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 my-60 md:my-16 md:mx-20 lg:md-28 md:gap-8">
      <section className="pt-16 pb-8 px-8">
        <h3 className="text-brown text-left">About ME</h3>
        <div>
          <p className="text-brown pt-5">{data.profilePara1}</p>
          <p className="text-brown pt-5">{data.profilePara2}</p>
        </div>
        <div className="bg-orange px-5 py-2 w-max mt-10 mb-3">
          <h5 className="text-white text-center">My Skills</h5>
        </div>
        <div>
          {data.mySkills.map((skill) => (
            <div key={skill.id}>
              <small className="text-brown font-semibold">
                {skill.category}
              </small>
              <ul className="FlexJustifyStart flex-wrap gap-1 pl-2">
                <li key={skill.id}>
                  <small className="text-brown">
                    {skill.skills.join(', ')}
                  </small>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="relative mx-16 md:my-10 h-[48vw]">
        <BackgroundBox
          bgColor="bg-pink-light"
          width="w-10/12 md:w-4/5"
          height="h-4/5"
          position="absolute z-0 top-5 right-0 md:left-3"
        />
        <BackgroundBox
          bgColor="bg-orange"
          width="w-11/12"
          height="h-[30vw] md:h-[12vw]"
          position="absolute z-10 bottom-0 -right-20 md:bottom-16 md:-right-16"
        />
        <img
          src={data.profileImage}
          alt="profile image"
          className="absolute object-cover w-1/2 md:w-4/5 z-20 h-auto right-0 top-0 md:top-16 md:right-1/2 md:translate-x-1/2"
        />
      </section>
    </div>
  );
};

export default About;
