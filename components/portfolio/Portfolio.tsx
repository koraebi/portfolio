'use client';

import { Sections, Projects, Categories } from '@/constants/portfolio';
import React, { useState } from 'react';
import PortfolioProjectSelector from '@/components/portfolio/PortfolioProjectSelector';
import PortfolioCategorySelector from '@/components/portfolio/PortfolioCategorySelector';
import EmbedPreview from '@/components/EmbedPreview';

export default function Portfolio({ translations: t }: { translations: any }) {
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
    if (window.innerWidth >= 1024) {
      setSelectedProject(link);
    } else {
      window.open(link, "_blank");
    }
  }

  return (
    <div className="flex flex-col mt-5 p-5 lg:px-40">
      <div className="flex gap-10 px-10 justify-center lg:justify-start">
        {Sections.map((section: string) => (
          <div key={section} className="cursor-pointer" onClick={() => selectSection(section)}>
            <h1 
              className={`
                text-center 
                lg:text-left 
                font-extrabold 
                text-2xl 
                lg:text-5xl 
                ${selectedSection === section ? 'text-gray-800' : 'text-gray-400'}`}
            >
              {t[section]}
            </h1>
          </div>
        ))}
      </div>
      <PortfolioCategorySelector 
        translations={t} 
        categories={categories} 
        onCategoryChange={onCategoryChange}
      />
      <hr className="h-px bg-gray-200 border-0"/>
      <PortfolioProjectSelector 
        translations={t} 
        projects={projects} 
        section={selectedSection}
        onProjectSelected={onProjectSelected}
      />
      {selectedProject && (
        <EmbedPreview link={selectedProject} onClose={() => setSelectedProject('')}/>
      )}
    </div>
  );
}