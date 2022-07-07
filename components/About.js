import React from 'react';

const About = ({ data }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 mt-60 md:mt-10 md:mx-28">
      <section className="py-16 px-8">
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
      <section className="py-16 px-8">
        <img
          src={data.profileImage}
          alt="profile image"
          className="w-[60vw] md:w-[28vw] h-auto m-auto"
        />
      </section>
    </div>
  );
};

export default About;
