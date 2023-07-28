'use client';

import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';
import PageLayout from '@/layouts/PageLayout';
import SectionSelector from '@/components/SectionSelector';
import { ProfessionalServices } from '@/data/services';

export default function Services() {
  const t: any = useTranslations('services');

  const [selectedSection, setSelectedSection] = useState('freelance');
  const [selectedCountry, setSelectedCountry] = useState('france');

  const selectSection = (section: string): void => {
    if (section === selectedSection) return;
    
    setSelectedSection(section);
    setSelectedCountry('france');
  };

  return (
    <PageLayout>
      <SectionSelector 
        translations={t}
        sections={['freelance', 'employee']} 
        selectedSection={selectedSection}
        onSectionSelected={selectSection}
      />
      <div 
        className={`
          grid lg:grid-cols-3 gap-5 
          grid-flow-row auto-rows-auto 
          py-5 lg:px-10 lg:pt-10
          drop-shadow-lg 
          text-white`}
      >
        {ProfessionalServices.filter(service => service.section === selectedSection).map(service => (
          <div 
            key={service.name}
            className={`
              flex flex-col 
              p-5 
              gap-6 
              text-center 
              ${selectedSection === 'freelance' ? 'bg-purple-400' : 'bg-purple-500'} 
              rounded-2xl`}
          >
            <section>
              <h2 className="justify-center font-extrabold mb-5 text-lg lg:text-xl">
                {t(service.name)}
              </h2>
              <hr className="h-px bg-gray-200 border-0"/>
            </section>
            <section>
              <p className="text-xs">
                {t('location')}
              </p>
              <p className="flex justify-evenly gap-2">
                {service.locations.map((country, index) => (
                  <span 
                    key={index} 
                    className={`
                      ${country === selectedCountry ? 'font-semibold text-white' : 'text-purple-200'}
                      cursor-pointer`}
                    onClick={() => setSelectedCountry(country)}
                  >
                    {t(country)}
                  </span>
                ))}
              </p>
            </section>
            <section>
              <p className="text-xs">
                {service.period.map((period, index) => (
                  <span key={index}>
                    {index !== 0 && ' / '}{t(period)}
                  </span>
                ))}
              </p>
              <p>
                <span className="text-2xl">
                  {`${service.prices[selectedCountry].price} ${service.prices[selectedCountry].currency}`}
                </span>
                <span className="text-lg">
                  /{t(service.prices[selectedCountry].type)}
                </span>
              </p>
            </section>
            <section>
              <p className="font-semibold">
                {t('proficiencies')}
              </p>
              <p>
                {service.proficiencies.map((skill, index) => (
                  <span key={index}>
                    {index !== 0 && ', '}{skill}
                  </span>
                ))}
              </p>
            </section>
            <section className="flex flex-col gap-2 text-xs mt-auto">
              <p className="font-semibold">
                {service.remoteOnly ? t('remoteOnly') : t('onSiteOrRemote')}
              </p>
              <a 
                href={`/contact?subject=${t(service.name) + '_' + t(service.section)}`} 
                className="mt-3">
                <button 
                  className={`
                    rounded-full 
                    ${selectedSection === 'freelance' ? 'bg-purple-500' : 'bg-purple-600'} 
                    p-2 px-4 
                    text-white 
                    border-2
                    text-base`}
                >
                  {t('contact')}
                </button>
              </a>
            </section>
          </div>
        ))}
      </div> 
    </PageLayout>
  )
}