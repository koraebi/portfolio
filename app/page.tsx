'use client';

import React, { useState } from 'react';
import HomeLayout from '@/layouts/HomeLayout';
import useLocale from '@/hooks/useLocale';
import { CareerProfiles, Pages } from '@/models/enums';
import { PortfolioPages } from '@/data/portfolioData';

export default function HomePage() {
  const { t } = useLocale(); 
  const [stateHoveredCareerProfile, setStateHoveredCareerProfile] = useState<CareerProfiles | null>(null);

  return (
    <HomeLayout>
      <div className="grid relative w-full h-[300px] lg:h-[600px] bg-[url('/designerEngineer.png')] lg:bg-auto bg-cover bg-center bg-repeat-x">
        <CareerProfileBackground source='/designer.png' isHovered={stateHoveredCareerProfile === CareerProfiles.Designer}/>
        <CareerProfileBackground source='/engineer.png' isHovered={stateHoveredCareerProfile === CareerProfiles.Engineer}/>

        <div className='absolute hidden lg:flex flex-row justify-between w-full h-full p-10'>
          <section 
            className='group flex flex-col justify-center' 
            onMouseEnter={() => setStateHoveredCareerProfile(CareerProfiles.Designer)} 
            onMouseLeave={() => setStateHoveredCareerProfile(null)}
          >
            <h1 className='font-extrabold mb-2 text-5xl group-hover:text-6xl ease-in duration-300'>
              {t('designer')}
            </h1>
            <div className='text-gray-500'>
              <p className='font-semibold mb-1'>
                {t('designerSubtitle')}
              </p>
              <div className='text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <p className='font-normal'>
                  {t('designerDescription1')} <br className='hidden lg:block'/>
                  {t('designerDescription2')} <span className='text-xs'>{t('designerDescription3')}</span>
                </p>
                <p className='font-medium'>
                  {t('designerDescription4')}
                </p>
              </div>
            </div>
          </section>
          <section 
            className='group flex flex-col justify-center text-right pl-11' 
            onMouseEnter={() => setStateHoveredCareerProfile(CareerProfiles.Engineer)} 
            onMouseLeave={() => setStateHoveredCareerProfile(null)}
          >
            <h1 className='font-extrabold mb-2 text-5xl group-hover:text-6xl ease-in duration-300'>
              {t('engineer')}
            </h1>
            <div className='text-gray-500'>
              <p className='font-semibold mb-1'>
                {t('engineerSubtitle')}
              </p>
              <div className='text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <p className='font-normal'>
                  {t('engineerDescription1')} <br className='hidden lg:block'/>
                  {t('engineerDescription2')}
                </p>
                <p className='font-medium'>
                  {t('engineerDescription3')}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div 
        className='
          place-items-center 
          lg:justify-center
          flex flex-col lg:flex-row 
          p-5 lg:py-10 lg:px-40 
          text-center lg:text-left'>
        {PortfolioPages.map((page: string) => (
          <ShortcutLink key={page} title={t(page)} link={`/${page}`} description={t(`${page}Description`)}/>
        ))}
      </div>
    </HomeLayout>
  )
};

type CareerProfileBackgroundProps = { source: string, isHovered: boolean };
function CareerProfileBackground({ source, isHovered }: CareerProfileBackgroundProps) {
  return (
    <div 
      style={{backgroundImage: `url(${source})`}} 
      className={`absolute w-full h-[300px] lg:h-[600px] bg-auto bg-center bg-repeat-x transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

type ShortcutLinkProps = { link: string, title: string, description: string };
function ShortcutLink({ link, title, description }: ShortcutLinkProps) {
  return (
    <a 
      href={link} 
      className='
        group 
        rounded-lg 
        px-5 py-4 
        transition-colors 
        border border-transparent 
        hover:border-gray-300 
        hover:bg-gray-100'
    >
      <h2 className='text-2xl font-semibold mb-2'>
        {title}{' '}
        <span 
          className='
            inline-block 
            transition-transform 
            group-hover:translate-x-1 
            motion-reduce:transform-none'
        >
          -&gt;
        </span>
      </h2>
      <p className='m-0 max-w-[30ch] text-sm text-gray-500'>
        {description}
      </p>
    </a>
  );
};
