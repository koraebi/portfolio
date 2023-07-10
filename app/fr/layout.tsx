import '../globals.css';
import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';

export const metadata = {
  title: 'Koraebi',
  description: `Création de produits numériques en accord aux fondaments UX et aux principes d'ingénierie logicielle.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}
