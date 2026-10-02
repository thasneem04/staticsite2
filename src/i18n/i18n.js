import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';

const routeLanguage = typeof window !== 'undefined'
  ? (/^\/ar(?:\/|$)/.test(window.location.pathname) ? 'ar' : 'en')
  : null;
const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('acs-language') : null;
const defaultLanguage = routeLanguage || savedLanguage || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar }
    },
    lng: defaultLanguage,
    // Arabic pages must never silently display English when a key is missing.
    fallbackLng: false,
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('acs-language', lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  });
  
  // Set initial document attributes
  document.documentElement.lang = defaultLanguage;
  document.documentElement.dir = defaultLanguage === 'ar' ? 'rtl' : 'ltr';
}

export default i18n;
