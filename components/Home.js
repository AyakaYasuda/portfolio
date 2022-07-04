import React from 'react';

const Home = ({ data }) => {
  const mobileHome = (
    <>
      <div className="relative mt-36 z-0">
        <img
          src={data.topImage}
          alt="top image"
          className="object-cover w-full h-full"
        />
        <section className="absolute z-10 top-3/4 right-0 bg-green-light my-10 py-10 w-5/6">
          <div className="relative top-0 -left-5">
            <h2 className="text-brown UnderLine">{data.greeting}</h2>
            <div className="mt-4 mb-8">
              <h3 className="text-brown UnderLine">{data.aboutLine1}</h3>
              <h3 className="text-brown UnderLine">{data.aboutLine2}</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );

  const desktopHome = (
    <>
      <div className="GridCenter grid-cols-2 mt-36 lg:mt-44">
        <img
          src={data.topImage}
          alt="top image"
          className="object-cover w-full h-full"
        />
        <section className="bg-green-light w-full h-full p-10">
          <h2 className="text-brown">{data.greeting}</h2>
          <div>
            <h3 className="text-brown">{data.aboutLine1}</h3>
            <h3 className="text-brown">{data.aboutLine2}</h3>
          </div>
        </section>
      </div>
    </>
  );

  return (
    <>
      <div className="block md:hidden">{mobileHome}</div>
      <div className="hidden md:block">{desktopHome}</div>
    </>
  );
};

export default Home;
