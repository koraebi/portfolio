'use client';

import useLocale from '@/hooks/useLocale';
import { Locales } from '@/models/enums';

const avaiableLocales: Locales[] = [Locales.English, Locales.French];

export default function LanguageSwitcher() {
  const { setLocale, locale: currentLocale } = useLocale();
  
  return (
    <div className="flex justify-center gap-5 uppercase text-base">
    {avaiableLocales.map(locale => (
      <div 
        key={locale} 
        className={`
          ${locale === currentLocale ? 'text-gray-800' : 'text-gray-400'}
          cursor-pointer
        `}
        onClick={() => setLocale(locale)}
      >
        {locale.toUpperCase()}
      </div>
    ))}
    </div>
  );
}