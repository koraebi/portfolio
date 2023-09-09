export const Categories: PortfolioCategory[] = [
  {
    id: 'discovery',
    picture: '',
    background: 'bg-indigo-300',
    section: 'projects',
  },/*
  {
    id: 'uxEngineering',
    picture: '',
    background: 'bg-purple-300',
    section: 'projects',
  },*/
  {
    id: 'uxUiDesign',
    picture: '',
    background: 'bg-fuchsia-300',
    section: 'projects',
  },
  {
    id: 'webDevelopment',
    picture: '',
    background: 'bg-cyan-300',
    section: 'projects',
  },
  {
    id: 'mobileDevelopment',
    picture: '',
    background: 'bg-blue-300',
    section: 'projects',
  },/*
  {
    id: 'apiDevelopment',
    picture: '',
    background: 'bg-orange-300',
    section: 'projects',
  },*/
  {
    id: 'gameDevelopment',
    picture: '',
    background: 'bg-green-300',
    section: 'projects',
  },
  {
    id: 'discovery',
    picture: '',
    background: 'bg-indigo-300',
    section: 'insights',
  },
  {
    id: 'creativeConcepts',
    picture: '',
    background: 'bg-teal-300',
    section: 'insights',
  },
  {
    id: 'caseStudies',
    picture: '',
    background: 'bg-yellow-300',
    section: 'insights',
  },
  {
    id: 'independentResearch',
    picture: '',
    background: 'bg-violet-300',
    section: 'insights',
  },
];

export const Projects: PortfolioProject[] = [
  {
    section: 'projects',
    name: 'This Portfolio',
    categories: Categories.filter(category => ['webDevelopment'].includes(category.id)),
    skills: ['React.js', 'Tailwind', 'Next.js', 'next-intl', 'Vercel'],
    picture: '',
    link: 'https://github.com/koraebi/portfolio',
    description: '',
  },
  {
    section: 'projects',
    name: 'Real-time Leaderboard',
    categories: Categories.filter(category => ['webDevelopment', 'apiDevelopment'].includes(category.id)),
    skills: ['React.js', 'Redux', 'MUI', 'Express.js', 'Socket.IO'],
    picture: '',
    link: 'https://github.com/koraebi/ta-leaderboard',
    description: '',
  },
  {
    section: 'projects',
    name: 'Togethere',
    categories: Categories.filter(category => category.id === 'uxUiDesign'),
    skills: ['Design Thinking', 'Adobe XD'],
    picture: '/projects/togethere.png',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vSDtViEljMu8jaCEy6ANrCG7ihRGlemUxc4xUeJBNQiMPce6psgvBgCO85K7Dyk3TpQEzrsAkRV6tM9/embed',
    description: '',
  },
  {
    section: 'projects',
    name: 'ScrumTable',
    categories: Categories.filter(category => category.id === 'uxEngineering'),
    skills: ['Adobe XD', 'React Native', 'Angular', 'NestJS'],
    picture: '/interactiveTable.jpg',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTd0C0L43bjgitlfH_Ai0bT-IxD9gsZSr0Sp-fFojH_R2KkX50AGC7kbonNssz6UKX6UTh0zwC5I4Lt/embed',
    description: '',
  },
  {
    section: 'insights',
    name: "Tesla's Apples",
    categories: Categories.filter(category => category.id === 'creativeConcepts'),
    skills: ['Design Thinking', 'Adobe Photoshop', 'Adobe XD'],
    picture: '/teslaApple.png',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vSrNunTJippMtlNddxUrPSOtGu1Za-qxxqq1h5xa76QcC2joXmXMrRAbK2gel0rLBA34F4JqDPSMkGz/embed',
    description: 'What if Tesla started to sell apples. What kind of product would it be and how would it be sold ?',
  }
];