import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Selena Li', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'SelenaLi_Spring21.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pawmates.png',
    title: 'Pawmates',
    info: 'Pet Adoption Website (React / Firebase / Bootstrap)',
    info2: 'Utilized PetFinder API to create tinder-like web application matching adoptable pets to potential owners',
    url: 'https://pawmates-72d84.web.app/',
    repo: 'https://github.com/selenali07/pawmates', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chpi.png',
    title: 'Focus Franklin',
    info: 'Site created using React and Firebase with UNC Web Development Club',
    info2: 'Created in partnership with Carolina Homelessness prevention initiative, a UNC organization aiming to tackle the growing issue of Homelessness in America.',
    url: 'https://focusonfranklin.org/homelessness',
    repo: 'https://github.com/web-dev-carolina/CHPI',
  },
  {
    id: nanoid(),
    img: 'chinainn.png',
    title: 'China Inn Chinese Restuarunt',
    info: 'Restaurant Website created using HTML/CSS',
    info2: 'Simple static site for family-owned business',
    url: 'https://chinainnhavelock.com/',
  },
  {
    id: nanoid(),
    img: 'twitter.png',
    title: 'Twitter Clone',
    info: 'Class Project for COMP 426: Modern Web Programming (JQUERY)',
    info2: 'Twitter-like interface allowing users to display, manage, and like tweets through AJAX and JSON request to classroom RESTful back-end API server',
    repo: 'https://github.com/selenali07/twitter-426', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'selenali@live.unc.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/selena-li-74200a1a3/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/selenali07',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
