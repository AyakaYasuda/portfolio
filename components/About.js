import React from 'react';
import ProfileImage from './ui/ProfileImage';

const About = ({ data }) => {
  return (
    <div
      id="about"
      className="relative grid grid-cols-1 md:grid-cols-2 mt-72 mb-16 md:my-16 md:mx-20 lg:md-28 md:gap-8 overflow-x-hidden"
    >
      <section className="py-8 px-8">
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
      <ProfileImage image={data.profileImage} />
    </div>
  );
};

export default About;
