'use client';

import { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setLocale, setSelectedPage } from '@/redux/reducers/portfolioSlice';
import { Locales, Pages, } from '@/models/enums';
import { usePathname } from 'next/navigation';

export default function useLocale(index?: string) {
  const dispatch = useAppDispatch();
  const stateLocale = useAppSelector((selector) => selector.portfolio.locale);
  const stateSelectedPage = useAppSelector((selector) => selector.portfolio.selectedPage);
  const [translations, setTranslations] = useState<any>(null);
  const currentPage = usePathname().replaceAll('/', ''); 

  useEffect(() => {
    const availablePages: string[] = Object.values(Pages);
    if (currentPage && availablePages.includes(currentPage)) { 
      dispatch(setSelectedPage(currentPage as Pages));
    } else {
      dispatch(setSelectedPage(Pages.Home));
    }

    const locale = Cookies.get('locale');

    if (locale === Locales.French) {
      dispatch(setLocale(Locales.French));
    } else {
      dispatch(setLocale(Locales.English));
    }
  }, [dispatch, currentPage]);

  useEffect(() => {
      const getTranslations = async () => {
        const jsonTranslations = await import(`@/data/translations/${stateLocale}.json`);
        if (jsonTranslations && jsonTranslations[index || stateSelectedPage]) {
          setTranslations(jsonTranslations[index || stateSelectedPage]);
        }
      };
      
      getTranslations();
  }, [stateLocale, stateSelectedPage, index]);
  
  const getTranslation = (id: string): string => translations ? translations[id] : '';

  const setLocaleCallback = useCallback((locale: Locales) => {
    Cookies.set('locale', locale);
    dispatch(setLocale(locale));
  }, [dispatch]);

  return {
    t: getTranslation,
    locale: stateLocale,
    setLocale: setLocaleCallback,
  }
};