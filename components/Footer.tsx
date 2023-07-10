'use client';

import { usePathname } from 'next/navigation';
import { Languages } from '../constants/common';
import Socials from '@/components/Socials';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer({ locale }: { locale: string }) {
  const pathname = usePathname().replace(new RegExp(`\\/(${Languages.join('|')})($|\\/)`, 'i'), '/'); 

  return (
    <footer className="flex flex-col lg:flex-row justify-center text-center mt-auto text-xs text-gray-900 p-5 gap-3">
      <div className="block lg:hidden flex flex-col gap-3">
        <LanguageSwitcher locale={locale} pathname={pathname} languages={Languages}/>
        <Socials/>
      </div>
      <p>© 2023 Koraebi | SIRET 88300306300012</p>
    </footer>
  );
}

