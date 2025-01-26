import { Categories, Locales, Pages } from "@/models/enums";
import { Sections } from "@/models/enums";
import { PortfolioCategory, PortfolioProject, ProfessionalService } from "@/models/interfaces";

export const PortfolioPages: Pages[] = [Pages.About, Pages.Portfolio, Pages.Services, Pages.Contact];
export const PortfolioLocales: Locales[] = [Locales.English, Locales.French];
export const PortfolioSections = [Sections.Projects, Sections.Insights];
export const CurrentLocation = 'france';

export const ResumeLink: any = {
  fr: "https://docs.google.com/document/d/e/2PACX-1vQ-cpPoMSBpXKBsIOQC0ADJHeB7jQuEooln5YVSBHTN7H-KdmmxbapLYsDkMhpmRSTAw9RaWulecHP7/pub",
  en: "https://docs.google.com/document/d/e/2PACX-1vQ-cpPoMSBpXKBsIOQC0ADJHeB7jQuEooln5YVSBHTN7H-KdmmxbapLYsDkMhpmRSTAw9RaWulecHP7/pub"
};

export const PortfolioCategories: PortfolioCategory[] = [
  {
    id: Categories.All,
    picture: '',
    background: 'indigo',
    section: Sections.Projects,
  },
  {
    id: Categories.All,
    picture: '',
    background: 'indigo',
    section: Sections.Insights,
  },
  {
    id: Categories.WebDevelopment,
    picture: '',
    background: 'cyan',
    section:  Sections.Projects,
  },
  {
    id: Categories.MobileDevelopment,
    picture: '',
    background: 'blue',
    section:  Sections.Projects,
  },
  {
    id: Categories.DesktopDevelopment,
    picture: '',
    background: 'blue',
    section:  Sections.Projects,
  },
  {
    id: Categories.UxUiDesign,
    picture: '',
    background: 'fuchsia',
    section:  Sections.Projects,
  },
  {
    id: Categories.Design3D,
    picture: '',
    background: 'fuchsia',
    section:  Sections.Projects,
  },
  {
    id: Categories.CreativeConcepts,
    picture: '',
    background: 'teal',
    section: Sections.Insights,
  },
  {
    id: Categories.CaseStudies,
    picture: '',
    background: 'yellow',
    section: Sections.Insights,
  },
  {
    id: Categories.IndependentResearch,
    picture: '',
    background: 'violet',
    section: Sections.Insights,
  },
];

