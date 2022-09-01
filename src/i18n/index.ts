import { LocaleCode } from '@tablecheck/locales';
import i18nBase from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';

const namespaces = Object.keys(en);

i18nBase.use(initReactI18next);

i18nBase.use({
  type: 'backend',
  async read<Namespace extends keyof typeof en>(
    language: LocaleCode.English,
    namespace: Namespace,
    callback: (
      errorValue: unknown,
      translations: null | typeof en[Namespace]
    ) => void
  ) {
    try {
      const resources = await import(`./locales/${language}.json`);
      callback(null, resources[namespace]);
    } catch (error) {
      callback(error, null);
    }
  }
});

export const initI18n = async (
  initialLocale: string = LocaleCode.English
): Promise<typeof i18nBase> => {
  if (i18nBase.isInitialized) {
    return Promise.resolve(i18nBase);
  }
  await i18nBase.init({
    fallbackLng: [LocaleCode.English],
    /**
     * Since i18next v21.0.0 JSON format has been changed to v4
     * (see: https://github.com/i18next/i18next/blob/master/CHANGELOG.md#2100)
     * until Lokalise cli tool supports changed plural keys need
     * compatability mode is needed
     */
    compatibilityJSON: 'v3',
    partialBundledLanguages: true,
    /**
     * Treat empty strings as missing keys to allow fallback on English
     */
    returnEmptyString: false,
    lng: initialLocale,
    resources: {
      en
    },

    ns: namespaces,
    defaultNS: 'application',

    debug: CONFIG.debug,

    interpolation: {
      /**
       * Not needed for react!
       */
      escapeValue: false
    },

    react: {
      useSuspense: false
    }
  });

  return i18nBase;
};
