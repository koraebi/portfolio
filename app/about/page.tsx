'use client';

import Image from 'next/image';
import PageLayout from '@/layouts/PageLayout';
import { ResumeLink } from '@/data/portfolioData';
import Rbr from '@/components/Rbr';
import useLocale from '@/hooks/useLocale';
import Section from '@/components/Section';
import SectionText from '@/components/SectionText';
import Line from '@/components/Line';
import pictureMe1 from '/public/me1.jpeg';
import pictureMeLaptop from '/public/meLaptop.jpeg';
import pictureMeTower from '/public/meTower.jpeg';
import picturePartDesigner from '/public/partDesigner.png';
import picturePartEngineer from '/public/partEngineer.png';

export default function About() {
  const { t, locale } = useLocale('about');

  return (
    <PageLayout>
      <Section reverse={true}>
        <SectionText position='end'>
          <h1 className='font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl'>
            {t('about')}
          </h1>
          <p className='text-lg mb-1'>
            {t('aboutSubtitle1')}<Rbr/>
            {t('aboutSubtitle2')}
          </p>
          <p className='font-light mb-4'>
            {t('aboutDescription1')}<Rbr/>
            {t('aboutDescription2')}<Rbr/>
            {t('aboutDescription3')}<Rbr/>
            {t('aboutDescription4')}
          </p>
          <a 
            className='w-fit place-self-center lg:place-self-start' 
            href={ResumeLink[locale]} 
            target='_blank'
          >
            <button className='rounded-full bg-lightBlack p-2 px-4 text-white'>
              {t('aboutButton')}
            </button>
          </a>
        </SectionText>
        <Image 
          className='object-contain mb-5 lg:mb-0 h-[200px] lg:h-[350px] w-auto drop-shadow-lg' 
          src={pictureMe1} 
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
          <h1 className='font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl text-center lg:text-left'>
            {t('partEngineer')}
          </h1>
          <p className='text-lg'>
            {t('references')}
          </p>
          <p className='font-light mb-2'>
            {t('referenceEngineer1')}<br/>
            {t('referenceEngineer2')}<br/>
            {t('referenceEngineer3')}<br/>
            {t('referenceEngineer4')}<br/>
            {t('referenceEngineer5')}<br/>
          </p>
          <p className='text-lg'>
            {t('skills')}
          </p>
          <p className='font-light'>
            {t('skillEngineer1')}<br/>
            {t('skillEngineer2')}<br/>
            {t('skillEngineer3')}<br/>
            {t('skillEngineer4')}<br/>
            {t('skillEngineer5')}<br/>
            {t('skillEngineer6')}<br/>
            {t('skillEngineer7')}<br/>
            {t('skillEngineer8')}<br/>
          </p>
        </SectionText>
      </Section>

      <Line/>

      <Section reverse={true}>
        <SectionText position='end'>
          <div className='lg:text-right'>
            <h1 className='font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl text-center lg:text-right'>
              {t('partDesigner')}
            </h1>
            <p className='text-lg'>
              {t('references')}
            </p>
            <p className='font-light mb-2'>
              {t('referenceDesigner1')}<br/>
              {t('referenceDesigner2')}<br/>
              {t('referenceDesigner3')}<br/>
              {t('referenceDesigner4')}<br/>
              {t('referenceDesigner5')}<br/>
            </p>
            <p className='text-lg'>
              {t('skills')}
            </p>
            <p className='font-light'>
              {t('skillDesigner1')}<br/>
              {t('skillDesigner2')}<br/>
              {t('skillDesigner3')}<br/>
              {t('skillDesigner4')}<br/>
              {t('skillDesigner5')}<br/>
              {t('skillDesigner6')}<br/>
              {t('skillDesigner7')}<br/>
              {t('skillDesigner8')}<br/>
            </p>
          </div>
          
        </SectionText>
        <Image 
          className='object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-auto drop-shadow-lg justify-self-start' 
          src={picturePartDesigner} 
          alt=''
        />
      </Section>

      <Line/>
      
      <Section reverse={false}>
        <Image 
          className='object-contain h-[200px] lg:h-[350px] mb-5 lg:mb-0 w-auto drop-shadow-lg justify-self-end' 
          src={pictureMeLaptop} 
          alt=''
        />
        <SectionText position='start'>
          <h1 className='font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl'>
            {t('randomFacts')}
          </h1>
          <p className='text-lg mb-1'>
            {t('randomFactsSubtitle')}
          </p>
          <p className='font-light'>
            {t('randomFact1')}<br/>
            {t('randomFact2')}<br/>
            {t('randomFact3')}<br/>
            {t('randomFact4')}<br/>
            {t('randomFact5')}<br/>
          </p>
        </SectionText>
      </Section>
      
      <Line/>

      <Section reverse={true}>
        <SectionText position='end'>
          <h1 className='font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl'>
            {t('myStory')}
          </h1>
          <p className='text-lg mb-1'>
            {t('myStorySubtitle')}
          </p>
          <p className='font-light mb-4'>
            {t('myStoryDescription1')}
          </p>
          <a className='w-fit place-self-center lg:place-self-start' href='/story'>
            <button className='rounded-full bg-lightBlack p-2 px-4 text-white'>
              {t('myStoryButton')}
            </button>
          </a>
        </SectionText>
        <Image 
          className='object-contain h-[200px] lg:h-[350px] mb-5 lg:mb-0 w-auto drop-shadow-lg justify-self-start' 
          src={pictureMeTower} 
          alt=''
        />
      </Section>
    </PageLayout>
  )
};




