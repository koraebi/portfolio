import { Categories, Sections } from './enums';

export interface EmailData {
  from: string;
  subject: string;
  message: string;
};

export interface ProfessionalService {
  name: string;
  price: number;
  remoteOnly: boolean;
  period: string[];
  proficiencies: string[];
  background: string;
};

export interface PortfolioProject {
  section: Sections;
  name: string;
  categories: string[];
  skills: string[];
  picture: string;
  link: string;
  description: string;
};

export interface PortfolioCategory {
  id: Categories;
  picture: string;
  background: string;
  section: string;
};