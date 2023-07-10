class PortfolioProject {
  section: string;
  name: string;
  categories: PortfolioCategory[];
  skills: string[];
  picture: string;
  link: string;
  description: string;
 
  constructor(
    section: string, 
    name: string, 
    categories: PortfolioCategory[], 
    skills: string[], 
    picture: string, 
    link: string,
    description: string) {
    this.section = section;
    this.name = name;
    this.categories = categories;
    this.skills = skills;
    this.picture = picture;
    this.link = link;
    this.description = description;
  }
}