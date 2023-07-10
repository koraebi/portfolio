import ContactLayout from '@/layouts/ContactLayout';
import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

export default async function Contact() {
  const locale = useLocale();
  let translations;
  try {
    translations = (await import(`@/translations/${locale}.json`)).contact;
  } catch (error) {
    redirect('/');
  }

  return (
    <ContactLayout translations={translations}/>
  )
}