export const PortfolioProjects: PortfolioProject[] = [
  {
    section: Sections.Projects,
    name: 'www.koraebi.com',
    categories: [Categories.WebDevelopment],
    skills: ['Next.js', 'React', 'Tailwind', 'Redux Toolkit'],
    picture: '/projects/koraebi_web.png',
    link: 'https://github.com/koraebi/portfolio',
    description: 'projectDescriptionKoraebi',
  },
  {
    section: Sections.Projects,
    name: 'Moon 2 BMT',
    categories: [Categories.WebDevelopment],
    skills: ['Next.js', 'React', 'Tailwind', 'Redux Toolkit'],
    picture: '/projects/moon2bmt.png',
    link: 'https://moon2bmt.vercel.app/',
    description: 'projectDescriptionMoon2Bmt',
  },
  {
    section: Sections.Projects,
    name: 'www.spidermaps.io',
    categories: [Categories.WebDevelopment],
    skills: ['Next.js', 'React', 'Tailwind', 'Redux Toolkit'],
    picture: '/projects/spidermaps.png',
    link: '',
    description: 'projectDescriptionSpidermaps',
  },
  {
    section: Sections.Projects,
    name: 'Coinify Integration',
    categories: [Categories.WebDevelopment],
    skills: ['Sails.js', 'Symfony', 'Stencil.js', 'Redux', 'Chai / Mocha'],
    picture: '/projects/coinify.jpg',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vSV0ATulrQRXr56PqjUwghpkdyCUkjDyjeUhfqvnhMkuZATwv8eDfcRgZ8gD2S9sIf2WjEGIAnlw0Si/embed',
    description: 'projectDescriptionCoinify',
  },
  {
    section: Sections.Projects,
    name: 'Togethere',
    categories: [Categories.UxUiDesign],
    skills: ['Design Thinking', 'Adobe XD'],
    picture: '/projects/togethere.png',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vSDtViEljMu8jaCEy6ANrCG7ihRGlemUxc4xUeJBNQiMPce6psgvBgCO85K7Dyk3TpQEzrsAkRV6tM9/embed',
    description: 'projectDescriptionTogethere',
  },
  {
    section: Sections.Projects,
    name: 'ScrumTable',
    categories: [Categories.WebDevelopment, Categories.MobileDevelopment, Categories.UxUiDesign, Categories.Design3D],
    skills: ['Angular', 'React Native', 'NestJS', 'Adobe XD'],
    picture: '/projects/interactiveTable.jpg',
    link: 'https://github.com/koraebi?tab=repositories&q=scrumtable',
    description: 'projectDescriptionScrumtable',
  },
  {
    section: Sections.Insights,
    name: "Tesla's Apples",
    categories: ['creativeConcepts'],
    skills: ['Design Thinking', 'Adobe Photoshop', 'Adobe XD'],
    picture: '/projects/teslaApple.png',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vSrNunTJippMtlNddxUrPSOtGu1Za-qxxqq1h5xa76QcC2joXmXMrRAbK2gel0rLBA34F4JqDPSMkGz/embed',
    description: 'What if Tesla started to sell apples. What kind of product would it be and how would it be sold ?',
  }
];

export const ProfessionalServices: ProfessionalService[] = [
  {
    name: 'frontendDeveloper',
    background: 'fuchsia',
    price: 500,
    remoteOnly: false,
    period: ['shortTerm', 'longTerm'],
    proficiencies: ['React', 'MUI', 'Redux Toolkit', 'Tailwind', 'Cypress', 'Jest', 'Chai / Mocha'],
  },
  {
    name: 'fullStackDeveloper',
    background: 'purple',
    price: 600,
    remoteOnly: false,
    period: ['shortTerm', 'longTerm'],
    proficiencies: ['Next.js', 'React', 'MUI', 'Redux Toolkit', 'Tailwind', 'MongoDB', 'Redis', 'Cypress', 'Jest', 'Sinon / Chai / Mocha'],
  },
  {
    name: 'backendDeveloper',
    background: 'violet',
    price: 400,
    remoteOnly: false,
    period: ['shortTerm', 'longTerm'],
    proficiencies: ['Node.js', 'MongoDB', 'Redis', 'Cypress', 'Jest', 'Sinon / Chai / Mocha'],
  },
  {
    name: 'mobileDeveloper',
    background: 'indigo',
    price: 400,
    remoteOnly: false,
    period: ['shortTerm', 'longTerm'],
    proficiencies: ['React Native', 'NativeBase', 'NativeWind', 'Realm', 'Firebase'],
  },
  {
    name: 'uxDesigner',
    background: 'blue',
    price: 300,
    remoteOnly: false,
    period: ['shortTerm'],
    proficiencies: ['User Research', 'User Centered Design', 'Usability Engineering', 'Privacy By Design', 'Blender 3D', 'Adobe Illustrator', 'Adobe Substance Painter', 'Adobe XD', 'Figma'],
  },
  {
    name: 'desktopDeveloper',
    background: 'teal',
    price: 300,
    remoteOnly: true,
    period: ['shortTerm'],
    proficiencies: ['Electron.js', 'React', 'MUI', 'Redux Toolkit', 'Tailwind', 'MongoDB', 'Redis', 'Cypress', 'Jest', 'Sinon / Chai / Mocha'],
  },
];
