import Link from 'next/link';

export default function LanguageSwitcher({ locale, pathname, languages }: { locale:string, pathname:string, languages:string[] }) {
  return (
    <div className="flex justify-center gap-5 uppercase text-base">
    {languages.map(language => { return (
      <Link key={language} href={`/${language}${pathname}`} className={`text-gray-${language === locale ? '800' : '400'}`}>
        {language}
      </Link>
    )})}
    </div>
  );
}