import '../globals.css';
import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';

export const metadata = {
  title: 'Koraebi',
  description: 'Building digital products according to UX fundamentals and Software Engineering principles.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout children={children}/>
  )
}
