import { useTranslations } from 'next-intl';

export default function ServicesLayout() {
  const t: any = useTranslations('services');

  return (
    <main className="flex flex-col p-5 mt-5 lg:px-40">
      <h1 className="font-extrabold text-center text-2xl lg:text-5xl">
        {t('comingSoon')}
      </h1>
    </main>
  );
}