'use client';

import Socials from '@/components/Socials';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  return (
    <footer className='
      flex flex-col lg:flex-row 
      justify-center 
      text-center 
      mt-auto 
      text-xs text-gray-900 
      p-5 
      gap-3'
    >
      <div className='lg:hidden flex flex-col gap-3'>
        <LanguageSwitcher/>
        <Socials/>
      </div>
      <p>
        © 2023 Koraebi | SIRET 88300306300012
      </p>
    </footer>
  );
}

