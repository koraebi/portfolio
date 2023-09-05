'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import PageLayout from '@/layouts/PageLayout';
import { Projects, Categories } from '@/data/portfolio';
import SectionSelector from '@/components/SectionSelector';
import PortfolioProjectSelector from '@/components/portfolio/PortfolioProjectSelector';
import PortfolioCategorySelector from '@/components/portfolio/PortfolioCategorySelector';
import EmbedPreview from '@/components/EmbedPreview';

export default function Portfolio() {
  const t = useTranslations('portfolio');

  const [selectedSection, setSelectedSection] = useState('projects');
  const [selectedProject, setSelectedProject] = useState('');

  const [categories, setCategories] = useState(Categories
    .filter((category: PortfolioCategory) => category.section === 'projects'));
  const [projects, setProjects] = useState(Projects
    .filter((project: PortfolioProject) => project.section === 'projects'));

  const selectSection = (section: string): void => {
    if (section === selectedSection) return;
    
    setSelectedSection(section);
    setCategories(Categories.filter((category: PortfolioCategory) => category.section === section));
    setProjects(Projects.filter((project: PortfolioProject) => project.section === section));
  };

  const onCategoryChange = (category: string): void => {
    setProjects(Projects.filter((project: PortfolioProject) => 
      project.section === selectedSection && 
      (project.categories
        .map((category: PortfolioCategory) => category.id)
        .includes(category) || category === 'discovery'
      )
    ));
  };

  const onProjectSelected = (link: string): void => {
    if (window.innerWidth >= 1024 && link.includes('docs.google.com')) {
      setSelectedProject(link);
    } else {
      window.open(link, "_blank");
    }
  }

  return (
    <PageLayout>
      <SectionSelector 
        translations={t}
        sections={['projects', 'insights']} 
        selectedSection={selectedSection}
        onSectionSelected={selectSection}
      />
      <PortfolioCategorySelector 
        categories={categories} 
        onCategoryChange={onCategoryChange}
      />
      <hr className="h-px bg-gray-200 border-0"/>
      <PortfolioProjectSelector 
        projects={projects} 
        section={selectedSection}
        onProjectSelected={onProjectSelected}
      />
      {selectedProject && (
        <EmbedPreview 
          horizontal={selectedSection === 'projects'} 
          link={selectedProject} onClose={() => setSelectedProject('')}
        />
      )}
    </PageLayout>
  )
}