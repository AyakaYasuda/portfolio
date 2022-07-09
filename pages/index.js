import Head from 'next/head';
import Home from '../components/Home';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';
import {
  getAboutData,
  getContactData,
  getHomeData,
  getWorksData,
} from '../services';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Ayaka Yasuda | Software Developer in Vancouver</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Ayaka Yasuda is a software developer who specializes in developing web applications with React and Node.js. Based in Vancouver."
        />
      </Head>
      <Home data={props.home} />
      <About data={props.about} />
      <Works data={props.works} />
      <Contact data={props.contact} />
    </>
  );
};

export const getStaticProps = async () => {
  const homeData = await getHomeData();
  const aboutData = await getAboutData();
  const worksData = await getWorksData();
  const contactData = await getContactData();

  return {
    props: {
      home: homeData,
      about: aboutData,
      works: worksData,
      contact: contactData,
    },
  };
};

export default HomePage;
