import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";
import { initReactI18next } from "react-i18next";
import enUS from './en';
import zhCN from './zh';

const resources = {
  en: {
    translation: enUS,
  },
  zh: {
    translation: zhCN,
  },
};


i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(HttpBackend)

  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "en",

    fallbackLng: "en",
    debug: false,
    resources,
    // ns: ['translation'],
    // defaultNS: 'translation',
    supportedLngs: ["zh", "en"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      // loadPath: '/locales/{{lng}}/{{ns}}.json',
      backends: [LocalStorageBackend],
      backendOptions: [],
      cacheHitMode: "refreshAndUpdateStore",
    },

    react: {
      bindI18nStore: "added", // this way, when the HttpBackend delivers new translations (thanks to refreshAndUpdateStore), the UI gets updated
    },
  });

export default i18n;
