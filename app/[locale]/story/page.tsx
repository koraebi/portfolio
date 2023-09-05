'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import PageLayout from '@/layouts/PageLayout';
import { AboutSection, SectionText } from '@/components/AboutSection';
import picturePartDesigner from '/public/partDesigner.png';
import picturePartEngineer from '/public/partEngineer.png';

export default function Story() {
  const t: any = useTranslations('story');

  return (
    <PageLayout>
      <a href="/about" className="mb-5 lg:mb-0 w-fit">
        <button className="rounded-full bg-lightBlack p-2 px-4 text-white">
          &lt;- {t('returnButton')}
        </button>
      </a>

      <AboutSection reverse={false}>
        <Image 
          className="object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-auto drop-shadow-lg justify-self-end" 
          src={picturePartEngineer} 
          alt=""
        />
        <SectionText position="start">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl text-center lg:text-left">
            {t('background')}
          </h1>
          <p className="font-light mb-2 text-center lg:text-left">
            {t('backgroundStory')}
          </p>
        </SectionText>
      </AboutSection>

      <hr className="h-px my-8 bg-gray-200 border-0"/>

      <AboutSection reverse={true}>
        <SectionText position="end">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl">
            {t('milestones')}
          </h1>
          <p className="font-light mb-1 lg:mb-2">
            {t('milestone1')}
          </p>
          <p className="font-light mb-1 lg:mb-2">
            {t('milestone2')}
          </p>
          <p className="font-light mb-1 lg:mb-2">
            {t('milestone3')}
          </p>
          <p className="font-light mb-1 lg:mb-2">
            {t('milestone4')}
          </p>
        </SectionText>
        <Image 
          className="object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-auto drop-shadow-lg" 
          src={picturePartDesigner} 
          alt=""
        />
      </AboutSection>

      <hr className="h-px my-8 bg-gray-200 border-0"/>

      <AboutSection reverse={false}>
        <Image 
          className="object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-auto drop-shadow-lg justify-self-end" 
          src={picturePartEngineer} 
          alt=""
        />
        <SectionText position="start">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl">
            {t('aspirations')}
          </h1>
          <p className="font-light mb-2">
            {t('aspiration1')}
          </p>
          <p className="font-light mb-2">
            {t('aspiration2')}
          </p>
          <p className="font-light">
            {t('aspiration3')}
          </p>
        </SectionText>
      </AboutSection>
    </PageLayout>
  )
}