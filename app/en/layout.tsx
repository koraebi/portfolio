import '../globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Koraebi',
  description: 'Building digital products according to UX fundamentals and Software Engineering principles.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let translations;
  try {
    translations = (await import(`@/translations/en.json`)).home;
  } catch (error) {
    redirect('/error');
  }

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar translations={translations} locale="en"/>
        <div className={inter.className}>
          {children}
        </div>
        <Footer locale="en"/>
      </body>
    </html>
  );
}