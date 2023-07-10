import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import { useLocale } from 'next-intl';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default async function DefaultLayout({ children } : { children:React.ReactNode }) {
  const locale = useLocale();
  let translations;
  try {
    translations = (await import(`../translations/${locale}.json`)).home;
  } catch (error) {
    redirect('/error');
  }
  
  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <Navbar translations={translations} locale={locale}/>
        <div className={inter.className}>
          {children}
        </div>
        <Footer locale={locale}/>
      </body>
    </html>
  );
}