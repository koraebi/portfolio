'use client';

import PageLayout from '@/layouts/PageLayout';
import { CurrentLocation, ProfessionalServices } from '@/data/portfolioData';
import useLocale from '@/hooks/useLocale';

const backgroundColors: any = {
  fuchsia: 'bg-fuchsia-300',
  purple: 'bg-purple-300',
  indigo: 'bg-indigo-300',
  blue: 'bg-blue-300',
  teal: 'bg-teal-300',
  violet: 'bg-violet-300'
};

export default function Services() {
  const { t } = useLocale();

  return (
    <PageLayout>
      <div 
        className={`
          grid lg:grid-cols-3 gap-5 
          grid-flow-row auto-rows-auto 
          py-5 lg:px-10 lg:pt-10
          drop-shadow-lg 
          text-white`}
      >
        {ProfessionalServices.map(service => (
          <div 
            key={service.name}
            className={`
              flex flex-col 
               text-
              p-5 
              gap-6 
              text-center 
              ${backgroundColors[service.background]}
              rounded-2xl`}
          >
            <section>
              <h2 className='justify-center font-extrabold mb-5 text-lg lg:text-xl'>
                {t(service.name)}
              </h2>
              <hr className='h-px bg-gray-200 border-0'/>
            </section>
            <section>
              <p className='font-semibold text-sm'>
                {t('location')}
              </p>
              <p className='flex justify-evenly gap-2'>
                {t(CurrentLocation)}
              </p>
            </section>
            <section>
              <p className='font-semibold text-sm'>
                {service.period.map((period, index) => (
                  <span key={index}>
                    {index !== 0 && ' / '}{t(period)}
                  </span>
                ))}
              </p>
              <p>
                <span className='text-2xl'>
                  {`$${service.price} `}
                </span>
                <span className='text-lg'>
                  / {t('day')}
                </span>
              </p>
            </section>
            <section>
              <p className='font-semibold text-sm'>
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
            <section className='flex flex-col gap-2 text-sm mt-auto '>
              <p className='font-semibold'>
                {service.remoteOnly ? t('remoteOnly') : t('onSiteOrRemote')}
              </p>
              <a 
                href={`/contact?subject=${t(service.name)}`} 
                className='mt-3'>
                <button 
                  className={`
                    drop-shadow-md
                    rounded-full 
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
};