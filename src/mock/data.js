import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Niel Fred A. Tabar',
  subtitle: 'I am a front end Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'NielTabar.JPG',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'PatutiGame.JPG',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/nieltabar/Games.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'STARTUP_PAGE.JPG',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/nieltabar/ZERO-TO-MASTERY.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CUFA.JPG',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/reydominictome/Facebook-Analyzer-Dashboard.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tabarnielfred0@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/home',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/niel-fred-tabar-73a716220/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nieltabar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
