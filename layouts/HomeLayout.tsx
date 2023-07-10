import ShortcutLink from '../components/ShortcutLink';
import HomeBanner from '../components/HomeBanner';
import { Pages } from '../constants/common';
import { useTranslations } from 'next-intl';

export default function HomeLayout() {
  const t: any = useTranslations('home');

  return (
    <main className="flex flex-col items-center">
      <HomeBanner/>
      <div 
        className="
          place-items-center 
          lg:justify-center
          flex flex-col lg:flex-row 
          w-full 
          p-5 lg:py-10 lg:px-40 
          text-center lg:text-left">
        {Pages.map((page: string) => (
          <ShortcutLink key={page} title={t(page)} link={`/${page}`} description={t(`${page}Description`)}/>
        ))}
      </div>
    </main>
  );
}