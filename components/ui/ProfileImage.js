import React from 'react';
import BackgroundBox from './BackgroundBox';

const ProfileImage = ({image}) => {
  return (
    <section className="relative mx-16 md:my-10 h-[48vw] md:h-[730px]">
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
        src={image}
        alt="profile image"
        className="absolute rounded drop-shadow-md object-cover w-1/2 md:w-4/5 z-20 h-auto right-0 top-0 md:top-16 md:right-1/2 md:translate-x-1/2"
      />
    </section>
  );
};

export default ProfileImage;
