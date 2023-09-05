'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Image from 'next/image';
import HomeLayout from '@/layouts/HomeLayout';
import { Pages } from '@/data/common';
import ShortcutLink from '@/components/ShortcutLink';
import basePicture from '/public/designerEngineer.png';
import designerPicture from '/public/designer.png';
import engineerPicture from '/public/engineer.png';

export default function HomePage() {
  const t = useTranslations('home');

  const [opacityDesigner, setOpacityDesigner] = useState(0);
  const [opacityEngineer, setOpacityEngineer] = useState(0);

  const handleMouseEvent = (target: string) => {
    if (target === 'designer') {
      setOpacityEngineer(0);
      setOpacityDesigner(100);
    } else if (target === 'engineer') {
      setOpacityDesigner(0);
      setOpacityEngineer(100);
    } else {
      setOpacityEngineer(0);
      setOpacityDesigner(0);
    }
  };

  return (
    <HomeLayout>
      <div className="grid relative w-full h-[300px] lg:h-[500px]">
        <div className="h-[300px] lg:h-[500px]">
          <Image className="lg:absolute object-cover h-full drop-shadow-lg" src={basePicture} alt=""/>
          <Image 
            className={`
              absolute 
              hidden lg:block 
              object-cover 
              h-full 
              transition-opacity duration-1000 opacity-${opacityDesigner}`} 
            src={designerPicture} alt=""
          />
          <Image 
            className={`
              absolute 
              hidden lg:block 
              object-cover 
              h-full 
              transition-opacity duration-1000 opacity-${opacityEngineer}`} 
            src={engineerPicture} alt=""
          />
        </div>
        <div className="absolute hidden lg:flex flex-row justify-between w-full h-full p-10">
          <section 
            className="group flex flex-col justify-center" 
            onMouseEnter={() => handleMouseEvent('designer')} 
            onMouseLeave={() => handleMouseEvent('')}
          >
            <h1 className="font-extrabold mb-2 text-5xl group-hover:text-6xl ease-in duration-300">
              {t('designer')}
            </h1>
            <div className="text-gray-500">
              <p className="font-semibold mb-1">
                {t('designerSubtitle')}
              </p>
              <div className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-normal">
                  {t('designerDescription1')} <br className="hidden lg:block"/>
                  {t('designerDescription2')} <span className="text-xs">{t('designerDescription3')}</span>
                </p>
                <p className="font-medium">
                  {t('designerDescription4')}
                </p>
              </div>
            </div>
          </section>
          <section 
            className="group flex flex-col justify-center text-right pl-11" 
            onMouseEnter={() => handleMouseEvent('engineer')} 
            onMouseLeave={() => handleMouseEvent('')}
          >
            <h1 className="font-extrabold mb-2 text-5xl group-hover:text-6xl ease-in duration-300">
              {t('engineer')}
            </h1>
            <div className="text-gray-500">
              <p className="font-semibold mb-1">
                {t('engineerSubtitle')}
              </p>
              <div className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-normal">
                  {t('engineerDescription1')} <br className="hidden lg:block"/>
                  {t('engineerDescription2')}
                </p>
                <p className="font-medium">
                  {t('engineerDescription3')}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div 
        className="
          place-items-center 
          lg:justify-center
          flex flex-col lg:flex-row 
          p-5 lg:py-10 lg:px-40 
          text-center lg:text-left">
        {Pages.map((page: string) => (
          <ShortcutLink key={page} title={t(page)} link={`/${page}`} description={t(`${page}Description`)}/>
        ))}
      </div>
    </HomeLayout>
  )
}
