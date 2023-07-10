import PortfolioLayout from '@/layouts/PortfolioLayout';
import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

export default async function Portfolio() {
  const locale = useLocale();
  let translations;
  try {
    translations = (await import(`@/translations/${locale}.json`)).portfolio;
  } catch (error) {
    redirect('/');
  }

  return (
    <PortfolioLayout translations={translations}/>
  )
}