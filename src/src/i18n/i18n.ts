import * as i18next from 'i18next'
import * as LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

import pt from './pt/pt'
import en from './en/en'

const i18n = i18next
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'pt',
    react: {
      wait: true,
    },
    resources: {
      en: {
        translation: {
          ...en,
        },
      },
      pt: {
        translation: {
          ...pt,
        },
      },
    },
  })

export default i18n
