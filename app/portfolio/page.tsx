'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import PageLayout from '@/layouts/PageLayout';
import { PortfolioProjects, PortfolioCategories } from '@/data/portfolioData';
import EmbedPreview from '@/components/EmbedPreview';
import ScrollButton from '@/components/ScrollButton';
import useLocale from '@/hooks/useLocale';
import { Categories, Positions, Sections } from '@/models/enums';
import { PortfolioCategory, PortfolioProject } from '@/models/interfaces';

const backgroundColors: any = {
  cyan: 'bg-cyan-300',
  fuchsia: 'bg-fuchsia-300',
  purple: 'bg-purple-300',
  indigo: 'bg-indigo-300',
  blue: 'bg-blue-300',
  green: 'bg-green-300',
  teal: 'bg-teal-300',
  yellow: 'bg-yellow-300',
  violet: 'bg-violet-300'
};

export default function Portfolio() {
  const { t } = useLocale();

  const [selectedSection, setSelectedSection] = useState(Sections.Projects);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(Categories.All);
  const [projects, setProjects] = useState(PortfolioProjects.filter((project: PortfolioProject) => project.section === Sections.Projects));
  const [visibleScrollButton, setVisibleScrollButton] = useState(Positions.None);
  const [projectsStyle, setProjectsStyle] = useState({
    opacity: 'opacity-0',
    transition: ''
  });
  const [categoriesStyle, setCategoriesStyle] = useState({
    opacity: 'opacity-0',
    transition: '',
    delay: 0,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('resize', onScroll);
  }, []);

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

  useEffect(() => {
    setSelectedCategory(Categories.All);
    setCategoriesStyle({
      opacity: 'opacity-0',
      transition: '',
      delay: 0,
    });
    setTimeout(() => {
      setCategoriesStyle({
        opacity: 'opacity-100',
        transition: 'transition-opacity duration-300',
        delay: 200,
      });
    }, 300);
    setTimeout(() => {
      const container = scrollRef.current;
      if (container) {
        onScroll();
      }
    }, PortfolioCategories.length * 100);
  }, [selectedSection]);

  const onClickSection = (section: Sections): void => {
    if (section === selectedSection) return;
    
    setSelectedSection(section);
    setProjects(PortfolioProjects.filter((project: PortfolioProject) => project.section === section));
  };

  const onCategoryChange = (category: string): void => {
    setProjects(PortfolioProjects.filter((project: PortfolioProject) => 
      project.section === selectedSection && 
      (project.categories.includes(category) || category === Categories.All)
    ));
  };

  const onProjectSelected = (link: string): void => {
    if (window.innerWidth >= 1024 && link.includes('docs.google.com')) {
      setSelectedProject(link);
    } else {
      window.open(link, '_blank');
    }
  };

  const selectCategory = (category: Categories) => {
    if (category === selectedCategory) return;

    setCategoriesStyle({
      opacity: 'opacity-100',
      transition: 'transition-opacity duration-300',
      delay: 0,
    });
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const onScroll = () => {
    const container = scrollRef.current;
    if (container) {
      if (container.scrollWidth !== container.clientWidth) {
        if (container.scrollLeft === 0) {
          setVisibleScrollButton(Positions.Right);
        } else if (container.scrollLeft === (container.scrollWidth - container.clientWidth)) {
          setVisibleScrollButton(Positions.Left);
        } else {
          setVisibleScrollButton(Positions.LeftAndRight);
        }
      } else {
        setVisibleScrollButton(Positions.None);
      }
    }
  };

  const scrollTo = (buttonDirection: string) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTo({
        left: buttonDirection === Positions.Right ? container.scrollWidth : 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <PageLayout>
      <div className='flex gap-10 px-10 justify-center lg:justify-start'>
        {Object.values(Sections).map((section) => (
          <div key={section} className='cursor-pointer' onClick={() => onClickSection(section)}>
            <h1 
              className={`
                text-center 
                lg:text-left 
                font-extrabold 
                text-2xl 
                lg:text-5xl 
                ${selectedSection === section ? 'text-gray-800' : 'text-gray-400'}`}
            >
              {t(section)}
            </h1>
          </div>
        ))}
      </div>
      <div className='flex relative'>
        <ScrollButton 
          isVisible={[Positions.Left, Positions.LeftAndRight].includes(visibleScrollButton)} 
          direction={Positions.Left} 
          onClick={scrollTo}
        />
        <div 
          className='flex overflow-x-auto py-5 lg:p-10 scrollbar-hide' 
          ref={scrollRef} 
          onScroll={onScroll}
        >
          <div className='flex gap-5 text-white'>
            {PortfolioCategories.filter((category) => category.section === selectedSection).map((category: PortfolioCategory, index: number) => (
              <div 
                key={index}
                className={`
                  cursor-pointer
                  ${categoriesStyle.transition}
                  ${categoriesStyle.opacity}
                `} 
                style={{ transitionDelay: `${index * categoriesStyle.delay}ms` }} 
                onClick={() => selectCategory(category.id)}
              >
                <CategoryTile 
                  t={t}
                  category={category}
                  isSelected={selectedCategory === category.id || selectedCategory === Categories.All}
                />
              </div>
            ))}
          </div>
        </div>
        <ScrollButton 
          isVisible={[Positions.Right, Positions.LeftAndRight].includes(visibleScrollButton)} 
          direction={Positions.Right} 
          onClick={scrollTo}
        />
      </div>
      <hr className='h-px bg-gray-200 border-0'/>
      <div 
        className={`
          grid grid-cols-1 2xl:grid-cols-2 
          grid-flow-row auto-rows-auto 
          gap-5 
          py-5 lg:px-10 lg:pt-10
          ${projectsStyle.opacity}
          ${projectsStyle.transition}`}
      >
        {projects.map(project => {
          if (selectedSection === Sections.Projects) {
            return (
              <ProjectTile key={project.name} t={t} project={project} onClick={() => onProjectSelected(project.link)} />
            )
          }
          if (selectedSection === Sections.Insights) {
            return (
              <InsightTile key={project.name} t={t} project={project} onClick={() => onProjectSelected(project.link)} />
            )
          }
        })}
      </div>
      {selectedProject && (
        <EmbedPreview 
          horizontal={selectedSection === Sections.Projects} 
          link={selectedProject} onClose={() => setSelectedProject('')}
        />
      )}
    </PageLayout>
  )
};

type InsightTileProps = { project: PortfolioProject, onClick: () => void, t: (id: string) => string};
function InsightTile({ project, onClick, t }: InsightTileProps) {
  return (
    <div 
      className='
        flex flex-col 
        cursor-pointer 
        rounded-2xl
        w-full min-w-[100px] h-[150px] lg:min-w-[200px] lg:h-[200px] 
        drop-shadow-lg 
        bg-white
        p-3 lg:p-5'
      onClick={onClick}
    >
      <div className='flex'>
        <section>
          <h1 className='font-extrabold mb-1 lg:mb-2 text-lg lg:text-xl'>
            {project.name}
          </h1>
          <p className='font-semibold line-clamp-1'>
            {project.categories.map((category: string, index: number) => (
              <span key={category}>
                {t(category)}{index !== project.categories.length - 1 && ' • '}
              </span>
            ))}
          </p>
          <p className='font-normal text-sm line-clamp-1'>
            {project.skills.map((skill: string, index: number) => (
              <span key={index}>
                {skill}{index !== project.skills.length - 1 && ' • '}
              </span>
            ))}
          </p>
        </section>
        <Image 
          className='ml-auto h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] rounded-2xl object-cover' 
          src={project.picture}
          width={500}
          height={500}
          alt=''
        />
      </div>
      <p className='font-normal text-sm line-clamp-3 mt-3 break-words'>
        {project.description}
      </p>
    </div>
  );
};

type ProjectTileProps = { project: PortfolioProject, onClick: () => void, t: (id: string) => string };
function ProjectTile({ project, onClick, t }: ProjectTileProps) {
  return (
    <div 
      className={`
        grid grid-rows-[60%_40%]
        ${project.link ? 'cursor-pointer' : ''} 
        h-[350px] 
        drop-shadow-md`}
      onClick={() => project.link && onClick() }
    >
      <div 
        className='rounded-t-2xl bg-clip-content bg-center bg-cover bg-no-repeat' 
        style={{ backgroundImage: `url(${project.picture})` }}
      />

      <div className='flex flex-col justify-between bg-white rounded-b-2xl p-4 shadow-inner truncate overflow-ellipsis'>
        <h1 className='font-extrabold text-lg lg:text-xl'>
          {project.name}<span className='font-medium text-base'>{!project.link && ` (${t('comingSoon')})`}</span>
        </h1>
        <p className='font-normal text-sm mb-2 truncate'>
          {t(project.description)}
        </p>
        <p className='font-semibold'>
          {project.categories.map((category: string, index: number) => (
            <span key={category}>
              {t(category)}{index !== project.categories.length - 1 && ' • '}
            </span>
          ))}
        </p>
        <p className='font-normal text-sm truncate'>
          {project.skills.map((skill: string, index: number) => (
            <span key={skill}>
              {skill}{index !== project.skills.length - 1 && ' • '}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

type CategoryTileProps = { category: PortfolioCategory, isSelected: boolean, t: (id: string) => string};
function CategoryTile({ category, isSelected, t }: CategoryTileProps) {
  const projects = PortfolioProjects.filter((project) => project.categories.includes(category.id)).length;
  
  return (
    <div 
      className={`
        ${isSelected ? 'opacity-100' : 'opacity-50'} 
        flex flex-col 
        shrink 
        rounded-2xl 
        drop-shadow-lg 
        w-[150px] lg:w-[200px] 
        h-[100px] lg:h-[150px] 
        bg-no-repeat 
        bg-cover
        ${backgroundColors[category.background]}
      `}
      style={{ 
        backgroundImage: category.picture && `url(${category.picture})`,
      }}>
      <div className='p-3 mt-auto lg:p-5'>
        <h1 className='font-extrabold lg:text-xl'>
          {t(category.id)}
        </h1>
        {category.id !== Categories.All && (
          <h2 className=''>
            {projects > 0 && projects} {t(projects == 0 ? 'comingSoon' : projects == 1 ? 'project' : 'projects') }
          </h2>
        )}
      </div>
    </div>
  );
};