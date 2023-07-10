'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Pages, Languages } from '../constants/common';

export default function Navbar({ translations: t, locale }: { translations: any, locale: string }) {
  const pathname = usePathname().replace(new RegExp(`\\/(${Languages.join('|')})($|\\/)`, 'i'), '/'); 

  return (
    <nav className="sticky lg:flex bg-white top-0 z-50 items-center px-5 lg:px-10 py-5 shadow-lg gap-2">
      <Link href="/" className="flex justify-center text-gray-800 mr-5 mb-3 lg:mb-0">
        <Image className="mr-2" src="/logo.png" alt="Koraebi Logo" width="30" height="30" />
        <span className="font-semibold text-2xl">Koraebi</span>
      </Link>
      <div className="flex justify-center text-gray-400 gap-5">
        {Pages.map((page: string) => (
          <Link 
            key={page} 
            href={`/${page}`} 
            className={`capitalize text-gray-${pathname === `/${page}` ? '800' : '400'} hover:text-gray-800`}
          >
            {t[page]}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex ml-auto place-items-center">
        <div className="mr-10">
          <LanguageSwitcher locale={locale} pathname={pathname} languages={Languages}/>
        </div>
        <Socials/>
      </div>
    </nav>
  );
}