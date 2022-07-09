import homeData from '../data/home.json';
import aboutData from '../data/about.json';
import worksData from '../data/works.json';
import contactData from '../data/contact.json';

export const getHomeData = async () => {
  return homeData;
};

export const getAboutData = async () => {
  return aboutData;
};

export const getWorksData = async () => {
  return worksData;
};

export const getContactData = async () => {
  return contactData;
};
