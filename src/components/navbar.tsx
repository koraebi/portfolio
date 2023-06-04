'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Socials from '@/components/Socials';

const pages = [
  'about',
  'portfolio',
  'studies',
  'gallery',
  'contact'
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky lg:flex top-0 z-50 h-fit items-center bg-white mb-5 p-5 shadow-lg space-y-2 lg:space-y-0 ">
      <Link href="/" className="flex items-center justify-center text-gray-800 mr-7">
        <Image className="mr-2" src="/logo.png" alt="Koraebi Logo" width="20" height="20" />
        <span className="font-semibold text-xl">Koraebi</span>
      </Link>
      <div className="flex justify-center text-sm text-gray-400 space-x-4">
      {pages.map(page => (
        <Link href={`/${page}`} className={`capitalize hover:text-gray-800 ${pathname === `/${page}` ? 'text-gray-800' : 'text-gray-400'}`}>
          {page}
        </Link>
      ))}
      </div>
      <div className="hidden ml-auto lg:block">
        <Socials/>
      </div>
    </nav>
  );
}