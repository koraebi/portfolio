'use client';

import React, { useState, useEffect } from 'react';
import PortfolioProjectTile from '@/components/portfolio/PortfolioProjectTile';
import PortfolioInsightTile from '@/components/portfolio/PortfolioInsightTile';

export default function PortfolioProjectSelector({ 
    translations: t, 
    projects,
    section,
    onProjectSelected
  }: { 
    translations: any,
    projects: PortfolioProject[],
    section: string,
    onProjectSelected: (link: string) => void,
  }) {
  
  const [projectsStyle, setProjectsStyle] = useState({
    opacity: 'opacity-0',
    transition: ''
  });

  useEffect(() => {
    setProjectsStyle({
      opacity: 'opacity-0',
      transition: ''
    });
    if (projects.length) {
      setTimeout(() => setProjectsStyle({
        opacity: 'opacity-100',
        transition: 'transition-opacity duration-300'
      }), 300);
    }
  }, [projects]);

  return (
    <div 
      className={`
        grid lg:grid-cols-${section === 'projects' ? 3 : 2} gap-5 
        grid-flow-row auto-rows-auto 
        py-5 lg:px-10 lg:pt-10
        ${projectsStyle.opacity}
        ${projectsStyle.transition}`}
      >
        {projects.map((project: PortfolioProject, index: number) => {
          if (section === 'projects') {
            return (
              <PortfolioProjectTile 
                key={index} 
                name={project.name} 
                picture={project.picture} 
                categories={project.categories.map((category: PortfolioCategory) => t[category.id])} 
                skills={project.skills}
                onClick={() => onProjectSelected(project.link)}
              />
            )
          }
          if (section === 'insights') {
            return (
              <PortfolioInsightTile 
                key={index} 
                name={project.name} 
                picture={project.picture} 
                categories={project.categories.map((category: PortfolioCategory) => t[category.id])} 
                skills={project.skills}
                description={project.description}
                onClick={() => onProjectSelected(project.link)}
              />
            )
          }
        })}
      </div>
  );
}