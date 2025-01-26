'use client';

import Image from 'next/image';
import Link from 'next/link';
import Socials from '@/components/Socials';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { PortfolioPages } from '@/data/portfolioData';
import useLocale from '@/hooks/useLocale';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSelectedPage } from '@/redux/reducers/portfolioSlice';
import { Pages } from '@/models/enums';

export default function Navbar() {
  const { t } = useLocale('page');
  const dispatch = useAppDispatch();
  const stateSelectedPage = useAppSelector((selector) => selector.portfolio.selectedPage);

  return (
    <nav className='sticky lg:flex bg-white top-0 z-50 items-center px-5 lg:px-10 py-5 shadow-lg gap-2'>
      <Link 
        href='/' 
        className='flex justify-center text-gray-800 mr-5 mb-3 lg:mb-0'
        onClick={() => dispatch(setSelectedPage(Pages.Home))}
      >
        <Image className='mr-2' src='/logo.png' alt='Koraebi Logo' width='30' height='30' />
        <span className='font-semibold text-2xl'>Koraebi</span>
      </Link>
      <div className='flex justify-center text-gray-400 gap-5'>
        {PortfolioPages.map((page: Pages) => (
          <Link 
            key={page} 
            onClick={() => dispatch(setSelectedPage(page))}
            href={`/${page}`} 
            className={`
              capitalize 
              ${stateSelectedPage === `${page}` ? 'text-gray-800' : 'text-gray-400'} 
              hover:text-gray-800`}
          >
            {t(page)}
          </Link>
        ))}
      </div>
      <div className='hidden lg:flex ml-auto place-items-center'>
        <div className='mr-10'>
          <LanguageSwitcher/>
        </div>
        <Socials/>
      </div>
    </nav>
  );
};