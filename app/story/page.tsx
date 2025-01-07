'use client';

import Image from 'next/image';
import PageLayout from '@/layouts/PageLayout';
import useLocale from '@/hooks/useLocale';
import Section from '@/components/Section';
import SectionText from '@/components/SectionText';
import Line from '@/components/Line';
import picturePartDesigner from '/public/partDesigner.png';
import picturePartEngineer from '/public/partEngineer.png';

export default function Story() {
const { t, locale } = useLocale();

  return (
    <PageLayout>
      <a href='/about' className='mb-5 lg:mb-0 w-fit'>
        <button className='rounded-full bg-lightBlack p-2 px-4 text-white'>
          &lt;- {t('returnButton')}
        </button>
      </a>

      <Section reverse={false}>
        <Image 
          className='object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-auto drop-shadow-lg justify-self-end' 
          src={picturePartEngineer} 
          alt=''
        />
        <SectionText position='start'>
          <h1 className='font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl text-center lg:text-left'>
            {t('background')}
          </h1>
          <p className='font-light mb-2 text-center lg:text-left'>
            {t('backgroundStory')}
          </p>
        </SectionText>
      </Section>

      <Line/>

      <Section reverse={true}>
        <SectionText position='end'>
          <h1 className='font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl'>
            {t('milestones')}
          </h1>
          <p className='font-light mb-1 lg:mb-2'>
            {t('milestone1')}
          </p>
          <p className='font-light mb-1 lg:mb-2'>
            {t('milestone2')}
          </p>
          <p className='font-light mb-1 lg:mb-2'>
            {t('milestone3')}
          </p>
          <p className='font-light mb-1 lg:mb-2'>
            {t('milestone4')}
          </p>
        </SectionText>
        <Image 
          className='object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-auto drop-shadow-lg' 
          src={picturePartDesigner} 
          alt=''
        />
      </Section>

      <Line/>

      <Section reverse={false}>
        <Image 
          className='object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-auto drop-shadow-lg justify-self-end' 
          src={picturePartEngineer} 
          alt=''
        />
        <SectionText position='start'>
          <h1 className='font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl'>
            {t('aspirations')}
          </h1>
          <p className='font-light mb-2'>
            {t('aspiration1')}
          </p>
          <p className='font-light mb-2'>
            {t('aspiration2')}
          </p>
          <p className='font-light'>
            {t('aspiration3')}
          </p>
        </SectionText>
      </Section>
    </PageLayout>
  )
};