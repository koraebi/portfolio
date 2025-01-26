import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoreProvider from '@/redux/StoreProvider';
import { ReactChildren } from '@/models/types';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

type generateMetadataProps = { params: { locale: string } };
export async function generateMetadata({ params }: generateMetadataProps) {
  const jsonTranslations = await import(`@/data/translations/${params.locale || 'en'}.json`);
  return {
    title: 'Koraebi',
    description: jsonTranslations['metadata']['description']
  };
};

export default async function LocaleLayout({ children }: ReactChildren) {
  return (
    <StoreProvider>
      <html>
        <body className='flex flex-col min-h-screen'>
          <Navbar/>
          <div className={inter.className}>
            {children}
          </div>
          <Footer/>
        </body>
      </html>
    </StoreProvider>
  );
};