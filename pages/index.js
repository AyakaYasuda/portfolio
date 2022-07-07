import Head from 'next/head';
import Home from '../components/Home';
import About from '../components/About';
import { getAboutData, getHomeData } from '../services';

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
    </>
  );
};

export const getStaticProps = async () => {
  const homeData = await getHomeData();
  const aboutData = await getAboutData();

  return {
    props: {
      home: homeData,
      about: aboutData,
    },
  };
};

export default HomePage;
